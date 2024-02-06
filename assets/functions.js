function presetCopy() {
	navigator.clipboard.writeText($(".conversion").text().trim());
}

function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function formatToggle(){
	if($(".switch input").is(":checked")){
		setCookie("colorFormat", "RGB", 30);
		colorFormat = "RGB";
		$(".hex").remove();
		$("textarea").after('<div class="rgb">rgb(<input type="text" name="red" placeholder="128">, <input type="text" name="green" placeholder="128">, <input type="text" name="blue" placeholder="128">)</div>');
		$(".square").css("background", "#808080");
		
		$(".swatch").each(function(element){
			switch($(this).attr("id")){
				case "a26":
					$(this).find(".color").css("background", "rgb(36, 35, 35)");
					$(this).find(".color-hex").text("rgb(36, 35, 35)");
					break;
				case "dc":
					$(this).find(".color").css("background", "rgb(237, 131, 50)");
					$(this).find(".color-hex").text("rgb(237, 131, 50)");
					break;
				case "gc":
					$(this).find(".color").css("background", "rgb(78, 68, 128)");
					$(this).find(".color-hex").text("rgb(78, 68, 128)");
					break;
				case "ps":
					$(this).find(".color").css("background", "rgb(168, 165, 166)");
					$(this).find(".color-hex").text("rgb(168, 165, 166)");
					break;
				case "ps2":
					$(this).find(".color").css("background", "rgb(42, 95, 163)");
					$(this).find(".color-hex").text("rgb(42, 95, 163)");
					break;
				case "snes":
					$(this).find(".color").css("background", "rgb(85, 58, 153)");
					$(this).find(".color-hex").text("rgb(85, 58, 153)");
					break;
			}
		});
	}
	else{
		setCookie("colorFormat", "HEX", 30);
		colorFormat = "HEX";
		$(".rgb").remove();
		$("textarea").after('<div class="hex">HEX: # <input type="text" name="hex" placeholder="808080"></div>');
		$(".square").css("background", "rgb(128, 128, 128)");
		
		$(".swatch").each(function(){
			switch($(this).attr("id")){
				case "a26":
					$(this).find(".color").css("background", "#242323");
					$(this).find(".color-hex").text("#242323");
					break;
				case "dc":
					$(this).find(".color").css("background", "#ED8332");
					$(this).find(".color-hex").text("#ED8332");
					break;
				case "gc":
					$(this).find(".color").css("background", "#4E4480");
					$(this).find(".color-hex").text("#4E4480");
					break;
				case "ps":
					$(this).find(".color").css("background", "#A8A5A6");
					$(this).find(".color-hex").text("#A8A5A6");
					break;
				case "ps2":
					$(this).find(".color").css("background", "#2A5FA3");
					$(this).find(".color-hex").text("#2A5FA3");
					break;
				case "snes":
					$(this).find(".color").css("background", "#553A99");
					$(this).find(".color-hex").text("#553A99");
					break;
			}
		});
	}
	
	$(".content").css("box-shadow", "0px 0px 6px 4px rgba(128, 128, 128, 0.3)");
	$(".square").css("box-shadow", "0px 0px 14px 4px rgba(128, 128, 128, 0.25)");
	$(".conversion").text('BEZEL_R = "0.000000"\nBEZEL_G = "0.000000"\nBEZEL_B = "0.000000"\nBEZEL_CON = "1.300000"');
	$(".info").empty();
}

if(getCookie("colorFormat") == "" || getCookie("colorFormat") == "HEX"){
	colorFormat = "HEX";
	$(".switch input").attr("checked", false);
	$("textarea").after('<div class="hex">HEX: # <input type="text" name="hex" placeholder="808080"></div>');
	
	$(".swatch").each(function(){
		switch($(this).attr("id")){
			case "a26":
				$(this).find(".color").css("background", "#242323");
				$(this).find(".color-hex").text("#242323");
				break;
			case "dc":
				$(this).find(".color").css("background", "#ED8332");
				$(this).find(".color-hex").text("#ED8332");
				break;
			case "gc":
				$(this).find(".color").css("background", "#4E4480");
				$(this).find(".color-hex").text("#4E4480");
				break;
			case "ps":
				$(this).find(".color").css("background", "#A8A5A6");
				$(this).find(".color-hex").text("#A8A5A6");
				break;
			case "ps2":
				$(this).find(".color").css("background", "#2A5FA3");
				$(this).find(".color-hex").text("#2A5FA3");
				break;
			case "snes":
				$(this).find(".color").css("background", "#553A99");
				$(this).find(".color-hex").text("#553A99");
				break;
		}
	});
}
else{
	colorFormat = "RGB";
	$(".switch input").attr("checked", true);
	$("textarea").after('<div class="rgb">rgb(<input type="text" name="red" placeholder="128">, <input type="text" name="green" placeholder="128">, <input type="text" name="blue" placeholder="128">)</div>');
	
	$(".swatch").each(function(element){
		switch($(this).attr("id")){
			case "a26":
				$(this).find(".color").css("background", "rgb(36, 35, 35)");
				$(this).find(".color-hex").text("rgb(36, 35, 35)");
				break;
			case "dc":
				$(this).find(".color").css("background", "rgb(237, 131, 50)");
				$(this).find(".color-hex").text("rgb(237, 131, 50)");
				break;
			case "gc":
				$(this).find(".color").css("background", "rgb(78, 68, 128)");
				$(this).find(".color-hex").text("rgb(78, 68, 128)");
				break;
			case "ps":
				$(this).find(".color").css("background", "rgb(168, 165, 166)");
				$(this).find(".color-hex").text("rgb(168, 165, 166)");
				break;
			case "ps2":
				$(this).find(".color").css("background", "rgb(42, 95, 163)");
				$(this).find(".color-hex").text("rgb(42, 95, 163)");
				break;
			case "snes":
				$(this).find(".color").css("background", "rgb(85, 58, 153)");
				$(this).find(".color-hex").text("rgb(85, 58, 153)");
				break;
		}
	});
}

$(".switch input").on('click', function(){
	formatToggle();
});

$(document).ready(function () {
	$("form").submit(function (event) {
		var contrast = $("#contrasts option:selected").val();
		
		$(".message").removeClass("info");
		$(".message").removeClass("error");
		$(".message").empty();
		
		if(colorFormat == "HEX"){
			var hex = $(".hex input").val().toUpperCase();
		
			if(/^[0-9A-F]{6}$/i.test(hex) == false){
				hexError = "true";
			}
			else{
				function hexToRgb(color) {
					var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
					
					return rgb ? {
						r: parseInt(rgb[1], 16),
						g: parseInt(rgb[2], 16),
						b: parseInt(rgb[3], 16)
					} : null;
				}
				
				hexError = "false";
				
				if(contrast < 1){
					rSetting = (((hexToRgb(hex).r - 128) * (0.395 - (contrast - 1.30) * ((3.75 - contrast) * (contrast * .1 + .105) + (contrast * .01 + .0105))) / 128)).toFixed(10);
					gSetting = (((hexToRgb(hex).g - 128) * (0.395 - (contrast - 1.30) * ((3.75 - contrast) * (contrast * .1 + .105) + (contrast * .01 + .0105))) / 128)).toFixed(10);
					bSetting = (((hexToRgb(hex).b - 128) * (0.395 - (contrast - 1.30) * ((3.75 - contrast) * (contrast * .01 + .055) + (contrast * .001 + .0055))) / 128)).toFixed(10);
				}
				else{
					rSetting = (((hexToRgb(hex).r - 128) * (0.395 - (contrast - 1.30) * ((3.75 - contrast) * (contrast * .01 + .105) + (contrast * .001 + .0105))) / 128)).toFixed(10);
					gSetting = (((hexToRgb(hex).g - 128) * (0.395 - (contrast - 1.30) * ((3.75 - contrast) * (contrast * .01 + .105) + (contrast * .001 + .0105))) / 128)).toFixed(10);
					bSetting = (((hexToRgb(hex).b - 128) * (0.395 - (contrast - 1.30) * ((3.75 - contrast) * (contrast * .001 + .055) + (contrast * .0001 + .0055))) / 128)).toFixed(10);
				}
				
				$(".content").css("box-shadow", "0px 0px 6px 4px rgba("+hexToRgb(hex).r+", "+hexToRgb(hex).g+", "+hexToRgb(hex).b+", 0.3)");
				$(".square").css("box-shadow", "0px 0px 14px 4px rgba("+hexToRgb(hex).r+", "+hexToRgb(hex).g+", "+hexToRgb(hex).b+", 0.25)");
				$(".square").css("background", "#"+hex);
				
				contrastSetting = contrast+"0000";
				$(".conversion").text('BEZEL_R = "'+rSetting+'"\nBEZEL_G = "'+gSetting+'"\nBEZEL_B = "'+bSetting+'"\nBEZEL_CON = "'+contrastSetting+'"')
				
				$("#copy").prop("disabled", false);
				
				switch(hex){
					case "242323":
						$(".message").text("Atari 2600");
						$(".message").addClass("info");
						break;
					case "2A5FA3":
						$(".message").text("PlayStation 2");
						$(".message").addClass("info");
						break;
					case "4E4480":
						$(".message").text("GameCube");
						$(".message").addClass("info");
						break;
					case "553A99":
						$(".message").text("Super Nintendo");
						$(".message").addClass("info");
						break;
					case "A8A5A6":
						$(".message").text("PlayStation");
						$(".message").addClass("info");
						break;
					case "ED8332":
						$(".message").text("Dreamcast");
						$(".message").addClass("info");
						break;
					default:
						$(".message").removeClass("info");
						$(".message").empty();
				}
			}
			
			if(hexError == "true"){
				$(".message").html("HEX needs to be <strong>RRGGBB</strong> value");
				$(".message").addClass("error");
				$(".info").empty();
			}
			else{
				$(".message").removeClass("error");
			}
			
			$(".contrast input, .hex input").blur();
		}
		else{
			var r = parseInt($(".rgb input[name='red']").val()),
			g = parseInt($(".rgb input[name='green']").val()),
			b = parseInt($(".rgb input[name='blue']").val()),
			rgb = "rgb("+r+", "+g+", "+b+")";
			
			if(r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255){
				rgbError = "true";
			}
			else if(Number.isInteger(r) == false || Number.isInteger(g) == false || Number.isInteger(b) == false){
				rgbError = "true";
			}
			else{
				rgbError = "false";
					
				if(contrast < 1){
					rSetting = (((r - 128) * (0.395 - (contrast - 1.30) * ((3.75 - contrast) * (contrast * .1 + .105) + (contrast * .01 + .0105))) / 128)).toFixed(10);
					gSetting = (((g - 128) * (0.395 - (contrast - 1.30) * ((3.75 - contrast) * (contrast * .1 + .105) + (contrast * .01 + .0105))) / 128)).toFixed(10);
					bSetting = (((b - 128) * (0.395 - (contrast - 1.30) * ((3.75 - contrast) * (contrast * .01 + .055) + (contrast * .001 + .0055))) / 128)).toFixed(10);
				}
				else{
					rSetting = (((r - 128) * (0.395 - (contrast - 1.30) * ((3.75 - contrast) * (contrast * .01 + .105) + (contrast * .001 + .0105))) / 128)).toFixed(10);
					gSetting = (((g - 128) * (0.395 - (contrast - 1.30) * ((3.75 - contrast) * (contrast * .01 + .105) + (contrast * .001 + .0105))) / 128)).toFixed(10);
					bSetting = (((b - 128) * (0.395 - (contrast - 1.30) * ((3.75 - contrast) * (contrast * .001 + .055) + (contrast * .0001 + .0055))) / 128)).toFixed(10);
				}
				
				$(".content").css("box-shadow", "0px 0px 6px 4px rgba("+r+", "+g+", "+b+", 0.3)");
				$(".square").css("box-shadow", "0px 0px 14px 4px rgba("+r+", "+g+", "+b+", 0.25)");
				$(".square").css("background", rgb);
				
				contrastSetting = contrast+"0000";
				$(".conversion").text('BEZEL_R = "'+rSetting+'"\nBEZEL_G = "'+gSetting+'"\nBEZEL_B = "'+bSetting+'"\nBEZEL_CON = "'+contrastSetting+'"')
				
				$("#copy").prop("disabled", false);
				
				switch(rgb){
					case "rgb(36, 35, 35)":
						$(".message").text("Atari 2600");
						$(".message").addClass("info");
						break;
					case "rgb(42, 95, 163)":
						$(".message").text("PlayStation 2");
						$(".message").addClass("info");
						break;
					case "rgb(78, 68, 128)":
						$(".message").text("GameCube");
						$(".message").addClass("info");
						break;
					case "rgb(85, 58, 153)":
						$(".message").text("Super Nintendo");
						$(".message").addClass("info");
						break;
					case "rgb(168, 165, 166)":
						$(".message").text("PlayStation");
						$(".message").addClass("info");
						break;
					case "rgb(237, 131, 50)":
						$(".message").text("Dreamcast");
						$(".message").addClass("info");
						break;
				}
			}
			
			if(rgbError == "true"){
				$(".message").text("RGB has to be numerical values between 0 to 255");
				$(".message").addClass("error");
				$(".info").empty();
			}
			else{
				$(".message").removeClass("error");
			}
			
			$(".contrast input, .rgb input").blur();
		}

		event.preventDefault();
		
	});
	
	$(".swatch").on('click', function(){
		if(colorFormat == "HEX"){
			$(".hex input").val($(this).children(".color-hex").text().replace("#", ""));
		}
		else{
			swatchRGB = $(this).children(".color-hex").text().replace("rgb(", "").replace(")", "").split(', ');
			
			$(".rgb input[name='red']").val(swatchRGB[0]);
			$(".rgb input[name='green']").val(swatchRGB[1]);
			$(".rgb input[name='blue']").val(swatchRGB[2]);
		}
		
		$("form").submit();
		presetCopy();
	});
});