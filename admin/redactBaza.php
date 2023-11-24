<?php
session_start();
if (isset($_COOKIE["login"])) {
    echo "" ;
} else {
    header("Location: ../admin/hac.php");
}
$pageStyles = 'admin.css';
require "../Header/Head.php";
require "../Header/Header.php";
require_once '../admin/connekt.php';
echo "<h2>Добро пожаловать admin</h2>";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST["id"];
    $name = $_POST["name"];
    $count = $_POST["count"];
    $extra = $_POST['nacenka'];
    $total = array(); // Create an empty array for storing the calculated totals

    // Iterate over the arrays and perform calculations
    for ($i = 0; $i < count($id); $i++) {
        $subtotal = $count[$i] + ($count[$i] * ($extra[$i] / 100));
        $total[] = $subtotal; // Store the calculated total in the array
    }

    $row = "UPDATE const SET name=?, costPrice=?, extraPrice=?, totalPrice=? WHERE id=?";
    $query = $mysqli->prepare($row);

    // Iterate over the arrays and bind the parameters in the loop
    for ($i = 0; $i < count($id); $i++) {
        $query->bind_param("sssss", $name[$i], $count[$i], $extra[$i], $total[$i], $id[$i]);
        $query->execute();
    }

    $query->close();
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
    <h2><a href="../admin/logout.php">Выйти</a></h2>
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
                <td><input name="id[]" readonly value="' . $row_rs["id"] . '"></td>
                <td><input name="name[]" readonly value="' . $row_rs["name"] . '"></td>
                <td><input name="count[]" type="number" id="ObjName_' . $row_rs["id"] . '" value="' . $row_rs["costPrice"] . '"></td>
                <td><input name="nacenka[]" type="number" id="price_' . $row_rs["id"] . '" value="' . $row_rs["extraPrice"] . '"></td>
                <td><input name="total[]" type="number" id="total_' . $row_rs["id"] . '" value="' . $row_rs["totalPrice"] . '"></td>
            </tr>';
        }
        ?>
        <tr>
            <td colspan="5">
                <button type="submit">Сохранить</button>
            </td>
        </tr>
    </form>
</table>
    </items>
</body>

</html>