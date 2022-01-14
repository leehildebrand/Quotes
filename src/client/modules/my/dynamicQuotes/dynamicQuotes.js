import { LightningElement, api, track } from 'lwc';

export default class dynamicQuotes extends LightningElement {
    dynamicCtor;
    username = 'Aditya';

    async connectedCallback() {
        const ctor = await import('my/quotesList');
        this.dynamicCtor = ctor.default;
    }
}