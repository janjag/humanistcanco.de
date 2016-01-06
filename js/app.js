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
            
            // Updating adres bar with location hash
            var hash = '#' + $(this).attr('id');
            history.pushState(null, null, hash);
            
            //Toggling active class on navigation elements 
            nav.find('li a[href="#' + $(this).attr('id') + '"]').addClass('active');
            
            //Toggling qoute block and photo/link border in header
            if (nav.find('li a[href="#about"]').hasClass('active')) {
                $('header').find('q').addClass('hidden').hide(600, 'swing');
                $('header').find('.photo').addClass('active');
            } else {
                $('header').find('q').removeClass('hidden').show(600, 'swing');
                $('header').find('.photo').removeClass('active');
            }
        }
        
    });
    
}

$(window).on('scroll', scroller);

//test code to se if there are any changes on some devices
$(window).on('touchmove', scroller);

// Scroll efect on click
$('header').find('a').on('click', function (event) {
    event.preventDefault();
    var $el = $(this),
        id = $el.attr('href');
        
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 1000, function () {
        window.location.hash = id;
    });
});

// sliding header off the screen when hamburger icon is visible
$(document).on('click', function (event) {
    var button = $('.menu_button'),
        header = $('.header'),
        target = $(event.target),
        wrapper = $('.wrapper');
    if (button.is(':visible') && header.hasClass('header_slide') == true && target.attr('class') == 'hcc-navicon') {
        event.stopPropagation();
        header.toggleClass('header_slide');
        wrapper.toggleClass('wide');
        button.toggleClass('wide');
        nav.find('li a[href="#about"]').toggleClass('hidden');
    }
    else if (button.is(':visible') && header.hasClass('header_slide') == false) {
        event.stopPropagation();
        header.addClass('header_slide');
        wrapper.addClass('wide');
        button.addClass('wide');
        nav.find('li a[href="#about"]').removeClass('hidden');
    }
});
