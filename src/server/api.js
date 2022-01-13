// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');

// To enable server-side sessions
const session = require('express-session');

// JSForce
const jsforce = require('jsforce');

// OPTIONAL: Logging service. Alternately, can use console.error as well
// In production, we should write to a file, not just console
const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        })
    ]
});

// Import Salesforce Authentication modules
const AuthenticationService = require('./authenticationService');
const IntegrationService = require('./integrationService');

// Load .env configuration file
require('dotenv').config();

const app = express();
app.use(helmet());
app.use(compression());

//Retrieve Configuration
const HOST = process.env.API_HOST || 'localhost';
const PORT = process.env.API_PORT || 3002;
const {
    SALESFORCE_LOGIN_DOMAIN,
    SALESFORCE_CLIENT_ID,
    SALESFORCE_CLIENT_SECRET,
    SALESFORCE_CALLBACK_URL,
    NODE_SESSION_SECRET_KEY
} = process.env;

// Check configuration
if (
    !(
        SALESFORCE_LOGIN_DOMAIN &&
        SALESFORCE_CLIENT_ID &&
        SALESFORCE_CLIENT_SECRET &&
        SALESFORCE_CALLBACK_URL &&
        NODE_SESSION_SECRET_KEY
    )
) {
    logger.error(
        'Cannot start app: missing mandatory configuration. Check your .env file or your environment variables.'
    );
    process.exit(-1);
}

// Initialize OAuth2 config
const oauth2 = new jsforce.OAuth2({
    loginUrl: SALESFORCE_LOGIN_DOMAIN,
    clientId: SALESFORCE_CLIENT_ID,
    clientSecret: SALESFORCE_CLIENT_SECRET,
    redirectUri: SALESFORCE_CALLBACK_URL
});

// Initialize Auth Services
const authService = new AuthenticationService(logger, oauth2);
const integrationService = new IntegrationService(logger, authService);

// Enable server-side sessions
app.use(
    session({
        secret: NODE_SESSION_SECRET_KEY,
        cookie: { secure: 'auto' },
        resave: false,
        saveUninitialized: false
    })
);

app.get('/api/v1/endpoint', (req, res) => {
    res.json({ success: true });
});

// Hook up REST endpoints with service calls

// Login to Salesforce
app.get('/oauth2/login', (req, res) => {
    authService.redirectToAuthUrl(res);
});

// Callback function to get Auth Token
app.get('/oauth2/callback', (req, res) => {
    authService.doCallback(req, res);
});

// Get Logged In User Details
app.get('/oauth2/whoami', (req, res) => {
    authService.getLoggedInUserDetails(req, res);
});

// Logout from Salesforce
app.get('/oauth2/logout', (req, res) => {
    authService.doLogout(req, res);
});

// Get Conference-Session Details
app.get('/api/conference-sessions/:id?', (req, res) => {
    integrationService.getConferenceSessionDetails(req, res);
});

//extract creds from env
const { SF_USERNAME, SF_PASSWORD, SF_TOKEN, SF_LOGIN_URL } = process.env;

//check login readiness
if (!(SF_USERNAME && SF_PASSWORD && SF_TOKEN && SF_LOGIN_URL)) {
    console.error(
        'Cannot start app: missing mandatory configuration. Check your .env file.'
    );
    process.exit(-1);
}

//connect to Salesforce
const conn = new jsforce.Connection({
    loginUrl: SF_LOGIN_URL
});

//handle login errors
conn.login(SF_USERNAME, SF_PASSWORD + SF_TOKEN, err => {
    if (err) {
        console.error(err);
        process.exit(-1);
    }
});

const DIST_DIR = './dist';

app.use(express.static(DIST_DIR));

app.use(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

app.get('/api/v1/endpoint', (req, res) => {
    res.json({ success: true });
});

app.get('/api/quotes', (req, res) => {
    const soql = `SELECT Id,Text__c,Picture__c FROM Quote__c ORDER BY Order__c`;
    conn.query(soql, (err, result) => {
        if (err) {
            res.sendStatus(500);
        } else if (result.records.length === 0) {
            res.status(404).send('Session not found.');
        } else {
            const formattedData = result.records.map(quoteRecord => {
                return {
                    Id: quoteRecord.Id,
                    Text: quoteRecord.Text__c,
                    Picture: quoteRecord.Picture__c
                };
            });
            res.send({ data: formattedData });
        }
    });
});

var _request = {
    url: '/services/data/v53.0',
    method: 'get',
    body: '',
    headers: {
        "Content-Type": "application/json"
    }
};

conn.login(SF_USERNAME, SF_PASSWORD + SF_TOKEN, function (err, userInfo) {
    if (err) { return console.error(err); }
    console.log('Access Token: ' + conn.accessToken);
    console.log('Instance URL: ' + conn.instanceUrl);
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);
});

app.get('/api/image', (req, res) => {
    conn.request(_request, function (err, resp) {
        console.log(resp);
    });
});

app.listen(PORT, () =>
    console.log(
        `✅  API Server started: http://${HOST}:${PORT}/api/v1/endpoint`
    )
);
