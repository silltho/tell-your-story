$( document ).ready(function() {
    page('/', start);
    page('/event', event);
    page('/events/new', newEvent);
    page('/event/story-view', storyView);
    page('*', notFound);
    page();
});

function event(){
    $('body').load('./partials/event.part.html');
}

function newEvent(){
    $('body').load('./partials/event-form.part.html');
}

function start(){
    $('body').load('./partials/start.part.html');
    eval($('script').html());
    //showAllEvents('#eventList');
}

function storyView(){
    $('body').load('./partials/story-view.part.html');
}

function notFound(){
    $('body').load('./partials/404.part.html');
}
