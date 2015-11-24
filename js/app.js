'use strict'

var sections = $('section'),
    nav = $('#nav');


function scroller() {
    event.preventDefault();
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - (0.25 * innerHeight),
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('li a').removeClass('active');
            
            nav.find('li a[href="#' + $(this).attr('id') + '"]').addClass('active');
            if (nav.find('li a[href="#home"]').hasClass('active')) {
                $('#left_col').find('q').hide(700, 'swing');
            } else {
                $('#left_col').find('q').show(700, 'swing');
            }
        }
        
    });
    
}

$(window).on('scroll', scroller);

//test code to se if there are any changes on some devices
$(window).on('touchmove', scroller);


$('#left_col').find('a').on('click', function () {
    event.preventDefault();
    var $el = $(this),
        id = $el.attr('href');
        
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 1000, function () {
        window.location.hash = id;
    });
});

