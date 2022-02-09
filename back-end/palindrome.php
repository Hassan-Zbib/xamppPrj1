<?php

$input_string = $_GET["string"];

function isPalindrome($input_string) {
    $lower = strtolower($input_string);
    if (strrev($lower) == $lower){ 
        return true; 
    }
    else{
        return false;
    }
}

echo json_decode( ["isPalindrome" => isPalindrome($input_string)] );


?>