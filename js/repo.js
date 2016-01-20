(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    var qs= '?per_page=100&sort=updated';
    $.get("/github/users/SaulFein/repos?per_page=100&sort=updated", function(data) {
      repos.all = data;
      console.log("shit worx");
        // console.log( "Load was performed.");
    }).done(callback);
    // $.ajax({
    //   url: 'https://api.github.com/users/SaulFein/repos' + qs,
    //   type: 'GET',
    //   headers: {'Authorization': 'token ' + githubToken},
    //   success: function(data, message, xhr){
    //     repos.all=data;
    //     console.log('data loaded');
    //   },
    // })
    // .done(callback);
  };

    // DONE: How would you like to fetch your repos? Don't forget to call the callback.


  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
