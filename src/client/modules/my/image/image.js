import { LightningElement, api } from 'lwc';

export default class Image extends LightningElement {
    // Return the internal speed property
    handleGetMeAnImage() {
        console.log('get me an image');
        fetch(`https://login.salesforce.com/services/oauth2/token`, {
            method: "POST",
            body: JSON.stringify({
                grant_type: "client_credentials",
                client_id: '3MVG9p1Q1BCe9GmDHjLErVNzNudMAYWVdMIhSK3M18C5jYAZgxFum1Vhhbwa.GdJvFGSWxdO.PUyXkt0vSBj9',
                client_secret: '03C51606D4DA2698B355932736073EB6779D524740BBE8119453F8C7938762A1',
                username: 'includingjudas@leehildebrand.name',
                password: 'Jm#k!kovPWU8vYxvSlOoVd62EMc3HmlXvYTgFAWd'
            })
        }).then((response) => {
            console.log(JSON.stringify(response));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        });
    }
}