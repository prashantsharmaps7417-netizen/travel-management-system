<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include "../config/db.php";

$result = $conn->query("SELECT id,name,email,role FROM users");

$data = [];
while($row = $result->fetch_assoc()){
 $data[] = $row;
}

echo json_encode($data);
?>
