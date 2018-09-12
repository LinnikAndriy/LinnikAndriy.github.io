$(document).ready(function(){
    new WOW().init();
    $("#main-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $('.main-header__nav').click(function () {
        let top = $('.sticky').offset().top;
        $('body,html').animate({
            scrollTop: top}, 1500);
    });


    window.onscroll = function() {
        if ($(document).scrollTop() > ($('.skills').offset().top-200)) {
            $('.chart').easyPieChart({
                   lineWidth: 8,
                   scaleLength: 0,
                   animate: 2000
            });
        }
    }
});