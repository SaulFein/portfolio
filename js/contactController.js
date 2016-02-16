(function(module) {
  var contactController = {};

  contactController.index = function() {
    $('#contact').show();
    $('#background-contact').show();
    $('#about-me').hide();
    $('#about').hide();
    $('#home-page').hide();
    $('#background-head').hide();
    $('#recent-projects').hide();
    $('#projects').hide();
  };

  module.contactController = contactController;
})(window);
