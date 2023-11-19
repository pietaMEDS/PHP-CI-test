<?php 
session_start();
require_once '../admin/connekt.php';

if(!empty($_SESSION["login"])){
    echo "Добро пожаловать ".$_SESSION['login'];
} else {
    echo 'ГУЛЯЙ ВАСЯ';
}

$sql = $mysqli->prepare("SELECT * FROM const");
$sql->execute();
$result = $sql->get_result();
$res = $result->fetch_assoc();
$sql->close();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST["name"];
    $count = $_POST["count"];
    
    $row = "UPDATE const SET name=?, count=?";
    $query = $mysqli->prepare($row);
    $query->bind_param("si", $name, $count);
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
    <form action="../admin/redactBaza.php" method="POST">
        <input type="text" name='name' value="<?php echo $res['name'] ?>">
        <input type="text" name='count' value="<?php echo $res['count'] ?>">
        <button type="submit">Сохранить</button>
    </form>
</body>
</html>