$( document ).ready(function() {
    page('/', start);
    page('/event', event);
    page('/event/story-view', storyView);
    page('*', notFound);
    page();
});

function event(){
    $('body').load('./partials/event.part.html');
}

function start(){
    $('body').load('./partials/start.part.html');
}

function storyView(){
    $('body').load('./partials/story-view.part.html');
}

function notFound(){
    $('body').load('./partials/404.part.html');
}
