const URL = '/api/quotes';

let sessions = [];

export const getQuotes = () => fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('No response from server');
        }
        return response.json();
    })
    .then(result => {
        sessions = result.data;
        return sessions;
    });

export const getQuote = sessionId => {
    return sessions.find(session => {
        return session.id === sessionId;
    });
}