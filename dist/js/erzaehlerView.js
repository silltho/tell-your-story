/**
 * Created by Maxi on 30.11.16.
 */
console.log("lul");
$(document).on('touchend', '.slide', function() {
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