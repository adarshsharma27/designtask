$(document).ready(function () {
	$(window).scroll(function () {
		setTimeout(function () {
			$(".cv-section").fadeIn(400).scroll();
		}, 500);
		if ($(this).scrollTop() > 200) {
			$(".scroll-button").fadeIn(400);

		} else
			$(".scroll-button").fadeOut(400);
	});
	$(".scroll-button").click(function () {
		$('html,body').animate({
			scrollTop: 0
		}, 1200)
	});


});
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
AOS.init();