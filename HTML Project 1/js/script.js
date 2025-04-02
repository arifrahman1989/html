$(function () {


    $(".backTop").on('click', function () {

        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    if (scroll_top > 100) {
        $(".backTop").fadeIn(1000);
    } else {
        $(".backTop").fadeOut(1000);
    };

});

// Form function

document.getElementById('first-name').addEventListener('focus' text);
function text(e) {
    console.log('Inheritate');
}