<?php

// $name = $_POST['name'];

// $phone = $_POST['tel'];

// $email = $_POST['email'];

$message = " test "  //$_POST['message'];



$to      = 'b.tsagurishvili@gmail.com';

$subject = 'მაილი წარმატებით გაიგზავნა';

$message =  "შეტყობინება: " . $message;

$headers = 'From: site@example.com' . "\r\n" .

    'X-Mailer: PHP/' . phpversion();



mail($to, $subject, $message, $headers);



die('ok');
