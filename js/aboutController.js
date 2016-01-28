(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index); //AJAX request and on success run callback function repoView.index which puts repos into html
  };

  module.aboutController = aboutController;
})(window);
