$( document ).ready(function() {
    page('/', start);
    page('/events/:id', event);
    page('/events/new', newEvent);
    page('/event/story-view', storyView);
    page('*', notFound);
    page();
});

function event(ctx){
    $.get('./partials/event.part.html', function( source ) {
        var event = getEventById(ctx.params.id);
        var template = Handlebars.compile(source);
        $('body').html(template(event));
    });
}

function newEvent(){
    $('body').load('./partials/event-form.part.html');
}

function start(){
    $.get('./partials/start.part.html', function( source ) {
        var events = getEvents();
        var template = Handlebars.compile(source);
        $('body').html(template(events));
    });
}

function storyView(){
    $('body').load('./partials/story-view.part.html');
}

function notFound(){
    $('body').load('./partials/404.part.html');
}
