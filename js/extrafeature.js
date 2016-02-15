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
  $('.main-nav ul').show();
  $('#ham-menu').toggleClass('icon-menu icon-cross');
  $('.icon-cross').click(function(){
    $('.list-menu').hide();
  });
  $('.icon-menu').click(function(){
    $('.list-menu').show();
  });

});


//
// $('#click_advance').click(function(){
//   $('#display_advance').toggle('1000');
//   $("i",this).toggleClass("icon-circle-arrow-up icon-circle-arrow-down");
// });
