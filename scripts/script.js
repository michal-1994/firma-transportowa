const nav = document.querySelector('nav');
var previousScrollTop;
var isScrolling;

function hasScrolled() {

  var scrollTop = window.scrollY;
  if (scrollTop > previousScrollTop){
    nav.classList.add('nav__hidden');
  } else {
    nav.classList.remove('nav__hidden');
  }
  previousScrollTop = scrollTop;
}

document.addEventListener('scroll', function() {
  isScrolling = true;
}, false);

setInterval(function() {
  if (isScrolling) {
    hasScrolled();
    isScrolling = false;
  }
}, 100);

$(function(){

	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
      $('.scrollTopButton').addClass('show');
		} else {
			$('.scrollTopButton').removeClass('show');
		}
  });
	$('.scrollTopButton').click(function() { $.scrollTo($('body'), 400); });
	$('#start').click(function() { $.scrollTo($('body'), 400); });
  $('#btn').click(function() { $.scrollTo($('#services'), 500); });
	$('#uslugi').click(function() { $.scrollTo($('#services'), 500); });
	$('#onas').click(function() { $.scrollTo($('#about'), 500); });
	$('#kontakt').click(function() { $.scrollTo($('#contact'), 500); });
});