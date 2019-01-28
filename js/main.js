var i = 0;
var texts = [
    'Apartament o wysokim standardzie, dopieszczony w każdym szczególe. Czyste i przestronne pomieszczenia, wygodne łóżka, świetne wyposażenie w podstawowe sprzęty. Miły consierge. Byliśmybardzo zadowoleni.<br><br>Emwuku, booking.com',

    'Doskonała lokalizacja(5 minut pieszo do Starego Miasta),w pobliżu znajdują się dwa parkingi. Komfortowy i cichy apartament znajdujący się na parterze z oknami od strony podwórka. Bardzo chętnie zatrzymamy się w nim ponownie. <br><br>Urszula, booking.com',

    'This was a lovely modern stylist apartment. Bed was super comfortable. Bathroom clean and well designed.General decor was very nice. <br> <br>Thumpi, booking.com']

var time = 3000;

function changeText() {
    if (i < texts.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeText()", time);
    document.getElementById("content").innerHTML = texts[i];
}

window.onload = changeText;


