<?php
require_once '../admin/connekt.php';
$name = mysqli_query($mysqli, "SELECT * FROM const");
$result = [];
while ($row_rs = mysqli_fetch_assoc($name)) {
    array_push($result, $row_rs);
}

$response = [];
for ($i = 0; $i < count($result); $i++) {
    $response['variable' . ($i + 1)] = $result[$i];
}

echo json_encode($response);