$('.open').click(function(){

    $('.show').slideToggle('slow');
    if($(this).text() == 'close'){
        $(this).text('Show');
    } else {
        $(this).text('close');
    }
});