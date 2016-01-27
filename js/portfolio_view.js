(function(module) { //IIFE
  var articleView = {}; // articleView object

  articleView.setTeasers = function() {
    $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.

    $('.read-on').on('click', function(e){ // shows full article body when read on is clicked
      e.preventDefault();
      $(this).siblings('.article-body').children().show();
      $(this).hide();
    });
  };

  articleView.create = function() {
    var article;
    $('#articles').empty(); //empty anything in the aritcles section.
    // Instantiate an article based on what's in the form fields:
    article = new Article({
      title: $('#article-title').val(),
      author: $('#article-author').val(),
      authorUrl: $('#article-author-url').val(),
      category: $('#article-category').val(),
      body: $('#article-body').val(),
      img: $('#article-img').val(),
    });
    // Use the Handblebars template to put this new article into the DOM:
    $('#articles').append(article.toHtml());
  };

  articleView.initIndexPage = function() {
    Article.all.forEach(function(a){  //appends each article to the articles section
      $('#articles').append(a.toHtml());
    });
    articleView.setTeasers(); 
  };
  module.articleView = articleView; //attaches articleView to window object
})(window);
