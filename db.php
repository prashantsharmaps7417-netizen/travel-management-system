<?php
$conn = new mysqli("localhost","root","","travel_db");

if($conn->connect_error){
 die("Database Connection Failed");
}
?>
