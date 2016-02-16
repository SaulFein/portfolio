(function(module) {
  var homeController = {};

  homeController.index = function() {
    $('#projects').hide();
    $('#about-me').hide();
    $('#contact').hide();
    $('#repolist').hide();
    $('#background-contact').hide();
    $('#background-head').show();
    $('#recent-projects').show();
    $('.unslider').show();
    $('#home-page').show();
  };
  module.homeController = homeController;
})(window);
