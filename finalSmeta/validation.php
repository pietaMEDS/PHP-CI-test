<?php
require './../admin/connekt.php';

$username = $_POST['name'];
$usermail = $_POST['email'];
$userphone = $_POST['phone'];

if (!empty($username) && !empty($usermail) && !empty($userphone)) {

    if (validatePhoneNumber($userphone)) {
        if (validateEmail($usermail)) {
            echo "Спасибо за обратную связь!";
            $sql = "SELECT * FROM user_info WHERE email = '$usermail' OR phone = '$userphone'";
            $result = $mysqli->query($sql);

            if ($result->num_rows<=0) {
                $sql = "INSERT INTO user_info (name, email, phone) VALUES ('$username', '$usermail', '$userphone')";
                $mysqli->query($sql);
            }
            $mysqli->close();
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