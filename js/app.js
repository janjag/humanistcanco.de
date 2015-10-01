'use strict'

var sections = $('section')
  , nav = $('#nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - (0.25*innerHeight),
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        if(nav.find('a[href="#home"]').hasClass('active')) {
            $('#left_col').find('q').hide(700, 'swing');
        }
        else {
            $('#left_col').find('q').show(700, 'swing');
        }
    }
  });
});

$('#left_col').find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 1000);
  
  return false;
});

(function age () {
var now = new Date(),
    year_now = now.getFullYear(),
    diff = year_now - 1987;
document.getElementById("age").innerHTML = diff;
})();