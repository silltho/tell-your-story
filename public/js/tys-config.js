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