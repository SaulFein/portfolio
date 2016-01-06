// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      // DONE: We need to take every author name from the page, and make it an option in the Author filter.
      //       To do so, Build an `option` DOM element that we can append to the author select box.
      //       Start by grabbing the author's name from `this` article element, and then use that bit of
      //       text to create the option tag (in a variable named `optionTag`),
      //       that we can append to the #author-filter select element.
      //       YAY, DOM manipulation!
      var val = $(this).find('address a').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#author-filter').append(optionTag);

      // DONE: Similar to the above, but...
      //       Avoid duplicates! We don't want to append the category name if the select
      //       already has this category as an option!
      val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article:not(.template)').each(function(){
        if ($(this).data('category') === $('#category-filter option:selected').text()){
          $(this).show();
        }
      });

    } else {
      $('article:not(.template)').show();


    }
    $('#author-filter').val('');
  });

};

articleView.handleMainNav = function() {

  $('.main-nav .tab').on('click', function(event) {
    var $targetData = $(this).data('content');
    $('.tab-content').each(function() {
      if($(this).attr('id') === $targetData) {
        $(this).show();
      } else {
        $(this).hide();
      };
    });
  });

  $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.

  $('.read-on').on('click', function(e){
    e.preventDefault();
    $(this).siblings('.article-body').children().show();
    $(this).hide();
  });

};

$(document).ready(function() {
  articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
});
