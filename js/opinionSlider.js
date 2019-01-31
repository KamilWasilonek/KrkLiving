$(document).ready(function () {
    var slideCount;
    var slideWidth;
    var slideHeight;
    var sliderUlWidth;
    calculateSliderSize();

    setInterval(function () {
        moveRight();
    }, 5000);

    function calculateSliderSize() {
        slideCount = $('#opinions-slider ul li').length;
        slideWidth = $('#opinions-slider ul li').width();
        slideHeight = $('#opinions-slider ul li').height();
        sliderUlWidth = slideCount * slideWidth;

        $('#opinions-slider').css({ width: slideWidth, height: slideHeight });

        $('#opinions-slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

        $('#opinions-slider ul li:last-child').prependTo('#opinions-slider ul');
    }

    function moveRight() {
        $('#opinions-slider ul').animate({
            left: - slideWidth
        }, 1000, function () {
            $('#opinions-slider ul li:first-child').appendTo('#opinions-slider ul');
            $('#opinions-slider ul').css('left', '');
        });
    };
})
