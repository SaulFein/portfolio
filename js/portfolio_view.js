(function(module) { //IIFE
  var articleView = {}; // articleView object

  articleView.setTeasers = function() {
    $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.
    $('.read-on').on('click', function(e){ // shows full article body when read on is clicked
      e.preventDefault();// prevents page refresh
      $(this).siblings('.article-body').children().show();
      $(this).hide();
    });
  };

  articleView.initIndexPage = function() {
    Article.all.forEach(function(a){  //appends each article to the articles section
      $('#articles').append(a.toHtml());// toHtml method runs Handlebars compile on each article.
    });
    articleView.setTeasers();
  };

  module.articleView = articleView; //attaches articleView to window object
})(window);
