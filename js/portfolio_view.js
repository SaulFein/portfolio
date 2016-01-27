(function(module) {
  var articleView = {};

  articleView.setTeasers = function() {
    $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.

    $('.read-on').on('click', function(e){
      e.preventDefault();
      $(this).siblings('.article-body').children().show();
      $(this).hide();
    });

  };
  articleView.initNewArticlePage = function() {
    $('.tab-content').show();
    $('#export-field').hide();
    $('#article-json').on('focus', function(){
      this.select();
    });

    $('#new-form').on('change', 'input, textarea', articleView.create);
  };

  articleView.create = function() {
    var article;
    $('#articles').empty();

    // Instantiate an article based on what's in the form fields:
    article = new Article({
      title: $('#article-title').val(),
      author: $('#article-author').val(),
      authorUrl: $('#article-author-url').val(),
      category: $('#article-category').val(),
      body: $('#article-body').val(),
      img: $('#article-img').val(),
      publishedOn: $('#article-published:checked').length ? util.today() : null
    });

    // Use the Handblebars template to put this new article into the DOM:
    $('#articles').append(article.toHtml());

    // Activate the highlighting of any code blocks:
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });

    // Export the new article as JSON, so it's ready to copy/paste into blogArticles.js:
    $('#export-field').show();
    $('#article-json').val(JSON.stringify(article) + ',');
  };


  articleView.initIndexPage = function() {
    Article.all.forEach(function(a){
      $('#articles').append(a.toHtml());
    });

    articleView.setTeasers();
  };
  module.articleView = articleView;
})(window);
