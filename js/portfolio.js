(function(module) {
  function Article (opts) {
    this.author = opts.author;
    this.authorUrl = opts.authorUrl;
    this.title = opts.title;
    this.category = opts.category;
    this.body = opts.body;
    this.publishedOn = opts.publishedOn;
    this.img = opts.img;
  }

  Article.all = [];

  Article.prototype.toHtml = function() {
    var template = Handlebars.compile($('#article-template').text());

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    this.body = marked(this.body);

    return template(this);
  };

  Article.loadAll = function(rawData) {
    rawData.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });
    Article.all = rawData.map(function(ele) {
      return new Article(ele);
    });
  };

  Article.fetchAll = function() {
    if (localStorage.rawData) {
      Article.loadAll(JSON.parse(localStorage.rawData));
      articleView.initIndexPage();

    } else {
      $.getJSON('/data/my_projects.json', function(rawData) { //rawData is not the array of objects
        Article.loadAll(rawData);
        localStorage.rawData = JSON.stringify(rawData);
        articleView.initIndexPage();
      });
    }
  };

  module.Article = Article;
}) (window);
