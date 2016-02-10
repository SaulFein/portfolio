(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.
    $about.find('ul').empty();
  };

  var render = function(repo) {// render function creas a new li for each repo and creats a link with the html_url from the github apit and repo full_name attribute for the link text.
    return $('<li>')
    .html('<a href="' + repo.html_url + '">' + repo.full_name + '</a>');
  };

  repoView.index = function() { //empties #about section 'ul's with ui function and then appends repos with stargazers_count to the  DOM in the #repolist section.
    ui();
    $('#repolist').append(
      repos.with('stargazers_count').map(render) //appends repos with a stargazers_count to repolist by running the render function for each repo.
    );
  };

  module.repoView = repoView;
})(window);
