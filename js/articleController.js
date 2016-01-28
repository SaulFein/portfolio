
(function(module) {
  var articlesController = {};

  articlesController.index = function() {
    if(!$('#articles2')[0]){ //if articles2 has not been populated
      Article.fetchAll();// fetch all from local storage or make $.getJSON call and set articles to local storage then append content through handlebars template to articles
      $('main > section').hide(); //hide main sections
      $('#articles').show(); // show #articles section (specific part of main)
    } else {
      $('#articles').show(); //if articles2 has been populated by fetctAll hide about section.
      $('#about').hide();
    }
  };

  module.articlesController = articlesController;
})(window);
