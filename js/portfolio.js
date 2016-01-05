var projects = [];

function Project (opts) {
  this.opts = opts;
  this.title = opts.title;
  this.category = opts.category;
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();

  $newProject.data('category', this.category);
  $newProject.data('author', this.author);
  $newProject.data('authorUrl', this.authorUrl);
  $newProject.data('title', this.title);
  $newProject.data('body', this.body);
  $newProject.data('publishedOn', this.publishedOn);

  $newProject.find('h1').html(this.title);
  // Include the publication date as a 'title' attribute to show on hover:
  $newProject.find('time[pubdate]').attr('title', this.publishedOn)

  // Display the date as a relative number of "days ago":
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago')

  $newProject.append('<hr>');
  $newProject.attr('class', '');
  // TODO: This cloned article is no longer a template, so we should remove that class...

  return $newProject;
}

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  projects.push(new Project(ele));
})

projects.forEach(function(a){
  $('#articles').append(a.toHtml())
});
