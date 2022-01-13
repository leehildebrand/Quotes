import { LightningElement, api, track } from 'lwc';
//make the quotes available to the component
import { getQuotes } from 'data/quoteService';

var quotes = [];
export default class Quote extends LightningElement {
    @track quotes = [];
    connectedCallback() {
        getQuotes().then(result => {
            //add the quotes to the array
            this.quotes = this.allQuotes = result;
            this.quotes.forEach(element => {
                quotes.push(element.Text);
            });
        });
    }
}
