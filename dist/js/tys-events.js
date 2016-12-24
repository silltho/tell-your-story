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

//creates new Event if not already exists, else make array and save it in the sessionstorage object
function createNewEvent(){

    var name = document.getElementById('event-name').value;
    var description = document.getElementById('event-description').value;
    var from = document.getElementById('event-from').value;
    var to = document.getElementById('event-to').value;

    //TODO Value Validation

    var newEvent = {
        id: getNextEventId(),
        name: name,
        description: description,
        from: from,
        to: to
    };

    saveEvent(newEvent);
}

function getEvents() {
    return JSON.parse(localStorage.getItem(LOCALSTORAGE_CONFIG.eventsKey));
}

function getEventById(id) {
    var found = false;
    var events = getEvents();
    events.forEach(function(event) {
        if(event.id == id) found = event;
    });
    return found;
}

function saveEvent(newEvent){
    var events = getEvents();
    if(!events){
        events = [];
    }
    events.push(newEvent);
    localStorage.setItem(LOCALSTORAGE_CONFIG.eventsKey, JSON.stringify(events));
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