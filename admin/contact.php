<?php require_once '../admin/connekt.php';
$sql = $mysqli->prepare("SELECT * FROM const");
$sql->execute();
$result = $sql->get_result();
$res = $result->fetch_assoc();
$sql->close();
$mysqli->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <main>
        <span class=""><?php echo $res["name"] ?></span>
        <span class=""><?php echo $res["count"] ?></span>
    </main>
</body>
</html>