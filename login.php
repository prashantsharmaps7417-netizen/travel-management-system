<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include "../config/db.php";
include "../config/jwt.php";

$email = $_POST['email'];
$password = $_POST['password'];

$result = $conn->query("SELECT * FROM users WHERE email='$email'");
$user = $result->fetch_assoc();

if(password_verify($password, $user['password'])){
 echo createToken([
  "id" => $user['id'],
  "role" => $user['role']
 ]);
}else{
 echo "Invalid Login - login.php:17";
}
?>
