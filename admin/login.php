<?php
$pageStyles = 'login.css';
if (isset($_COOKIE["login"]) && isset($_COOKIE["password"])) {
    $login = $_COOKIE["login"];
    $password = $_COOKIE["password"];
    header("Location: ./../admin/redactBaza.php");
} else {
    $login = "";
    $password = "";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./../admin/login.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
       <link rel="stylesheet" href="../admin/loginStyle.css">
</head>
<body>
    <form action="../admin/admin.php" method="POST">
         <div class="login_card">
            <h2>Авторизация</h2>
            <input type="text" name="login" placeholder="Логин" class="inputs" value="<?php echo $login; ?>"></input>
            <input type="password" name="password" placeholder="Пароль" class="inputs" value="<?php echo $password; ?>"></input>
            <button type="submit" class="submitBtn" id="submitId">Войти</button>
        </div>
    </form>
</body>
</html>