<?php
echo("file");

require('db_connection.php');

$email=$_POST['mail'];
$lgpwd=$_POST['pwd'];

//inserting data into users table
$query ="INSERT INTO users(password,email) values('$email','$lgpwd')";
if (mysqli_query($conn,$query)){
    echo("data inserted");
}else{
    echo("Error");
}
?>
