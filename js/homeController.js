(function(module) {
  var homeController = {};

  homeController.index = function() {
    $('#projects').hide();
    $('#about').hide();
    $('.unslider').show();
    $('#home-page').show();
  };
  module.homeController = homeController;
})(window);
