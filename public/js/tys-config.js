var FIREBASE_CONFIG = {
        apiKey: "AIzaSyBhMuIF7RjN2aYePvTtj8CWOC2JrZSfDFM",
        authDomain: "mmp2-c6757.firebaseapp.com",
        databaseURL: "https://mmp2-c6757.firebaseio.com",
        storageBucket: "mmp2-c6757.appspot.com",
        messagingSenderId: "1060144890044"
};

var LOCALSTORAGE_CONFIG = {
        eventsKey: 'events',
        eventsCounter: 'events-counter'
};

var EVENT_FORM_CONFIG = {
        selectors: {
            id: '#event-id',
            name: '#event-name',
            description: '#event-description',
            from: '#event-from',
            to: '#event-to'
        }
};

var ROUTES_CONFIG = {
        start: '/',
        event: '/events/:id',
        newEvent: '/events/new',
        editEvent:'/events/:id/edit',
        storyView: '/events/:id/story-view'
};