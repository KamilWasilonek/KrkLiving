$(document).ready(function () {
    $(window).scroll(function () {
        console.log(window.innerWidth);
        if ($(window).scrollTop() >= 50) {
            $('#menu-bar').css("background", "rgb(0,0,0,0.7)");
            if (window.innerWidth < 992) {
                $('#menu-nav').css("background", "rgb(0,0,0,0.7)");
            }
        } else {
            $('#menu-bar').css("background", "rgb(0,0,0,1)");
            if (window.innerWidth < 992) {
                $('#menu-nav').css("background", "rgb(0,0,0,1)");
            }
        }
    })

    $('.reservation .footer .panel').css("display", "none");
})