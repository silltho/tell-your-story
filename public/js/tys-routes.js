$( document ).ready(function() {
    page(ROUTES_CONFIG.start, start);
    page(ROUTES_CONFIG.newEvent, newEvent);
    page(ROUTES_CONFIG.editEvent, editEvent);
    page(ROUTES_CONFIG.event, event);
    page(ROUTES_CONFIG.storyView, storyView);
    page('*', notFound);
    page();
});

function event(ctx){
    $.get('/partials/event.part.html', function( source ) {
        var event = getEventById(ctx.params.id);
        var template = Handlebars.compile(source);
        $('body').html(template(event));
    });
}

function newEvent(){
    $('body').load('/partials/event-form.part.html');
}

function editEvent(ctx){
    $.get('/partials/event-edit-form.part.html', function( source ) {
        var event = getEventById(ctx.params.id);
        var template = Handlebars.compile(source);
        $('body').html(template(event));
    });
}

function start(){
    $.get('/partials/start.part.html', function( source ) {
        var events = getEvents();
        var template = Handlebars.compile(source);
        $('body').html(template(events));
    });
}

function storyView(){
    $('body').load('/partials/story-view.part.html');
}

function notFound(){
    $('body').load('/partials/404.part.html');
}
