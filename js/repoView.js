(function(module) {
  var repoView = {};

  // DONE: Private methods declared here live only within the scope of the wrapping IIFE.
  var ui = function() {
    var $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  // DONE: How do you want to render a single repo as html? Return your filled in HTML template.
  var render = function(repo) {
    // var repoList = document.createElement('li');
    // $(repoList).append('<div>'+repo.full_name+'</div><div>'+repo.html_url+'</div><div>'+repo.description+'</div>');
    // console.log(repoList);
    return $('<li>')
    .html('<a href="' + repo.html_url + '">' + repo.full_name + '</a>');
  };

  // DONE: If all the data is loaded, we can prep the UI and render the repos.
  repoView.index = function() {
    ui();
  //   function stars(){
  //     return repos.stargazers_count.value > 0;
  //   }
  //   $('#repolist').append(
  //     repos.stargazers_count.filter(stars).map(render)
  //   );
  // };
    $('#repolist').append(
      repos.with('stargazers_count').map(render)
    );
  };

  module.repoView = repoView;
})(window);
