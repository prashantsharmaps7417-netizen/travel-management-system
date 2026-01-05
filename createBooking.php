<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include __DIR__ . "/../config/db.php";

if (
    isset($_POST['user_id']) &&
    isset($_POST['destination']) &&
    isset($_POST['date'])
) {
    $user_id = $_POST['user_id'];
    $destination = $_POST['destination'];
    $date = $_POST['date'];

    $conn->query("INSERT INTO bookings(user_id, destination, travel_date, status)
    VALUES('$user_id', '$destination', '$date', 'Pending')");

    echo "Booking Saved Successfully - createbooking.php:20";
} else {
    echo "Invalid Booking Data - createbooking.php:22";
}
?>
