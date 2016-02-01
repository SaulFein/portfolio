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

  var template = Handlebars.compile($('#article-template').text());

  Article.prototype.toHtml = function() { //this prototype method compiles the handlebars template
    return template(this); // 'this' is each article passing through
  };

  Article.loadAll = function(rawData) { //this method takes in rawData as a param and sets Article.all = to rawData array and creates a new Article object for each item in the array.
    Article.all = rawData.map(function(ele) {
      return new Article(ele);
    });
  };

  Article.fetchAll = function() {// this method checks to see if there is anthing in local storage and if there is it calls the loadAll function and parses out the rawData in local storage then runs the articleView.initIndexPage method.
    if (localStorage.rawData) {
      //if etags exist
      Article.loadAll(JSON.parse(localStorage.rawData));
      articleView.initIndexPage();

    } else { //if local storage does not exist it runs $.getJSON ajax call to grab the rawData and put it into local storage and then calls the articleView.initIndexPage method.
      $.ajax({
        type: 'GET',
        url: '/data/my_projects.json',
        success: function(rawData, textStatus, request){
          var eTag = request.getResponseHeader('ETag');
          localStorage.eTag = eTag;
          Article.loadAll(rawData);
          localStorage.rawData = JSON.stringify(rawData);
          articleView.initIndexPage();
        },
        error: function (request, textStatus, errorThrown) {
          console.log(textStatus);
        }
      });
    }
  };

  Article.checkStorage = function() {
    if(localStorage.rawData){
      $.ajax({
        type: 'HEAD',
        url: '/data/my_projects.json',
        complete: function(response){
          if (localStorage.eTag === response.getResponseHeader('ETag')){
            console.log('Etag match detected... Populating from local storage data');
            Article.loadAll(JSON.parse(localStorage.rawData));
          } else{
            console.log('Etags did not match... Downloading new data');
            Article.fetchAll();
          }
        }
      });
    } else {
      console.log('No local storage detected... Downloading data');
      Article.fetchAll();
    }
  };

  module.Article = Article; // this attaches the Article object to the window.
}) (window);
