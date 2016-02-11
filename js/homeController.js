(function(module) {
  var homeController = {};

  homeController.index = function() {
    $('#projects').hide();
    $('#about').hide();
    $('#background-head').show();
    $('#recent-projects').show();
    $('.unslider').show();
    $('#home-page').show();
  };
  module.homeController = homeController;
})(window);
