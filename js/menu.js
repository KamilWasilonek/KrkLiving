$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {

            $('#menu-bar').css("background", "rgba(255,255,255,0.7)");
            $('#logo').css("opacity", "0");
            $('#contact-text').css("opacity", "1");

            if (window.innerWidth < 992) {
                $('#menu-nav').css("background", "rgba(255,255,255,0.7)");
            } else {
                $('#menu-nav').css("background", "rgba(255,255,255,0)");
            }

        } else {
            $('#menu-bar').css("background", "rgba(255,255,255,1)");
            $('#logo').css("opacity", "1");
            $('#contact-text').css("opacity", "0");

            if (window.innerWidth < 992) {
                $('#menu-nav').css("background", "rgbaa(255,255,255,1)");
            } else {
                $('#menu-nav').css("background", "rgba(255,255,255,0)");
            }

        }
    })

    $(window).resize(function () {
        if ($(window).scrollTop() >= 50) {
            if (window.innerWidth < 992) {
                $('#menu-nav').css("background", "rgba(255,255,255,0.7)");
            } else {
                $('#menu-nav').css("background", "rgba(255,255,255,0)");
            }
        } else {
            if (window.innerWidth < 992) {
                $('#menu-nav').css("background", "rgba(255,255,255,1)");
            } else {
                $('#menu-nav').css("background", "rgba(255,255,255,0)");
            }
        }
    })

    let showMenu = false;
    $("#menu-btn").click(function () {

        if (!showMenu) {
            $("#menu-btn").addClass('close');
            $('#menu-nav').addClass('show');

            showMenu = true;
        } else {
            $("#menu-btn").removeClass('close');
            $('#menu-nav').removeClass('show');

            showMenu = false;
        }
    });
})