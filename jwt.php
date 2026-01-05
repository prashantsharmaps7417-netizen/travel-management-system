<?php
use Firebase\JWT\JWT;

$key = "travel_secret_key";

function createToken($data){
 global $key;
 return JWT::encode($data, $key, 'HS256');
}
?>
