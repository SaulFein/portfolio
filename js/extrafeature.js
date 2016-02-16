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
  // $('.list-menu').toggle();
  $('#ham-menu').toggleClass('icon-menu icon-cross');
  $('#list-menu').toggleClass('lm-height lm-close');

  // $('.list-menu').toggleClass('lm-close');

});

$('.icon-cross').click(function(){
  $('.main-nav ul li').toggleClass('drop');
  // $('.list-menu').toggleClass('lm-close');

});
$('.icon-menu').click(function(){
  $('.main-nav ul li').toggleClass('drop');
  // $('.list-menu').toggleClass('lm-height');


});



// $('a').click(function(){
//   $('nav').toggleClass('drop');
// })

//
// $('#click_advance').click(function(){
//   $('#display_advance').toggle('1000');
//   $("i",this).toggleClass("icon-circle-arrow-up icon-circle-arrow-down");
// });
