/**
 * Created by Maxi on 30.11.16.
 */


$(document).ready(function () {
	//initialize swiper when document ready
	var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		direction: 'horizontal',
		pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		spaceBetween: 30
	})
});

console.log("lul");
$(document).on('click', '.slide', function() {
	var fadeClass = $("header");
	console.log("hallo");
	if (fadeClass.hasClass("fade-out")) {
		fadeClass.removeClass("fade-out").addClass("fade-in");
		//fadeClass.addClass("fade-in");
	}
	else {
		fadeClass.removeClass("fade-in").addClass("fade-out");
		//fadeClass.addClass("fade-out");
	}
});

//window.addEventListener('slide', function (evt) { console.log(evt);});