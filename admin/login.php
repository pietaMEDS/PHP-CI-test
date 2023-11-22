<?php
$pageStyles = 'login.css';
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
       <link rel="stylesheet" href="../admin/loginStyle.css">
</head>
<body>
    <form action="../admin/admin.php" method="POST">
         <div class="login_card">
            <h2>Авторизация</h3>
            <input type="text" name="login" placeholder="Логин" class="inputs"></input>
            <input type="password" name="password" placeholder="Пароль" class="inputs"></input>
            <button type="submit" class="submitBtn" id="submitId">Войти</button>
        </div>
    </form>
</body>
</html>