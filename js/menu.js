$(document).ready(function () {

    if(window.innerWidth > 768){
        $(".apartments #description-1").html("KrakowLiving dysponuje ponadto 9 wysokiej klasy apartamentami zlokalizowanych w Starym Mieście i na Kazimierzu.<br> Apartamenty w naszej ofercie są odpowiednie zarówno dla osób podróżujących służbowo jak i dla rodzin spędzających wakacje. Wszystkie posiadają dostęp do prywatnej łazienki, kuchni i sprzętu RTV.");
    }

    $(window).scroll(function () {
        console.log(window.innerWidth);
        if ($(window).scrollTop() >= 50) {
            $('#menu-bar').css("background", "rgb(0,0,0,0.7)");
            if (window.innerWidth < 992) {
                $('#menu-nav').css("background", "rgb(0,0,0,0.7)");
            }
            $('#logo').css("opacity", "0");
            $('#contact-text').css("opacity", "1");
        } else {
            $('#menu-bar').css("background", "rgb(0,0,0,1)");
            if (window.innerWidth < 992) {
                $('#menu-nav').css("background", "rgb(0,0,0,1)");
            }
            $('#logo').css("opacity", "1");
            $('#contact-text').css("opacity", "0");
        }
    })
})