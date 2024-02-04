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

echo '<html>
	<style>
		body{
			font-family: monospace;
			font-size: 16px;
			margin: 16px;
			width: 410px;
			height: 410px;
		}
		
		.hex, .contrast{
			display: inline-block;
			margin-top: 14px;
		}
		
		.hex input{
			text-transform:uppercase;
		}
		
		.square{
			border: 2px solid #000;
			background: #'.$HEX.';
			height: 72px;
			width: 84px;
			float: right;
			margin-top: -40px;
		}
		
		.error {
			color: #FF0000;
			display: inline-block;
			margin-top: 4px;
		}
		
		#submit{
			margin-top: 24px;
			width: 20%;
		}
		
		#submit:hover{
			cursor: pointer;
		}
		
	</style>
	<body>
		<h2 id="title">HEX to koko-aio Color Converter</h2>
		 <form method="post" action="'.htmlspecialchars($_SERVER["PHP_SELF"]).'" autocomplete="off">';
		 
		 if($HEX == "808080"){
			echo 'BEZEL_R = "0.000000"<br>
			BEZEL_G = "0.000000"<br>
			BEZEL_B = "0.000000"<br>
			BEZEL_CON = "'.$contrast.'0000"<br><br>';
		 }
		 else{
			 echo 'BEZEL_R = "'.number_format((float)floatval(($R - 128) * ((0.395 - ($contrast - 1.30) *  (((3.75 - $contrast) * .125) + .00125)) / 128)), 6, '.', '').'"<br>
				BEZEL_G = "'.number_format((float)floatval(($G - 128) * ((0.395 - ($contrast - 1.30) *  (((3.75 - $contrast) * .125) + .00125)) / 128)), 6, '.', '').'"<br>
				BEZEL_B = "'.number_format((float)floatval(($B - 128) * ((0.395 - ($contrast - 1.30) *  (((3.75 - $contrast) * .125) + .00125)) / 128)), 6, '.', '').'"<br>
				BEZEL_CON = "'.$contrast.'0000"<br><br>';
		 }
			
			echo '<div class="hex">HEX: # <input type="text" name="hex" value="'.$HEX.'"></div>
			<div class="contrast">Contrast: <input type="text" name="contrast" value="'.$contrast.'"></div>
			<div class="square"></div>
			<span class="error">'.$HEXError.'</span>
			<span class="error">'.$contrastError.'</span>
			<br>
			<br>
			<input type="submit" name="submit" value="Convert" id="submit">
		</form>
	</body>
</html>';
?>