<?php

function clean_text($text){
    $text = trim($text);
    $text = stripcslashes($text);
    $text = htmlspecialchars($text);
    return $text;
}


if(isset($_POST['submit'])) {

    $name = clean_text($_POST['name']);
    
    $number = clean_text($_POST['number']);
   
    $email = clean_text($_POST['email']);
 
    $topic = clean_text($_POST['topic']);

    $message = nl2br(clean_text($_POST['message']));
   

    $errorEmpty = false; 
    $errorName = false;
    $errorNumber = false;
    $errorEmail = false;

    if(empty($name) || empty($number) || empty($email) || empty($topic) || empty($message)) {
        echo "Please fill all fields!";
        $errorEmpty = true;
    }

    elseif (!preg_match("/^[a-zA-Z ]*$/",$name)){
       echo "Only letters and white space allowed in name";
       $errorName = true;
    }

    elseif (strlen($name) < 3 || strlen($name) > 30){
        echo "Name should be between 3-30 characters";
        $errorName = true;
    }

    elseif(!preg_match("/^[\+0-9\-\(\)\s]*$/",$number)){
        echo 'Wrong number format';
        $errorNumber = true;
    }

    elseif (strlen($number) < 8 || strlen($number) > 20){
        echo "Number should be between 6-20 characters";
        $errorName = true;
    }

    elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Please enter valid e-mail adress!";
        $errorEmail = true;
    }

    elseif (strlen($email) > 50){
        echo "Email should be between less 50 characters";
        $errorName = true;
    }

    elseif (strlen($topic) > 200){
        echo "Topic should be between less 200 characters";
        $errorName = true;
    }

    else {  
        require 'mailer/PHPMailerAutoload.php';
        $mail = new PHPMailer;

        
        $mail->isSMTP(); // Set mailer to use SMTP
        $mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers
        $mail->SMTPAuth = true; // Enable SMTP authentication
        $mail->Username = 'wasilonek95@gmail.com'; // SMTP username
        $mail->Password = 'Qwer@1234'; // SMTP password
        $mail->SMTPSecure = 'ssl'; // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 465; // TCP port to connect to
        $mail->setFrom($email, $name); // Admin ID
        $mail->addAddress('wasilonek95@gmail.com', 'Kamil'); // Business Owner ID
        $mail->CharSet = "UTF-8";
        $mail->isHTML(true); // Set email format to HTML
        $mail->Subject = 'KrakówLiving';


        $mail->Body = '        
        <!DOCTYPE html>
        <html lang="pl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Email</title>
        
        
            <style>
            html,
            body {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
            }
    
            body {
                width: 100%;
                background-color: #f3f3f3;
                font-size: 24px;
            }
    
            .title {
                width: 100%;
                font-family: "Playfair Display";
                font-weight: 400;
                text-align: center;
                margin: 0;
                font-size: 60px;
                color: #fff;
                background-color: #992727;
            }
    
            .main-info {
                padding: 20px 100px;
    
            }
    
            table {
                border-collapse: collapse;
                width: 100%;
                padding: 30px;
                cursor: default;
            }
    
            table,
            th,
            td {
                border: 1px solid black;
                clear: both;
            }
    
            td {
                padding: 15px;
                text-align: left;
                min-width: 300px;
            }
    
            tr:nth-child(even) {
                background-color: lightgray;
            }
            
            </style>
        </head>
        <body>

            <h1 class="title">Nowa wiadomość '. $name . '</h1>

            <div class="main-info">
            <table>
                <tr>
                    <td>
                    <strong>Imię i nazwisko </strong>
                    </td>

                    <td>
                    ' . $name . '
                    </td>
                </tr>

                <tr>
                    <td>
                    <strong>Email </strong>
                    </td>

                    <td>
                    ' . $email . '
                    </td>
                </tr>

                <tr>
                    <td>
                    <strong>Numer kontaktowy </strong>
                    </td>

                    <td>
                    ' . $number . '
                    </td>
                </tr>

                <tr>
                    <td>
                    <strong>Temat wiadomości </strong>
                    </td>

                    <td>
                    ' . $topic . '
                    </td>
                </tr>

                <tr>
                    <td>
                    <strong>Treść wiadomości </strong>
                    </td>

                    <td>
                    ' . $message . '
                    </td>
                </tr>
            </table>
            </div>
        
        </body>
        </html>';


        if(!$mail->send()) {
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            echo 'Success';
        }
    }
}
else{
    echo "Submit wrong";
}

?>
