<?php
$sendto   = "orik5299@gmail.com"; // почта, на которую будет приходить письмо
$username = $_POST['name'];       // сохраняем в переменную данные полученные из поля c именем
$usertel = $_POST['phone'];       // сохраняем в переменную данные полученные из поля c телефонным номером
$email = $_POST['email'];

// Формирование заголовка письма
$subject  = "Нове Замовлення!";
$headers = 'From: '.$email.'' . "\r\n" .
    'Reply-To: '.$email.'' . "\r\n" .
	'Content-type: text/html; charset=utf-8' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Нове замовлення Laybag!</h2>\r\n";
$msg .= "<p><strong>Від кого:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>З email:</strong> ".$email."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(mail($sendto, $subject, $msg, $headers)) {
    echo 1;
} else {
    echo 0;
}
