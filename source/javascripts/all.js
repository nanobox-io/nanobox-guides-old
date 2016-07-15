//= require_tree .
//= require _jquery-3.0.0.min.js
//= require _home-page.js

////////////// SHOW/HIDE VERSION DROPDOWN //////////////

$(function(){
  $('#version-btn').click(function(e) {
    $('#versions').toggleClass('open');
  });
  $(window).click(function() {
    if ($('#versions').hasClass('open')) {
      $('#versions').removeClass('open');
    }
  });
  $('#version-select').click(function(e){
      e.stopPropagation();
  });
})

/////////////// HIDE UNUSED NAV SECTIONS ///////////////

$(function(){
  $('ul#contents li:has(ul li.active)').addClass('open');
  $('ul#contents li ul.sub li:has(ul.sub)');
});

//////// TOGGLE OPEN / CLOSE CONTENTS SECTIONS ////////

$(function() {
  $('span.nav-toggle').on('click', function(e) {
    $(this).closest('li').toggleClass('open')
  })

  // SHOWS WHEN A DOC IS BURIED IN A CLOSED SECTION
  $('#contents li:has(.active)').on('click', function(e) {
    if (!$(this).hasClass('open')) {
      $(this).addClass('buried');
    }
    else {
      $(this).removeClass('buried')
    }
  })
})


/////////////// TOGGLE RESPONSIVE CONTENTS ///////////////

$(function(){
  $('#contents-btn').click(function(){
    $('#contents-btn .lines').toggleClass('open');
    $('#contents').toggleClass('closed')
  })
})


$(document).ready(function() {

  ////////////// ADD LINKS TO ALL HEADINGS //////////////

  $(".guide-content h2,h3,h4,h5,h6").each(function() {
    var link = "<a href=\"#" + $(this).attr("id") + "\"></a>"
    $(this).wrapInner( link );
  })

  //////////////////// SMOOTH SCROLL ////////////////////

  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 400, 'swing', function () {
      window.location.hash = target;
    });
  });

  //////////////// OPEN ACTIVE CATEGORY ////////////////

  $('#contents li.active').addClass('open')


})
