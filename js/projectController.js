
(function(module) {
  var projectsController = {};

  projectsController.index = function() {
    if(!$('#projects2')[0]){ //if projects2 has not been populated
      Project.fetchAll();// fetch all from local storage or make $.getJSON call and set projects to local storage then append content through handlebars template to projects
      $('main > section').hide();//hide main sections
      $('#background-head').hide();
      $('#recent-projects').hide();
      $('#home-page').hide();
      $('#projects').show(); // show #projects section (specific part of main)
      $('#about').show();

    } else {
      $('#background-head').hide();
      $('#recent-projects').hide();
      $('#home-page').hide();
      $('#projects').show(); //if projects2 has been populated by fetctAll hide about section.
      $('#about').show();
    }
    repos.requestRepos(repoView.index); //AJAX request and on success run callback function repoView.index which puts repos into html
    Project.checkStorage();
  };

  module.projectsController = projectsController;
})(window);
