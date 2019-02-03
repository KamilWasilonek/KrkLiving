$(document).ready(function () {


    if($.browser.webkit){
        $("#contact-page").css('background-attachment', 'scroll');
    }
  




    // $('#loading-icon').hide();

    $('#name').focusout(function () {
        checkName();
    });

    $('#number').focusout(function () {
        checkNumber();
    });

    $('#email').focusout(function () {
        checkEmail();
    });

    $('#topic').focusout(function () {
        checkTopic();
    });

    $('#message').focusout(function () {
        checkMessage();
    });


    $("#submit").click(function () {

        $('#send-info').hide();

        checkName();
        checkNumber();
        checkEmail();
        checkTopic();
        checkMessage();

        let name = $('#name').val();
        let number = $('#number').val();
        let email = $('#email').val();
        let topic = $('#topic').val();
        let message = $('#message').val().split('/n');
        let submit = $('#submit').val();

        if (checkName() && checkNumber() && checkEmail() && checkTopic() && checkMessage()) {

            $('#loading-icon').show();

            $.ajax({
                type: 'POST',
                url: $('#form').attr('action'),
                data: 'name=' + name + '&number=' + number + '&email=' + email + '&topic=' + topic + '&message=' + message +
                    '&submit=' + submit,

                success: function (response) {
                    if (response === 'Success') {
                        $('#send-info').html("Wiadomość została poprawnie wysłana <br>");
                        $('#loading-icon').hide();
                        $('#send-info').show();

                        $('#name').val("");
                        $('#number').val("");
                        $('#email').val("");
                        $('#topic').val("");
                        $('#message').val("");
                    }

                    else {
                        $('#send-info').html("Błąd wysyłania");
                        $('#loading-icon').hide();
                        $('#send-info').show();
                    }
                }
            });
        }
        return false;
    });


    let nameReg = /^[a-zA-Z\s]*$/;
    let numberReg = /^[\d ()+-]+$/;
    let emailReg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;


    function checkName() {
        let name = clean_text($('#name').val());

        if (name.length == 0) {
            $('#name-message').html('Imię i nazwisko jest wymagane');
            $('#name-message').show();
        }
        else if (name.length < 3 || name.length > 40) {
            $('#name-message').html('Wymagana długość to 3 - 40 znaków');
            $('#name-message').show();
        }
        else if (!name.match(nameReg)) {
            $('#name-message').html('Wymagane jest użycie jedynie liter oraz białych znaków');
            $('#name-message').show();
        }
        else {
            $('#name-message').hide();
            return true;
        }
    }

    function checkNumber() {
        let number = clean_text($('#number').val());

        if (number.length == 0) {
            $('#number-message').html('Numer kontaktowy jest wymagany');
            $('#number-message').show();
        }
        else if (number.length < 6 || number.length > 20) {
            $('#number-message').html('Wymagana długość to 6 - 20 znaków');
            $('#number-message').show();
        }
        else if (!number.match(numberReg)) {
            $('#number-message').html('Niewłaściwy format');
            $('#number-message').show();
        }
        else {
            $('#number-message').hide();
            return true;
        }
    }

    function checkEmail() {
        let email = clean_text($('#email').val());

        if (email.length == 0) {
            $('#email-message').html('E-mail jest wymagany');
            $('#email-message').show();
        }
        else if (email.length > 50) {
            $('#email-message').html('E-mail musi zawierać mniej niż 50 znaków');
            $('#email-message').show();
        }
        else if (!email.match(emailReg)) {
            $('#email-message').html('Niewłaściwy format');
            $('#email-message').show();
        }
        else {
            $('#email-message').hide();
            return true;
        }
    }

    function checkTopic() {
        let topic = clean_text($('#topic').val());

        if (topic.length == 0) {
            $('#topic-message').html('Temat jest wymagany');
            $('#topic-message').show();
        }
        else if (topic.length > 500) {
            $('#topic-message').html('Wiadomość nie moze przekroczyć 500 znaków');
            $('#topic-message').show();
        }
        else {
            $('#topic-message').hide();
            return true;
        }
    }

    function checkMessage() {
        let message = clean_text($('#message').val());

        if (message.length == 0) {
            $('#textArea-message').html('Treść wiadomości jest wymagana');
            $('#textArea-message').show();
        }
        else {
            $('#textArea-message').hide();
            return true;
        }
    }

    function clean_text(text) {
        return text.trim();
    }
});