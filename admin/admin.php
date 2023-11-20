<?php
require_once '../admin/connekt.php';

session_start();

$name = isset($_POST["login"]) ? $_POST["login"] : "";
$password = isset($_POST["password"]) ? $_POST["password"] : "";

$sql = $mysqli->prepare("SELECT id, login FROM user WHERE login = ? AND password = ?");
$sql->bind_param("ss", $name, $password);
$sql->execute();
$result = $sql->get_result();
$row = $result->fetch_assoc();

$sql->close();
$mysqli->close();

echo $_COOKIE['PHPSESSID'];

if ($row && $row["id"] > 0) {
    $_SESSION["login"] = $row["login"];

    header('Location:../admin/smeta.php');
} else {
    header('Location:../admin/login.php');
}
?>