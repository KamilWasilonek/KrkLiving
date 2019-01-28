let showMenu = false;
const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu-nav');


menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        
        showMenu = false;
    }
}


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $('#menu-bar').css("background", "rgb(0,0,0,0.7)");
            $('#menu-nav').css("background", "rgb(0,0,0,0.7)");
        } else {
            $('#menu-bar').css("background", "rgb(0,0,0,1)");
            $('#menu-nav').css("background", "rgb(0,0,0,1)");
        }
    })
})