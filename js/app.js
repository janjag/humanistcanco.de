'use strict'

var sections = $('section'),
    nav = $('#nav');


function scroller() {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - (0.5 * innerHeight),
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('li a').removeClass('active');
            
            var hash = '#' + $(this).attr('id');
            history.pushState(null, null, hash);
            
            nav.find('li a[href="#' + $(this).attr('id') + '"]').addClass('active');
            if (nav.find('li a[href="#about"]').hasClass('active')) {
                $('header').find('q').hide(400, 'swing');
                $('header').find('.photo').addClass('active');
            } else {
                $('header').find('q').show(400, 'swing');
                $('header').find('.photo').removeClass('active');
            }
        }
        
    });
    
}

$(window).on('scroll', scroller);

//test code to se if there are any changes on some devices
$(window).on('touchmove', scroller);


$('header').find('a').on('click', function () {
    event.preventDefault();
    var $el = $(this),
        id = $el.attr('href');
        
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 1000, function () {
        window.location.hash = id;
    });
});

