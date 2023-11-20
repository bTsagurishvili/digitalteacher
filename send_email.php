<?php

$name = $_POST['name'];

$phone = $_POST['tel'];

$email = $_POST['email'];

$message = $_POST['message'];



$to      = 'b.tsagurishvili@gmail.com';

$subject = 'Новый отклик с сайта';

$message = "Имя: " . $name. ", \n Телефон: " . $phone. ", \n Email: " . $email. ", \n Сообщение: " . $message;

$headers = 'From: site@example.com' . "\r\n" .

    'X-Mailer: PHP/' . phpversion();



mail($to, $subject, $message, $headers);



die('ok');
