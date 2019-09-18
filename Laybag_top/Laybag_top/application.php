<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Форма зворотнього звязку</title>
    <meta http-equiv="Refresh" content="3; URL=http://laybag.top/" /> 
</head>
<body>

    <?php

$sendto   = "gerbut33@gmail.com"; // почта, на которую будет приходить письмо
$username = $_POST['name'];       // сохраняем в переменную данные полученные из поля c именем
$usertel = $_POST['phone'];       // сохраняем в переменную данные полученные из поля c телефонным номером
$email = $_POST['email'];
// Формирование заголовка письма
$subject  = "Нове Замовлення!";
$headers  = "From: " . strip_tags($email) . "\r\n";
$headers .= "Reply-To: ". strip_tags($username) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Нове замовлення Laybag!</h2>\r\n";
$msg .= "<p><strong>Від кого:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>З email:</strong> ".$email."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
    echo "<center><img src='sent.png'></center>";
} else {
    echo "<center><img src='ne-tpravleno.png'></center>";
}

    ?>

</body>
</html>