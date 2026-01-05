<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include __DIR__ . "/../config/db.php";

if (
    isset($_POST['name']) &&
    isset($_POST['email']) &&
    isset($_POST['password'])
) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    $conn->query("INSERT INTO users(name,email,password)
    VALUES('$name','$email','$password')");

    echo "User Registered Successfully - register.php:19";

} else {
    echo "Invalid Request - register.php:22";
}
?>
