<?php

$HEX = "808080";
$contrast = "1.30";
$HEXError = $contrastError = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (empty($_POST["hex"])) {
		$HEXError = "HEX is required";
	  }
	else if(check_hex($_POST["hex"]) == 1){
		$HEX = strtoupper(str_replace("#", "", $_POST["hex"]));
		list($R, $G, $B) = sscanf("#".$HEX, "#%02x%02x%02x");
	}
	else{
		$HEXError = "Input needs to be a RRGGBB value";
	}
	
	if(empty($_POST["contrast"])){
		$contrastError = "Contrast is required";
	}
	else{
		$contrast = number_format((float)floatval($_POST["contrast"]), 2, '.', '');
	}
}

function check_hex($color) {
    // If user accidentally passed along the # sign, strip it off
    $color = ltrim($color, '#');

    if(ctype_xdigit($color) && (strlen($color) == 6)){
		return true;
	}
    else{
		return false;
	}
}

$content = array($R, $G, $B, $contrast);

echo json_encode($content);
?>