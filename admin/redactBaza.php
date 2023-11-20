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
    <table>
            <tr>
                <th>Наименование</th>
                <th>Себестоимость</th>
                <th>Наценка</th>
                <th>Итог</th>
            </tr>
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
                <tr>
                <td><input name="name" readonly value="'.$row_rs["name"].'"></td>
                <td><input name="count" type="number" id="ObjName" value="'.$row_rs["count"].'"></td>
                <td><input name="nacenka" type="number" id="price" value="'.$row_rs["nacenka"].'"></td>
                <td>1111</td>
            </tr>
        </form>';
        }?>
    </items>
</body>
</html>