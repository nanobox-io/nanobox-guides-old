//= require_tree .
//= require _jquery-3.0.0.min.js
//= require _home-page.js
//= require _is.min.js

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

  $(".guide-content h2, .guide-content h3, .guide-content h4, .guide-content h5, .guide-content h6").each(function() {
    var link = "<a href=\"#" + $(this).attr("id") + "\"></a>"
    $(this).wrapInner( link );
  })

  ////////////////// BUILD IN-PAGE TOC //////////////////

  var ToC =
    "<ul class='toc'>";

  $(".guide-content h2, .guide-content h3, .guide-content h4").each(function() {
    var el = $(this);
    var title = el.text();
    var link = "#" + el.attr("id");

    var item =
      "<li class='" + $(this).prop('nodeName').toLowerCase() + "'>" +
        "<a href='" + link + "'>" +
          title +
        "</a>" +
      "</li>";

    ToC += item;

  })

  ToC +=
    "</ul>"

  if (is.mobile()) {
    $(ToC).insertAfter("h1");
    $(".table-of-contents").hide();
  } else {
    $(".table-of-contents").append(ToC);
  }

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

  ////////////////// CONTENT FADE-IN ///////////////////

  setTimeout(function() {
    $('.guide-content, .table-of-contents').addClass('loaded');
  }, 10);

  //////////////// OPEN ACTIVE CATEGORY ////////////////

  $('#contents li.active').addClass('open')


})
