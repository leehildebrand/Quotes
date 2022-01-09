// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const path = require('path');

const app = express();
app.use(helmet());
app.use(compression());

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3002;
const DIST_DIR = './dist';

app.use(express.static(DIST_DIR));

app.use(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

app.get('/api/v1/endpoint', (req, res) => {
    res.json({ success: true });
});

app.get('/api/quotes', (req, res) => {
    const soql = `SELECT Text__c FROM Quote__c`;
    conn.query(soql, (err, result) => {
        if (err) {
            res.sendStatus(500);
        } else if (result.records.length === 0) {
            res.status(404).send('Session not found.');
        } else {
            const formattedData = result.records.map(quoteRecord => {
                return {
                    Text: quoteRecord.Text__c
                };
            });
            res.send({ data: formattedData });
        }
    });
});

app.listen(PORT, () =>
    console.log(
        `✅  API Server started: http://${HOST}:${PORT}/api/v1/endpoint`
    )
);
