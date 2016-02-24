$(document).ready(function($) {
  $('.my-slider').unslider({
    autoplay: true,
    infinite: true,
    delay: 3000,
    nav: false,
    arrows: false,
  });
});

$('#ham-menu').click(function(){
  $('#ham-menu').toggleClass('icon-menu icon-cross');
  $('#list-menu').toggleClass('lm-height lm-close');
});

$('.icon-cross').click(function(){
  $('.main-nav ul li').toggleClass('drop');
});

$('.icon-menu').click(function(){
  $('.main-nav ul li').toggleClass('drop');
});
