<?php 

$input = $_GET["password"];

function checkPasswordValidity($pass) {
    if (strlen($pass) >= 8 && ( preg_match('/[A-Z]/', $pass) || preg_match('/[a-z]/', $pass) ) && preg_match('/[0-9]/', $pass)) {
        return true;
    }
    else {
        return false;
    }
}

$is_valid = checkPasswordValidity($input);
$hash = $is_valid ? hash('sha256', $input) : "";
$res = ["isValid" => $is_valid, "hash" => $hash];

echo json_encode($res);

?>