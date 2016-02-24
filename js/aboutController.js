(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#about-me').show();
    $('#about').hide();
    $('#home-page').hide();
    $('#background-head').hide();
    $('#background-contact').hide();
    $('#recent-projects').hide();
    $('#projects').hide();
    $('#contact').hide();
  };

  module.aboutController = aboutController;
})(window);
