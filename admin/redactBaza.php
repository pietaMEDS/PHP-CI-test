<?php 
session_start();
$pageStyles = 'admin.css';
require "../Header/Head.php";
require "../Header/Header.php";
require_once '../admin/connekt.php';

if(!empty($_SESSION["login"])){
    echo "Добро пожаловать ".$_SESSION['login'];
} else {
    echo 'Unknow';
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST["id"];
    $name = $_POST["name"];
    $count = $_POST["count"];
    
    // echo $id;
    
    $row = "UPDATE const SET name = ?, count= ? WHERE id= ?";
    $query = $mysqli->prepare($row);
    $query->bind_param("sii", $name, $count, $id);
    $query->execute();
    $query->close();
    $res['name'] = $name;
    $res['count'] = $count;
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
    <h1>редактировать базу данных</h1>
    <a href="../index.php">Выйти</a>
    <items>
        <?php
    $name = mysqli_query($mysqli, "SELECT * FROM const");
    while($row_rs = mysqli_fetch_assoc($name)) // массив с данными
        {
        ?>
        <?php
            // foreach($row_rs as $val) //перебор массива в цикле
            // {
                echo '
                <form action="../admin/redactBaza.php" method="POST">
                <item>
            <div class="img">
                <input name="id" readonly value="'.$row_rs["id"].'">
            </div>
            <div class="name">
                <input name="name" id="ObjName" value="'.$row_rs["name"].'">
            </div>
            <div class="price">
                <input name="count" type="number" id="price" value="'.$row_rs["count"].'">
                <span id="Obj">Руб</span>
            </div>
        </item>
        <button type="submit">Сохранить</button>
        </form>';
        }?>
    </items>
</body>
</html>