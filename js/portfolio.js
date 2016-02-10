(function(module) {//IIFE
  function Project (opts) { //Project object contstructor
    this.author = opts.author; // setting the properties
    this.authorUrl = opts.authorUrl;
    this.title = opts.title;
    this.category = opts.category;
    this.body = opts.body;
    this.publishedOn = opts.publishedOn;
    this.img = opts.img;
  }

  Project.all = [];//Project.all object array

  var template = Handlebars.compile($('#project-template').text());
  var template2 = Handlebars.compile($('#slide-template').text());

  Project.prototype.toHtml = function() { //this prototype method compiles the handlebars template
    return template(this); // 'this' is each article passing through
  };

  Project.prototype.toHtml2 = function() { //this prototype method compiles the handlebars template // 'this' is each article passing through
    return template2(this);
  };

  Project.loadAll = function(rawData) { //this method takes in rawData as a param and sets Project.all = to rawData array and creates a new Project object for each item in the array.
    Project.all = rawData.map(function(ele) {
      return new Project(ele);
    });
  };

  Project.fetchAll = function() {// this method checks to see if there is anthing in local storage and if there is it calls the loadAll function and parses out the rawData in local storage then runs the projectView.initIndexPage method.
    if (localStorage.rawData) {
      //if etags exist
      Project.loadAll(JSON.parse(localStorage.rawData));
      projectView.initIndexPage();

    } else { //if local storage does not exist it runs $.getJSON ajax call to grab the rawData and put it into local storage and then calls the projectView.initIndexPage method.
      $.ajax({
        type: 'GET',
        url: '/data/my_projects.json',
        success: function(rawData, textStatus, request){
          var eTag = request.getResponseHeader('ETag');
          localStorage.eTag = eTag;
          Project.loadAll(rawData);
          localStorage.rawData = JSON.stringify(rawData);
          projectView.initIndexPage();
        },
        error: function (request, textStatus, errorThrown) {
          console.log(textStatus);
        }
      });
    }
  };

  Project.checkStorage = function() {
    if(localStorage.rawData){
      $.ajax({
        type: 'HEAD',
        url: '/data/my_projects.json',
        complete: function(response){
          if (localStorage.eTag === response.getResponseHeader('ETag')){
            console.log('Etag match detected... Populating from local storage data');
            Project.loadAll(JSON.parse(localStorage.rawData));
          } else{
            console.log('Etags did not match... Downloading new data');
            Project.fetchAll();
          }
        }
      });
    } else {
      console.log('No local storage detected... Downloading data');
      Project.fetchAll();
    }
  };

  module.Project = Project; // this attaches the Project object to the window.
}) (window);
