<?php require_once '../admin/connekt.php';
session_start();
$name = $_POST["login"];
$password = $_POST["password"];

$sql = $mysqli->prepare("SELECT id,login FROM user WHERE login = ? AND password = ?");
$sql->bind_param("ss", $name, $password);
$sql->execute();
$result = $sql->get_result();
$row = $result->fetch_assoc();
print_r($row);

$sql->close();
$mysqli->close();

if($row["id"]>0){
    $_SESSION["login"] = $row["login"];
    header('Location:../admin/smeta.php');
}
else{
    header('Location:../admin/login.php');
}