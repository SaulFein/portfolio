(function(module) {
  var homeController = {};

  homeController.index = function() {
    if(!$('#slide')[0]) {
      Project.fetchAll();
      Project.all.forEach(function(a){  //appends each project to the projects section
        $('#home-page').append(a.toHtml2());
      });
      $('#projects').hide();
      $('#about').hide();
    } else {
      $('#home-page').show();
      $('#projects').hide();
      $('#about').hide();
    };
    // $('#home-page > article:gt(0)').hide();
    //
    // setInterval(function() {
    //   $('#home-page > article:first')
    //     .fadeOut(1000)
    //     .next()
    //     .fadeIn(1000)
    //     .end()
    //     .appendTo('#home-page');
    // }, 3000);
  };


  module.homeController = homeController;
})(window);
