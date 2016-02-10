(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#about').show().siblings().hide();
    $('#home-page').hide();
    $('#projects').hide();
    repos.requestRepos(repoView.index); //AJAX request and on success run callback function repoView.index which puts repos into html
    Project.checkStorage();
  };

  module.aboutController = aboutController;
})(window);
