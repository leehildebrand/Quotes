import { LightningElement, api } from 'lwc';
//make the quotes available to the component
import { getQuotes } from 'data/quoteService';

//since the app has to load, we show a brief while the quotes are loading
var quotes = ['Gathering quotes...'];

const SPEED_CLASS_MAP = {
    slow: 'fade-slow',
    fast: 'fade-fast',
    medium: 'fade-medium'
};

//TO-DO: make speed configurable in custom metadata
var DEFAULT_SPEED = 'slow';

export default class Greeting extends LightningElement {
    // Get the quotes
    connectedCallback() {
        getQuotes().then(result => {
            //clear the loading message
            quotes = [];
            //add the quotes to the array
            this.quotes = this.allQuotes = result;
            this.quotes.forEach(element => {
                quotes.push(element.Text);
            });
        });
    }

    animationSpeed = DEFAULT_SPEED;
    index = 0;
    isAnimating = true;

    @api
    set speed(value) {
        if (SPEED_CLASS_MAP[value]) {
            this.animationSpeed = value;
        } else {
            this.animationSpeed = DEFAULT_SPEED;
        }
        this.isAnimating = true;
    }

    // Return the internal speed property
    get speed() {
        return this.animationSpeed;
    }

    // Get the current greeting
    get greeting() {
        return quotes[this.index];
    }

    // Map slow, medium, fast to CSS Animations
    get animationClass() {
        if (this.isAnimating) {
            return SPEED_CLASS_MAP[this.speed];
        }
        return 'hide';
    }

    //Handle the animation ending, update to next hello
    handleAnimationEnd() {
        this.isAnimating = false;
        this.index = (this.index + 1) % quotes.length;

        setTimeout(() => this.updateGreeting(), 500);
    }

    // Update to the next greeting and start animating
    updateGreeting() {
        this.isAnimating = true;
    }
}