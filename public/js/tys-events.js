//var eventNumber = 1;

function getNextEventId(){
    var id = localStorage.getItem(LOCALSTORAGE_CONFIG.eventsCounter)
    if(!id){
        id = 0
    } else {
        id++;
    }
    localStorage.setItem(LOCALSTORAGE_CONFIG.eventsCounter, id);
    return id;
}

function getEventFormData() {
    var id = $(EVENT_FORM_CONFIG.selectors.id).val();
    var name = $(EVENT_FORM_CONFIG.selectors.name).val();
    var description = $(EVENT_FORM_CONFIG.selectors.description).val();
    var from = $(EVENT_FORM_CONFIG.selectors.from).val();
    var to = $(EVENT_FORM_CONFIG.selectors.to).val();

    if(!id) id = getNextEventId();

    //TODO Value Validation

    return {
        id: id,
        name: name,
        description: description,
        from: from,
        to: to,
        files: []
    };
}

//creates new Event if not already exists, else make array and save it in the sessionstorage object
function createNewEvent(){
    var newEvent = getEventFormData();
    addEvent(newEvent);
    page('/events/' + newEvent.id);
}

function getEvents() {
    return JSON.parse(localStorage.getItem(LOCALSTORAGE_CONFIG.eventsKey));
}

function getEventById(id) {
    var events = getEvents();
    for(var i = 0; i< events.length; i++) {
        if(events[i].id == id) return events[i];
    }
    return false;
}

function addEvent(newEvent) {
    var events = getEvents();
    if(!events) events = [];

    events.push(newEvent);
    localStorage.setItem(LOCALSTORAGE_CONFIG.eventsKey, JSON.stringify(events));
}

function updateEvent(updatedEvent){
    var events = getEvents();
    for(var i = 0; i< events.length; i++) {
        if(events[i].id == updatedEvent.id) {
            events[i] = updatedEvent;
            break;
        }
    }
    localStorage.setItem(LOCALSTORAGE_CONFIG.eventsKey, JSON.stringify(events));
}

function addFileToEvent(eventId, fileURL, fileDescription) {
    var event = getEventById(eventId);
    var newFile = {
        url: fileURL,
        description: fileDescription
    };

    if(!event.files) event.files = [];
    event.files.push(newFile);
    updateEvent(event);
}

function saveUpdatedEvent(){
    var updatedEvent = getEventFormData();
    updateEvent(updatedEvent);
    page('/events/' + updatedEvent.id);
}

/*function showAllEvents(containerSelector){
    var events = getEvents();
    var eventsHtml = 'keine Events vorhanden!';
    if(events){
        eventsHtml = '';
        events.forEach(function(event) {
            eventsHtml += createEventHtml(event);
        })
    }
    $(containerSelector).html(eventsHtml);
}

function createEventHtml(event) {
    var source = $('#event-template').html();
    var template = Handlebars.compile(source);
    return template(event);
}*/