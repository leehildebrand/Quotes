//give our API an endpoint
const URL = '/api/image';

let quotes = [];

//get quotes from Salesforce
export const getImage = () => fetch(URL)
    .then(response => {
        if (!response.ok) {
            // If response was not OK, throw error
            throw new Error('No response from server');
        }
        return response.json();
    })
    .then(result => {
        // If successful, return the quotes
        image = result.data;
        return image;
    });