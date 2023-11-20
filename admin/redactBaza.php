<?php 
session_start();
$pageStyles = 'admin.css';
require "../Header/Head.php";
require "../Header/Header.php";
require_once '../admin/connekt.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST["id"];
    $name = $_POST["name"];
    $count = $_POST["count"];
    $action = $_POST["action"];
    
    switch ($action){
        case "update":
            $row = "UPDATE const SET name = ?, count= ? WHERE id= ?";
            $query = $mysqli->prepare($row);
            $query->bind_param("sii", $name, $count, $id);
            break;
        case "add":
            $row = "INSERT INTO const VALUES(?,?,?,?)";
            $query = $mysqli->prepare($row);
            $query->bind_param("isis", $id, $name, $count, $_POST["type"]);
            break;
    }
    $query->execute();
    $query->close();
}
if(!empty($_SESSION["login"])){
echo "<h1>Редактировать базу данных</h1>" ."</br>";
}
else{
    header("Location: ./../admin/hac.php");
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
                <span id="Obj">'.$row_rs["type"].'</span>
            </div>
            <input type="none" name="action" value="update" style="display:none">
        </item>
        <button type="submit">Сохранить</button>
        </form>';
        }?>
    </items>
    <form action="../admin/redactBaza.php" method="POST">
        <h2>Добавить таблицу</h2>
        <label>Id</label>
        <input type="number" name="id">
        <label>Название</label>
        <input type="text" name="name">
        <label>Цена</label>
        <input type="number" name="count">
        <label>Тип</label>
        <input type="text" name="type">
        <input type="none" name="action" value="add" style="display:none">
        <button type="submit">Добавить запись</button>
    </form>
    
</body>
</html>