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
    // $(repos.all).each(this.render($(this)));

    // The jQuery `append` method lets us append an entire array of HTML elements at once,
    // So we can use a little FP to transform our data-set into DOM nodes:
    $('#repolist').append(
      repos.with('full_name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
