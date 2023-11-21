<?php
  $db_host = 'localhost';
  $db_user = 'root';
<<<<<<< HEAD
  $db_password = '';
  $db_db = 'testing';
=======
  $db_password = 'root';
  $db_db = 'bd';
>>>>>>> da6cbf87df0a44659b209c8139c4b4e7b3a64bdb
 
  $mysqli = @new mysqli(
    $db_host,
    $db_user,
    $db_password,
    $db_db
  );
	
  if ($mysqli->connect_error) {
    echo 'Errno: '.$mysqli->connect_errno;
    echo '<br>';
    echo 'Error: '.$mysqli->connect_error;
    exit();
  }


?>