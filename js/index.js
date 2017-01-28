function goto(target) {
    console.log(target);
    $('html, body').animate({
        scrollTop: $(target).offset().top - 60
    }, 300);
}

$(window).on('resize', function() {
    resize();
});

function resize() {
    if ($(window).width() > 768) {
        $('.sm').show();
        $('.bottom').height($('.sm').height());
    } else {
        $('.bottom').height(50);
        $('.sm').hide();
    }
}

resize();
setTimeout(resize, 200)

$(window).load(function() {
    resize();
})
