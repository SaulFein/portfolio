(function(module) { //IIFE
  var projectView = {}; // projectView object

  // projectView.setTeasers = function() {
  //   $('.project-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.
  //   $('.read-on').on('click', function(el){ // shows full article body when read on is clicked
  //     el.preventDefault();// prevents page refresh
  //     $(this).siblings('.project-body').children().show();
  //     $(this).hide();
  //   });
  // };

  projectView.initIndexPage = function() {
    Project.all.forEach(function(a){  //appends each project to the projects section
      $('#projects').append(a.toHtml());// toHtml method runs Handlebars compile on each project.
    });
    // projectView.setTeasers();
  };

  module.projectView = projectView; //attaches projectView to window object
})(window);
