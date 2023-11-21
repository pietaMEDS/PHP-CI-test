<?php session_start();
if (!empty($_SESSION["login"])) {
    echo "Добро пожаловать " . $_SESSION['login'];
} else {
    echo 'Unknow';

    header("Location: ../admin/hac.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <a href="../admin/logout.php">Выйти</a>
    <a href="../admin/redactBaza.php">Редактировать базу</a>
</body>

</html>