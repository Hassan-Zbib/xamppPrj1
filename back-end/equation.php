<?php

$x = $_GET["x"];
$y = $_GET["y"];

function equation($x, $y) {
    return 2 * $x + $y % 2;
}

echo json_encode( ["result" => equation($x, $y)] );

?>