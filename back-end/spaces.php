<?php

$input = $_GET["string"];

$str = trim(preg_replace('/\s+/',' ', $input));

echo json_encode(["cleanedString" => $str]);

?>