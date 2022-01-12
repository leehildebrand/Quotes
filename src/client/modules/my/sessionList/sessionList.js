import { LightningElement } from 'lwc';
import { getSessions } from 'data/sessionService';
import { routeMeTo } from 'my/routerModule';

export default class SessionList extends LightningElement {
    sessions = [];
    connectedCallback() {
        getSessions().then((result) => {
            this.sessions = this.allSessions = result;
        });
    }

    handleSearchKeyInput(event) {
        const searchKey = event.target.value.toLowerCase();
        this.sessions = this.allSessions.filter((session) =>
            session.text.toLowerCase().includes(searchKey)
        );
    }

    goToHome() {
        routeMeTo('home');
    }
}
