<?php
require('db_connection.php');

if (isset($_POST['mail']) and isset($_POST['pwd'])) {

// Assigning POST values to variables.
    $username = $_POST['mail'];
    $password = $_POST['pwd'];

// CHECK FOR THE RECORD FROM TABLE
    $query = "SELECT * FROM `Users` WHERE email='$username' and password='$password'";

    $result = mysqli_query($conn, $query) or die(mysqli_error($conn));
    $count = mysqli_num_rows($result);

    if ($count == 1) {
//echo "Login Credentials verified";
        echo "logged in";

    } else {
        echo("invalid login");
    }
}
?>
