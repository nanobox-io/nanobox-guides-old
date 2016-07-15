//= require _jquery-3.0.0.min.js

$(document).ready(function() {

  ///////////////////// HOME PAGE PROJECT SEARCH SHOW/HIDE /////////////////////

  $('input#project-search').keyup(function(){

    var string = $('input#project-search').val().toLowerCase();
    var matched = $( "a.project[search-tags*='" + string + "']" )
    var unmatched = $( "a.project").not("[search-tags*='" + string + "']" )

    // Show/Hide Matched Projects
    if ($('input#project-search').val() ) {
      $(matched).show(200);
      $(unmatched).hide(200);
    } else {
      $('a.project').show(200);
    }

    // Show/Hide Categories
    $('.category').each(function () {
      if ( $('input#project-search').val() === '' && $(this).not(':visible') ) {
        $(this).fadeIn(400);
      }
      else if ($(this).has(matched).length > 0 ) {
        $(this).fadeIn(400);
      }
      else if ($(this).has(matched).length === 0 ) {
        $(this).hide(200);
      }
    })

    // Show/Hide No Results
    if ( matched.length > 0 || $('input#project-search').val() === '') {
      $('#no-results').fadeOut(200)
    }
    if ( matched.length === 0 &&  $('input#project-search').val() != '') {
      $('#no-results').fadeIn(1000);
    }

  })

  // If a user comes back to the page after searching,
  // the search string is cached. This reruns the filter script
  // if there is a cached search string
  if ($('input#project-search').not(':empty')) {
    $('input#project-search').keyup()
  }

})
