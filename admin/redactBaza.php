<?php
session_start();
$pageStyles = 'admin.css';
require "../Header/Head.php";
require "../Header/Header.php";
require_once '../admin/connekt.php';


if (!empty($_SESSION["login"])) {
    echo "Добро пожаловать " . $_SESSION['login'];
} else {
    echo 'Unknow';
}




if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST["id"];
    $name = $_POST["name"];
    $count = $_POST["count"];
    $action = $_POST["action"];

    // echo $id;

    $row = "UPDATE const SET name = ?, count= ? WHERE id= ?";
    $query = $mysqli->prepare($row);
    $query->bind_param("sii", $name, $count, $id);

    switch ($action) {
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
    $res['name'] = $name;
    $res['count'] = $count;
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
    <h1>редактировать базу данных</h1>
    <a href="../index.php">Выйти</a>
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
        while ($row_rs = mysqli_fetch_assoc($name)) // массив с данными
        {
        ?>
        <?php
            // foreach($row_rs as $val) //перебор массива в цикле
            // {
            echo '
                <form action="../admin/redactBaza.php" method="POST">
<<<<<<< HEAD
                <item>
            <div class="img">
                <input name="id" readonly value="' . $row_rs["id"] . '">
            </div>
            <div class="name">
                <input name="name" id="ObjName" value="' . $row_rs["name"] . '">
            </div>
            <div class="price">
                <input name="count" type="number" id="price" value="' . $row_rs["count"] . '">

                <span id="Obj">Руб</span>
            </div>

                <span id="Obj">' . $row_rs["type"] . '</span>
            </div>
            <input type="none" name="action" value="update" style="display:none">

        </item>
        <button type="submit">Сохранить</button>
=======
                <tr>
                <td><input name="name" readonly value="'.$row_rs["name"].'"></td>
                <td><input name="count" type="number" id="ObjName" value="'.$row_rs["count"].'"></td>
                <td><input name="nacenka" type="number" id="price" value="'.$row_rs["nacenka"].'"></td>
                <td>1111</td>
            </tr>
>>>>>>> da6cbf87df0a44659b209c8139c4b4e7b3a64bdb
        </form>';
        }
        ?>
    </items>
<<<<<<< HEAD
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
=======
>>>>>>> da6cbf87df0a44659b209c8139c4b4e7b3a64bdb
</body>

</html>