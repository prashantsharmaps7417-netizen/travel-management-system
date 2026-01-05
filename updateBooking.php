<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include __DIR__ . "/../config/db.php";

if (isset($_POST['id']) && isset($_POST['status'])) {
    $id = $_POST['id'];
    $status = $_POST['status'];

    $conn->query("UPDATE bookings SET status='$status' WHERE id='$id'");
    echo "Status Updated - updatebooking.php:13";
} else {
    echo "Invalid Request - updatebooking.php:15";
}
?>
