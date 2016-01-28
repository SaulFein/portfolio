(function(module) {//IIFE
  function Article (opts) { //Ariticle object contstructor
    this.author = opts.author; // setting the properties
    this.authorUrl = opts.authorUrl;
    this.title = opts.title;
    this.category = opts.category;
    this.body = opts.body;
    this.publishedOn = opts.publishedOn;
    this.img = opts.img;
  }

  Article.all = [];//Article.all object array

  Article.prototype.toHtml = function() { //this prototype method compiles the handlebars template
    var template = Handlebars.compile($('#article-template').text());
    return template(this); // 'this' is each article passing through
  };

  Article.loadAll = function(rawData) { //this method takes in rawData as a param and sets Article.all = to rawData array and creates a new Article object for each item in the array.
    Article.all = rawData.map(function(ele) {
      return new Article(ele);
    });
  };

  Article.fetchAll = function() {// this method checks to see if there is anthing in local storage and if there is it calls the loadAll function and parses out the rawData in local storage then runs the articleView.initIndexPage method.
    if (localStorage.rawData) {
      Article.loadAll(JSON.parse(localStorage.rawData));
      articleView.initIndexPage();

    } else { //if local storage does not exist it runs $.getJSON ajax call to grab the rawData and put it into local storage and then calls the articleView.initIndexPage method.
      $.getJSON('/data/my_projects.json', function(rawData) {
        Article.loadAll(rawData);
        localStorage.rawData = JSON.stringify(rawData);
        articleView.initIndexPage();
      });
    }
  };

  module.Article = Article; // this attaches the Article object to the window.
}) (window);
