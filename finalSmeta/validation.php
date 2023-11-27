<?php
$username = $_POST['name'];
$usermail = $_POST['email'];
$userphone = $_POST['phone'];

if (!empty($username) && !empty($usermail) && !empty($userphone)) {
    $formattedPhone = validatePhoneNumber($userphone);
    if ($formattedPhone) {
        if (validateEmail($usermail)) {
            echo "Спасибо за обратную связь!";
        } else {
            echo "Введен неккоректный email!";
        }
    } else {
        echo "Ваш номер телефона не соответсвует норме!";
    }
} else {
    echo "Все поля должны быть заполнены!";
}

function validatePhoneNumber($phoneNumber)
{
    $phoneNumber = preg_replace('/\D/', '', $phoneNumber);

    if (strlen($phoneNumber) != 11) {
        return false;
    }

    $prefix = substr($phoneNumber, 0, 1);
    if ($prefix != '7' && $prefix != '8') {
        return false;
    }

    return true;
}

function validateEmail($email) {
    $email = trim($email);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return false;
    }

    $domain = substr($email, strpos($email, '@') + 1);
    if (!checkdnsrr($domain, 'MX')) {
        return false;
    }

    return true;
}