(function(module) { //IIFE
  var projectView = {}; // projectView object

  projectView.initIndexPage = function() {
    Project.all.forEach(function(a){  //appends each project to the projects section
      $('#projects').append(a.toHtml());// toHtml method runs Handlebars compile on each project.
    });
  };

  module.projectView = projectView; //attaches projectView to window object
})(window);
