<?php
$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['msg'];

if (!empty($email) && !empty($name) && !empty($msg)) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $receiver = 'domik.assistant@domik.space';
        $subject = "From: $name <$email>";
        $body = "Name: $name\nEmail: $email\nMessage:\n$msg\n\nRegards,\n$name";
        $sender = "From: $email";

        if (mail($receiver, $subject, $body, $sender)) {
            echo 'Ваше сообщение отправлено!';
        } else {
            echo 'Возникла ошибка при отправке собощения';
        }
    } else {
        echo 'Введите правильный email!';
    }
} else {
    echo 'Все поля должны быть заполнены!';
}
