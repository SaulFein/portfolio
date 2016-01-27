(function(module) { //IIFE
  var repos = {}; //repos object

  repos.all = []; //repos object array

  repos.requestRepos = function(callback) { //function for ajax request to github api
    $.get('/github/users/SaulFein/repos' +
          '?per_page=100' +
          '&sort=updated')
    .done(function(data, message, xhr) { //on done sets repos.all to the data from the response
      repos.all = data;
    })
    .done(callback); // on done fires the callback to set repos.all
  };



  repos.with = function(attr) { //this function filters the repos with a star attribute
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos; //attaches repos to window object
})(window);
