$(document).ready(function () {

    // $(window).resize(function () {
    //     if (window.innerWidth > 768) {
    //         $(".apartments #description-1").html("KrakowLiving dysponuje ponadto 9 wysokiej klasy apartamentami zlokalizowanych w Starym Mieście i na Kazimierzu.<br> Apartamenty w naszej ofercie są odpowiednie zarówno dla osób podróżujących służbowo jak i dla rodzin spędzających wakacje. Wszystkie posiadają dostęp do prywatnej łazienki, kuchni i sprzętu RTV.");
    //     } else {
    //         $(".apartments #description-1").html("KrakowLiving dysponuje ponadto 9 wysokiej klasy apartamentami zlokalizowanych w Starym Mieście i na Kazimierzu.");
    //     }
    // })


    var i = 1;
    var texts = [
        'Apartament o wysokim standardzie, dopieszczony w każdym szczególe. Czyste i przestronne pomieszczenia, wygodne łóżka, świetne wyposażenie w podstawowe sprzęty. Miły consierge. Byliśmybardzo zadowoleni.<br><br>Emwuku, booking.com',

        'Doskonała lokalizacja(5 minut pieszo do Starego Miasta),w pobliżu znajdują się dwa parkingi. Komfortowy i cichy apartament znajdujący się na parterze z oknami od strony podwórka. Bardzo chętnie zatrzymamy się w nim ponownie. <br><br>Urszula, booking.com',

        'This was a lovely modern stylist apartment. Bed was super comfortable. Bathroom clean and well designed.General decor was very nice. <br> <br>Thumpi, booking.com'];

    $("#opinion #content").html(texts[0]);

    setInterval(function () {
        if (i < texts.length - 1) {
            i++;
        } else {
            i = 0;
        }
        $("#opinion #content").html(texts[i]);
    }, 4000);

    $('.flexslider').flexslider({
        pauseOnAction: true,
        slideshowSpeed: 5000,
        animationSpeed: 1000,
    });
})