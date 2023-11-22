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
    $extra = $_POST['nacenka'];
    $total = $count + ($count * ($extra / 100));

    $row = "UPDATE const SET name=?, costPrice=?, extraPrice=?, totalPrice=? WHERE id=?";
    $query = $mysqli->prepare($row);
    $query->bind_param("sssss", $name, $count, $extra, $total, $id); // Исправлен порядок параметров
    $query->execute();
    $query->close();
}
if (!empty($_SESSION["login"])) {
    echo "<h1>Редактировать базу данных</h1>" . "</br>";
} else {
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
                <th>Id</th>
                <th>Наименование</th>
                <th>Себестоимость</th>
                <th>Наценка в %</th>
                <th>Итог</th>
            </tr>
            <form action="redactBaza.php" method="POST">
            <?php
            $name = mysqli_query($mysqli, "SELECT * FROM const");
            while ($row_rs = mysqli_fetch_assoc($name)) {
                echo '
                    <tr>
                <td><input name="id" readonly ' . $row_rs["id"] . '" value="' . $row_rs["id"] . '"></td>
                <td><input name="name" readonly value="' . $row_rs["name"] . '"></td>
                <td><input name="count" type="number" id="ObjName_' . $row_rs["id"] . '" value="' . $row_rs["costPrice"] . '"></td>
                <td><input name="nacenka" type="number" id="price_' . $row_rs["id"] . '" value="' . $row_rs["extraPrice"] . '"></td>
                <td><input name="total" type="number" id="total_' . $row_rs["id"] . '" value="' . $row_rs["totalPrice"] . '"></td>
               
        </tr>

        ';
            }
            
            ?>
                    <button type="submit">сохранить</button>
                    </form>
        </table>
    </items>
</body>

</html>