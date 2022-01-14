import { LightningElement, api } from 'lwc';
import { getImage } from 'data/imageService';

export default class Image extends LightningElement {
    // Return the internal speed property
    handleGetMeAnImage() {
        console.log('get me an image');

        // Get the image from the API
        getImage();
    }
}