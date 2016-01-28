(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.
    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = function(repo) {
    return $('<li>')
    .html('<a href="' + repo.html_url + '">' + repo.full_name + '</a>');
  };

  repoView.index = function() {
    ui();
    $('#repolist').append(
      repos.with('stargazers_count').map(render) //appends repos with a stargazers_count to repolist by running the render function for each repo.
    );
  };

  module.repoView = repoView;
})(window);
