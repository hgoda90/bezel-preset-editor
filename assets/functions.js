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

function bezelToggle(){
	$(".colors").empty();
	
	if($(".switch-panel.bezel input").is(":checked")){
		setCookie("bezelStyle", "mbz", 30);
		bezelStyle = "mbz";
		$(".contrast").css("opacity", 0);
		
		$(".square").css("background", "#1A1A1A");
		$(".square").css("box-shadow", "0px 0px 14px 4px rgba(26, 26, 26, 0.25)");
		$(".conversion").text('HSM_BZL_COLOR_HUE = "0.000000"\nHSM_BZL_COLOR_SATURATION = "0.000000"\nHSM_BZL_COLOR_VALUE = "10.000000"');
		
		if($("div").hasClass("hex") == true){
			$(".hex input").attr("placeholder", "1A1A1A");
		}
		else{
			$(".rgb input[name='red']").attr("placeholder", "26");
			$(".rgb input[name='green']").attr("placeholder", "26");
			$(".rgb input[name='blue']").attr("placeholder", "26");
		}
	}
	else{
		setCookie("bezelStyle", "koko-aio", 30);
		bezelStyle = "koko-aio";
		$(".contrast").css("opacity", 1);
		$(".contrast option").prop("selected", false);
		$(".contrast option[value='1.30']").prop("selected", "selected");
		
		$(".square").css("background", "#808080");
		$(".square").css("box-shadow", "0px 0px 14px 4px rgba(128, 128, 128, 0.25)");
		$(".conversion").text('BEZEL_R = "0.000000"\nBEZEL_G = "0.000000"\nBEZEL_B = "0.000000"\nBEZEL_CON = "1.300000"');
	
		if($("div").hasClass("hex") == true){
			$(".hex input").attr("placeholder", "808080");
		}
		else{
			$(".rgb input[name='red']").attr("placeholder", "128");
			$(".rgb input[name='green']").attr("placeholder", "128");
			$(".rgb input[name='blue']").attr("placeholder", "128");
		}
	}
	
	$(".info").empty();
	swatches();
};

function formatToggle(){
	$(".colors").empty();
	
	if($(".switch-panel.format input").is(":checked")){
		setCookie("colorFormat", "RGB", 30);
		colorFormat = "RGB";
		$(".hex").remove();
		
		if(bezelStyle == "koko-aio"){
			$("textarea").after('<div class="rgb">rgb(<input type="text" name="red" placeholder="128">, <input type="text" name="green" placeholder="128">, <input type="text" name="blue" placeholder="128">)</div>');
			$(".square").css("background", "#808080");
			$(".square").css("box-shadow", "0px 0px 14px 4px rgba(128, 128, 128, 0.25)");
			$(".conversion").text('BEZEL_R = "0.000000"\nBEZEL_G = "0.000000"\nBEZEL_B = "0.000000"\nBEZEL_CON = "1.300000"');
			$(".contrast").css("opacity", 1);
			$(".contrast option").prop("selected", false);
			$(".contrast option[value='1.30']").prop("selected", "selected");
		}
		else{
			$("textarea").after('<div class="rgb">rgb(<input type="text" name="red" placeholder="26">, <input type="text" name="green" placeholder="26">, <input type="text" name="blue" placeholder="26">)</div>');
			$(".square").css("background", "#1A1A1A");
			$(".square").css("box-shadow", "0px 0px 14px 4px rgba(26, 26, 26, 0.25)");
			$(".conversion").text('HSM_BZL_COLOR_HUE = "0.000000"\nHSM_BZL_COLOR_SATURATION = "0.000000"\nHSM_BZL_COLOR_VALUE = "10.000000"');
			$(".contrast").css("opacity", 0);
		}
	}
	else{
		setCookie("colorFormat", "HEX", 30);
		colorFormat = "HEX";
		$(".rgb").remove();
		
		if(bezelStyle == "koko-aio"){
			$("textarea").after('<div class="hex">HEX: # <input type="text" name="hex" placeholder="808080"></div>');
			$(".square").css("background", "#808080");
			$(".square").css("box-shadow", "0px 0px 14px 4px rgba(128, 128, 128, 0.25)");
			$(".conversion").text('BEZEL_R = "0.000000"\nBEZEL_G = "0.000000"\nBEZEL_B = "0.000000"\nBEZEL_CON = "1.300000"');
			$(".contrast").css("opacity", 1);
			$(".contrast option").prop("selected", false);
			$(".contrast option[value='1.30']").prop("selected", "selected");
		}
		else{
			$("textarea").after('<div class="hex">HEX: # <input type="text" name="hex" placeholder="1A1A1A"></div>');
			$(".square").css("background", "#1A1A1A");
			$(".square").css("box-shadow", "0px 0px 14px 4px rgba(26, 26, 26, 0.25)");
			$(".conversion").text('HSM_BZL_COLOR_HUE = "0.000000"\nHSM_BZL_COLOR_SATURATION = "0.000000"\nHSM_BZL_COLOR_VALUE = "10.000000"');
			$(".contrast").css("opacity", 0);
		}
	}
	
	$(".info").empty();
	swatches();
}

function rgbToHSB(r, g, b){
    r /= 255, g /= 255, b /= 255;
	var v = Math.max(r, g, b), n = v - Math.min(r, g, b);
	var h = (n === 0) ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
	
    return [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];
}

function swatches(){
	if($(".switch-panel.format input").is(":checked")){
		$(".swatch").each(function(element){
			switch($(this).attr("id")){
				case "a26":
					$(this).find(".colors").append("<div class='color' data-code='rgb(36, 35, 35)' style='background: rgb(36, 35, 35);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(148, 110, 74)' style='background: rgb(148, 110, 74);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(255, 146, 51)' style='background: rgb(255, 146, 51);'></div>");
					break;
				case "dc":
					$(this).find(".colors").append("<div class='color' data-code='rgb(237, 131, 50)' style='background: rgb(237, 131, 50);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(207, 51, 17)' style='background: rgb(207, 51, 17);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(58, 117, 194)' style='background: rgb(58, 117, 194);'></div>");
					break;
				case "gc":
					$(this).find(".colors").append("<div class='color' data-code='rgb(78, 68, 128)' style='background: rgb(78, 68, 128);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(38, 38, 38)' style='background: rgb(38, 38, 38);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(173, 173, 173)' style='background: rgb(173, 173, 173);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(255, 120, 31)' style='background: rgb(255, 120, 31);'></div>");
					break;
				case "ps":
					$(this).find(".colors").append("<div class='color' data-code='rgb(168, 165, 166)' style='background: rgb(168, 165, 166);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(213, 221, 237)' style='background: rgb(213, 221, 237);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(29, 49, 92)' style='background: rgb(29, 49, 92);'></div>");
					break;
				case "ps2":
					$(this).find(".colors").append("<div class='color' data-code='rgb(17, 143, 219)' style='background: rgb(17, 143, 219);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(42, 95, 163)' style='background: rgb(42, 95, 163);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(19, 6, 128)' style='background: rgb(19, 6, 128);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(33, 33, 41)' style='background: rgb(33, 33, 41);'></div>");
					break;
				case "snes":
					$(this).find(".colors").append("<div class='color' data-code='rgb(181, 182, 228)' style='background: rgb(181, 182, 228);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(85, 58, 153)' style='background: rgb(85, 58, 153);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(144,138,153)' style='background: rgb(144,138,153);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(209, 209, 209)' style='background: rgb(209, 209, 209);'></div>");
					break;
			}
		});
		$(".color-code").css("text-align", "center");
	}
	else{
		$(".swatch").each(function(){
			switch($(this).attr("id")){
				case "a26":
					$(this).find(".colors").append("<div class='color' data-code='#242323' style='background: #242323;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#946E4A' style='background: #946E4A'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#FF9233' style='background: #FF9233;'></div>");
					break;
				case "dc":
					$(this).find(".colors").append("<div class='color' data-code='#ED8332' style='background: #ED8332;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#CF3311' style='background: #CF3311;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#3A75C2' style='background: #3A75C2;'></div>");
					break;
				case "gc":
					$(this).find(".colors").append("<div class='color' data-code='#4E4480' style='background: #4E4480;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#262626' style='background: #262626;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#ADADAD' style='background: #ADADAD;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#FF781F' style='background: #FF781F;'></div>");
					break;
				case "ps":
					$(this).find(".colors").append("<div class='color' data-code='#A8A5A6' style='background: #A8A5A6;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#D5DDED' style='background: #D5DDED;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#1D315C' style='background: #1D315C;'></div>");
					break;
				case "ps2":
					$(this).find(".colors").append("<div class='color' data-code='#118FDB' style='background: #118FDB;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#2A5FA3' style='background: #2A5FA3;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#13017D' style='background: #13017D;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#212129' style='background: #212129;'></div>");
					break;
				case "snes":
					$(this).find(".colors").append("<div class='color' data-code='#B5B6E4' style='background: #B5B6E4;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#553A99' style='background: #553A99;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#908A99' style='background: #908A99;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#D1D1D1' style='background: #D1D1D1;'></div>");
					break;
			}
		});
		
		$(".color-code").css("text-align", "left");
	}
	
	$(".hex input").val("");
	$(".rgb input").val("");
	
	$(".swatch .color").on('click', function(){
		if(colorFormat == "HEX"){
			$(".hex input").val($(this).parents(".colors").siblings(".color-code").text().replace("#", ""));
		}
		else{
			swatchRGB = $(this).parents(".colors").siblings(".color-code").text().replace("rgb(", "").replace(")", "").split(', ');
			
			$(".rgb input[name='red']").val(swatchRGB[0]);
			$(".rgb input[name='green']").val(swatchRGB[1]);
			$(".rgb input[name='blue']").val(swatchRGB[2]);
		}
		
		$("form").submit();
		presetCopy();
	});
	
	$(".swatch .color").on('mouseover', function(){
		$(this).parents(".colors").siblings(".color-code").text($(this).data("code"));
	});
}

if(getCookie("colorFormat") == "" || getCookie("colorFormat") == "HEX"){
	colorFormat = "HEX";
	$(".switch-panel.format input").attr("checked", false);
	$("textarea").after('<div class="hex">HEX: # <input type="text" name="hex"></div>');
}
else{
	colorFormat = "RGB";
	$(".switch-panel.format input").attr("checked", true);
	$("textarea").after('<div class="rgb">rgb(<input type="text" name="red">, <input type="text" name="green">, <input type="text" name="blue">)</div>');
}

if(getCookie("bezelStyle") == "" || getCookie("bezelStyle") == "koko-aio"){
	bezelStyle = "koko-aio";
	$(".switch-panel.bezel input").attr("checked", false);
	
	if($("div").hasClass("hex") == true){
		$(".hex input").attr("placeholder", "808080");
	}
	else{
		$(".rgb input[name='red']").attr("placeholder", "128");
		$(".rgb input[name='green']").attr("placeholder", "128");
		$(".rgb input[name='blue']").attr("placeholder", "128");
	}
}
else{
	bezelStyle = "mbz";
	$(".switch-panel.bezel input").attr("checked", true);
	
	if($("div").hasClass("hex") == true){
		$(".hex input").attr("placeholder", "1A1A1A");
	}
	else{
		$(".rgb input[name='red']").attr("placeholder", "26");
		$(".rgb input[name='green']").attr("placeholder", "26");
		$(".rgb input[name='blue']").attr("placeholder", "26");
	}
}

$(".switch-panel.bezel input").on('click', function(){
	bezelToggle();
});

$(".switch-panel.format input").on('click', function(){
	formatToggle();
});

bezelToggle();

$(document).ready(function () {
	$("form").submit(function (event) {
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
				
				if(bezelStyle == "koko-aio"){
					var contrast = $("#contrasts option:selected").val();
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
					
					contrastSetting = contrast+"0000";
					$(".conversion").text('BEZEL_R = "'+rSetting+'"\nBEZEL_G = "'+gSetting+'"\nBEZEL_B = "'+bSetting+'"\nBEZEL_CON = "'+contrastSetting+'"');
				}
				else{
					mbzHSB = rgbToHSB(hexToRgb(hex).r, hexToRgb(hex).g, hexToRgb(hex).b);
					$(".conversion").text('HSM_BZL_COLOR_HUE = "'+Math.round(mbzHSB[0])+'.000000"\nHSM_BZL_COLOR_SATURATION = "'+Math.round(mbzHSB[1])+'.000000"\nHSM_BZL_COLOR_VALUE = "'+Math.round(mbzHSB[2])+'.000000"');
				}
				
				$(".square").css("box-shadow", "0px 0px 14px 4px rgba("+hexToRgb(hex).r+", "+hexToRgb(hex).g+", "+hexToRgb(hex).b+", 0.25)");
				$(".square").css("background", "#"+hex);
				
				$("#copy").prop("disabled", false);
				
				switch(hex){
					case "242323":
					case "946E4A":
					case "FF9233":
						$(".message").text("Atari 2600");
						$(".message").addClass("info");
						break;
					case "118FDB":
					case "13017D":
					case "212129":
					case "2A5FA3":
						$(".message").text("PlayStation 2");
						$(".message").addClass("info");
						break;
					case "3A75C2":
					case "CF3311":
					case "ED8332":
						$(".message").text("Dreamcast");
						$(".message").addClass("info");
						break;
					case "262626":
					case "4E4480":
					case "ADADAD":
					case "FF781F":
						$(".message").text("GameCube");
						$(".message").addClass("info");
						break;
					case "553A99":
					case "908A99":
					case "B5B6E4":
					case "D1D1D1":
						$(".message").text("Super Nintendo");
						$(".message").addClass("info");
						break;
					case "1D315C":
					case "A8A5A6":
					case "D5DDED":
						$(".message").text("PlayStation");
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
				
				if(bezelStyle == "koko-aio"){
					var contrast = $("#contrasts option:selected").val();
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
					
						contrastSetting = contrast+"0000";
						$(".conversion").text('BEZEL_R = "'+rSetting+'"\nBEZEL_G = "'+gSetting+'"\nBEZEL_B = "'+bSetting+'"\nBEZEL_CON = "'+contrastSetting+'"');
				}
				else{
					mbzHSB = rgbToHSB(r, g, b);
					$(".conversion").text('HSM_BZL_COLOR_HUE = "'+Math.round(mbzHSB[0])+'.000000"\nHSM_BZL_COLOR_SATURATION = "'+Math.round(mbzHSB[1])+'.000000"\nHSM_BZL_COLOR_VALUE = "'+Math.round(mbzHSB[2])+'.000000"');
				}
				
				$(".square").css("box-shadow", "0px 0px 14px 4px rgba("+r+", "+g+", "+b+", 0.25)");
				$(".square").css("background", rgb);
				
				$("#copy").prop("disabled", false);
				
				switch(rgb){
					case "rgb(36, 35, 35)":
					case "rgb(148, 110, 74)":
					case "rgb(255, 146, 51)":
						$(".message").text("Atari 2600");
						$(".message").addClass("info");
						break;
					case "rgb(17, 143, 219)":
					case "rgb(19, 6, 128)":
					case "rgb(33, 33, 41)":
					case "rgb(42, 95, 163)":
						$(".message").text("PlayStation 2");
						$(".message").addClass("info");
						break;
					case "rgb(58, 117, 194)":
					case "rgb(207, 51, 17)":
					case "rgb(237, 131, 50)":
						$(".message").text("Dreamcast");
						$(".message").addClass("info");
						break;
					case "rgb(38, 38, 38)":
					case "rgb(78, 68, 128)":
					case "rgb(173, 173, 173)":
					case "rgb(255, 120, 31)":
						$(".message").text("GameCube");
						$(".message").addClass("info");
						break;
					case "rgb(85, 58, 153)":
					case "rgb(144,138,153)":
					case "rgb(181, 182, 228)":
					case "rgb(209, 209, 209)":
						$(".message").text("Super Nintendo");
						$(".message").addClass("info");
						break;
					case "rgb(29, 49, 92)":
					case "rgb(168, 165, 166)":
					case "rgb(213, 221, 237)":
						$(".message").text("PlayStation");
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
});
