import { LightningElement, api } from 'lwc';

export default class Image extends LightningElement {
    // Return the internal speed property
    handleGetMeAnImage() {
        console.log('get me an image');

        fetch(
            'https://masterlessonplan-dev-ed.my.salesforce.com/services/oauth2/token?grant_type=password&client_id=3MVG95jctIhbyCprEPLTDPFuztR2nBB2OC1651OjS1aQdsZku09wfl0Ch92d0e2b_ym4zjyMtVXPEOxP9MPn4&client_secret=2F6C323553411226FE3DFA3883655E50DB50BB6DFD651D049E99D8B3CF8AA87D&username=mlphub@leehildebrand.name.mlphub&password=9^$GnW46Weh*u!nh3o907AzGMP8VZx57yHHrrDeIb',
            {
                method: 'post',
                headers: { 'Content-type': 'application/json;charset=UTF-8' }
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw Error(response);
                } else {
                    return response.json();
                }
            })
            .then((jsonResponse) => {
                console.log(jsonResponse);
            })
            .catch((error) => {
                this.error = error;
                console.log(error);
            });

        /*
        
                let headers = new Headers();
        
                headers.append('Content-Type', 'application/json');
                headers.append('Accept', 'application/json');
        
                //headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
                headers.append("Access-Control-Allow-Origin", "*");
                headers.append("Access-Control-Allow-Credentials", "true");
                headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
                headers.append("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
                fetch(`https://salesforcecorsroxy.herokuapp.com/services/oauth2/token`, {
                    method: "POST",
                    headers: headers,
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
        */
    }
}