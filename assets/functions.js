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
	if($(".switch-panel .bezel input").is(":checked")){
		setCookie("bezelStyle", "mbz", 30);
		bezelStyle = "mbz";
	}
	else{
		setCookie("bezelStyle", "koko-aio", 30);
		bezelStyle = "koko-aio";
	}
	
	$(".info").empty();
	colorReset();
};

function colorReset(){
	if(bezelStyle == "mbz"){
		$(".contrast").css("opacity", 0);
		$(".range-wrap, .imageType").css("opacity", 1);
		$("#mb").css("display", "inline-block");
		$("#koko").css("display", "none");
		
		$(".square").css("background", "#1A1A1A");
		$(".square").css("box-shadow", "0px 0px 14px 4px rgba(26, 26, 26, 0.25)");
		settingReset();
		
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
		$(".contrast").css("opacity", 1);
		$(".contrast option").prop("selected", false);
		$(".contrast option[value='1.30']").prop("selected", "selected");
		$(".range-wrap, .imageType").css("opacity", 0);
		$("#koko").css("display", "inline-block");
		$("#mb").css("display", "none");
		
		$(".square").css("background", "#808080");
		$(".square").css("box-shadow", "0px 0px 14px 4px rgba(128, 128, 128, 0.25)");
	
		if($("div").hasClass("hex") == true){
			$(".hex input").attr("placeholder", "808080");
		}
		else{
			$(".rgb input[name='red']").attr("placeholder", "128");
			$(".rgb input[name='green']").attr("placeholder", "128");
			$(".rgb input[name='blue']").attr("placeholder", "128");
		}
	}
}

function formatToggle(){
	$(".colors").empty();
	
	if($(".switch-panel .format input").is(":checked")){
		setCookie("colorFormat", "RGB", 30);
		colorFormat = "RGB";
		$(".hex").remove();
		$(".text-box").after('<div class="rgb">rgb(<input type="text" name="red" size=3 maxLength=3>, <input type="text" name="green" size=3 maxLength=3>, <input type="text" name="blue" size=3 maxLength=3>)</div>');
	}
	else{
		setCookie("colorFormat", "HEX", 30);
		colorFormat = "HEX";
		$(".rgb").remove();
		$(".text-box").after('<div class="hex">HEX: # <input type="text" name="hex" size=6 maxlength=6></div>');
	}
	
	$(".info").empty();
	colorReset();
	swatches();
}

function layerToggle(imageLayers){
	setCookie("imageLayer", imageLayers, 30);
	imageLayer = imageLayers;
	
	if($(".hex input, .rgb input").val() == ""){
		settingReset();
	}
	else{
		$("form").submit();
	}
}

function imageTypeToggle(){
	if($(".switch-panel .imageType input").is(":checked")){
		setCookie("imageType", "yellow", 30);
		imageType = "yellow";
	}
	else{
		setCookie("imageType", "standard", 30);
		imageType = "standard";
	}
	
	if($(".hex input, .rgb input").val() == ""){
		settingReset();
	}
	else{
		$("form").submit();
	}
}

function rgbToHSB(r, g, b){
    r /= 255, g /= 255, b /= 255;
	var v = Math.max(r, g, b), n = v - Math.min(r, g, b);
	var h = (n === 0) ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
	
    return [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];
}

function settingReset(){
	if(bezelStyle == "mbz"){
		if(imageType == "yellow"){
			switch(imageLayer){
				case "Bezel":
					$(".conversion").text('HSM_BZL_COLOR_HUE = "0.000000"\nHSM_BZL_COLOR_SATURATION = "0.000000"\nHSM_BZL_COLOR_VALUE = "10.000000"');
					break;
				case "Background":
					$(".conversion").text('HSM_BG_HUE = "0.000000"\nHSM_BG_SATURATION = "100.000000"\nHSM_BG_BRIGHTNESS = "100.000000"\nHSM_BG_GAMMA = "1.000000"');
					break;
				case "LED":
					$(".conversion").text('HSM_LED_HUE = "0.000000"\nHSM_LED_SATURATION = "100.000000"\nHSM_LED_BRIGHTNESS = "100.000000"\nHSM_LED_GAMMA = "1.000000"');
					break;
				case "Device":
					$(".conversion").text('HSM_DEVICE_HUE = "0.000000"\nHSM_DEVICE_SATURATION = "100.000000"\nHSM_DEVICE_BRIGHTNESS = "100.000000"\nHSM_DEVICE_GAMMA = "1.000000"');
					break;
				case "Device LED":
					$(".conversion").text('HSM_DEVICELED_HUE = "0.000000"\nHSM_DEVICELED_SATURATION = "100.000000"\nHSM_DEVICELED_BRIGHTNESS = "100.000000"\nHSM_DEVICELED_GAMMA = "1.000000"');
					break;
				case "Decal":
					$(".conversion").text('HSM_DECAL_HUE = "0.000000"\nHSM_DECAL_SATURATION = "100.000000"\nHSM_DECAL_BRIGHTNESS = "100.000000"\nHSM_DECAL_GAMMA = "1.000000"');
					break;
				case "Top":
					$(".conversion").text('HSM_TOP_HUE = "0.000000"\nHSM_TOP_SATURATION = "100.000000"\nHSM_TOP_BRIGHTNESS = "100.000000"\nHSM_TOP_GAMMA = "1.000000"');
					break;
				case "Cab Glass":
					$(".conversion").text('HSM_CAB_GLASS_HUE = "0.000000"\nHSM_CAB_GLASS_SATURATION = "100.000000"\nHSM_CAB_GLASS_BRIGHTNESS = "100.000000"\nHSM_CAB_GLASS_GAMMA = "1.000000"');
					break;
			}
		}
		else{
			switch(imageLayer){
				case "Bezel":
					$(".conversion").text('HSM_BZL_COLOR_HUE = "0.000000"\nHSM_BZL_COLOR_SATURATION = "0.000000"\nHSM_BZL_COLOR_VALUE = "10.000000"');
					break;
				case "Background":
					$(".conversion").text('HSM_BG_HUE = "0.000000"\nHSM_BG_SATURATION = "100.000000"\nHSM_BG_BRIGHTNESS = "100.000000"');
					break;
				case "LED":
					$(".conversion").text('HSM_LED_HUE = "0.000000"\nHSM_LED_SATURATION = "100.000000"\nHSM_LED_BRIGHTNESS = "100.000000"');
					break;
				case "Device":
					$(".conversion").text('HSM_DEVICE_HUE = "0.000000"\nHSM_DEVICE_SATURATION = "100.000000"\nHSM_DEVICE_BRIGHTNESS = "100.000000"');
					break;
				case "Device LED":
					$(".conversion").text('HSM_DEVICELED_HUE = "0.000000"\nHSM_DEVICELED_SATURATION = "100.000000"\nHSM_DEVICELED_BRIGHTNESS = "100.000000"');
					break;
				case "Decal":
					$(".conversion").text('HSM_DECAL_HUE = "0.000000"\nHSM_DECAL_SATURATION = "100.000000"\nHSM_DECAL_BRIGHTNESS = "100.000000"');
					break;
				case "Top":
					$(".conversion").text('HSM_TOP_HUE = "0.000000"\nHSM_TOP_SATURATION = "100.000000"\nHSM_TOP_BRIGHTNESS = "100.000000"');
					break;
				case "Cab Glass":
					$(".conversion").text('HSM_CAB_GLASS_HUE = "0.000000"\nHSM_CAB_GLASS_SATURATION = "100.000000"\nHSM_CAB_GLASS_BRIGHTNESS = "100.000000"');
					break;
			}
		}
	}
	else{
		$(".conversion").text('BEZEL_R = "0.000000"\nBEZEL_G = "0.000000"\nBEZEL_B = "0.000000"\nBEZEL_CON = "1.300000"');	
	}
}

function start(){
	if(getCookie("bezelStyle") == ""){
		bezelStyle = "mbz";
	}
	else{
		bezelStyle = getCookie("bezelStyle");
	}
	
	if(getCookie("colorFormat") == ""){
		colorFormat = "HEX";
	}
	else{
		colorFormat = getCookie("colorFormat");
	}
	
	if(getCookie("imageLayer") == ""){
		imageLayer = "Bezel";
	}
	else{
		imageLayer = getCookie("imageLayer");
	}
	
	if(getCookie("imageType") == ""){
		imageType = "standard";
	}
	else{
		imageType = getCookie("imageType");
	}
	
	if(colorFormat == "RGB"){
		$(".text-box").after('<div class="rgb">rgb(<input type="text" name="red" size=3 maxLength=3>, <input type="text" name="green" size=3 maxLength=3>, <input type="text" name="blue" size=3 maxLength=3>)</div>');
	}
	else{
		$(".text-box").after('<div class="hex">HEX: # <input type="text" name="hex" size=6 maxlength=6></div>');
	}
	
	if(bezelStyle == "mbz"){
		$(".switch-panel .bezel input").attr("checked", "checked");
	}
	
	if(colorFormat == "RGB"){
		$(".switch-panel .format input").attr("checked", "checked");
	}
	
	if(imageType == "yellow"){
		$(".switch-panel .imageType input").attr("checked", "checked");
	}
	
	colorReset();
	settingReset();
	swatches();
}

function swatches(){
	if(colorFormat == "RGB"){
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
				case "nes":
					$(this).find(".colors").append("<div class='color' data-code='rgb(229, 229, 229)' style='background: rgb(229, 229, 229);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(165, 162, 162)' style='background: rgb(165, 162, 162);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(13, 12, 12)' style='background: rgb(13, 12, 12);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(221, 32, 32)' style='background: rgb(221, 32, 32);'></div>");
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
				case "nes":
					$(this).find(".colors").append("<div class='color' data-code='#E5E5E5' style='background: #E5E5E5;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#A5A2A2' style='background: #A5A2A2;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#0D0C0C' style='background: #0D0C0C;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#DD2020' style='background: #DD2020;'></div>");
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
	});
	
	$(".swatch .color").on('mouseover', function(){
		$(this).parents(".colors").siblings(".color-code").text($(this).data("code"));
	});
}

start();

$(".switch-panel .bezel input").on('click', function(){
	bezelToggle();
	
	if(bezelStyle == "koko-aio"){
		setTimeout(function () {
			$(".switch-panel").addClass("koko-aio");
		}, 400);
	}
	else{
		$(".switch-panel").removeClass("koko-aio");
	}
});

$(".switch-panel .format input").on('click', function(){
	formatToggle();
});

$(".switch-panel .imageType input").on('click', function(){
	imageTypeToggle();
});

if(bezelStyle == "koko-aio"){
	$(".switch-panel").addClass("koko-aio");
}
else{
	$(".switch-panel").removeClass("koko-aio");
}

$(document).ready(function () {
	$("form").submit(function (event) {
		$(".message").removeClass("info");
		$(".message").removeClass("error");
		$(".message").empty();
		hexError = rgbError = "false";
		
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
					case "0D0C0C":
					case "A5A2A2":
					case "DD2020":
					case "E5E5E5":
						$(".message").text("Nintendo Entertainment System");
						$(".message").addClass("info");
						break;
					case "1D315C":
					case "A8A5A6":
					case "D5DDED":
						$(".message").text("PlayStation");
						$(".message").addClass("info");
						break;
					case "118FDB":
					case "13017D":
					case "212129":
					case "2A5FA3":
						$(".message").text("PlayStation 2");
						$(".message").addClass("info");
						break;
					case "553A99":
					case "908A99":
					case "B5B6E4":
					case "D1D1D1":
						$(".message").text("Super Nintendo");
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
					case "rgb(13, 12, 12)":
					case "rgb(165, 162, 162)":
					case "rgb(221, 32, 32)":
					case "rgb(229, 229, 229)":
						$(".message").text("Nintendo Entertainment System");
						$(".message").addClass("info");
						break;
					case "rgb(29, 49, 92)":
					case "rgb(168, 165, 166)":
					case "rgb(213, 221, 237)":
						$(".message").text("PlayStation");
						$(".message").addClass("info");
						break;
					case "rgb(17, 143, 219)":
					case "rgb(19, 6, 128)":
					case "rgb(33, 33, 41)":
					case "rgb(42, 95, 163)":
						$(".message").text("PlayStation 2");
						$(".message").addClass("info");
						break;
					case "rgb(85, 58, 153)":
					case "rgb(144,138,153)":
					case "rgb(181, 182, 228)":
					case "rgb(209, 209, 209)":
						$(".message").text("Super Nintendo");
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
		
		if(bezelStyle == "mbz" && hexError == "false" && rgbError == "false"){
			var hue = Math.round(mbzHSB[0]),
				saturation = Math.round(mbzHSB[1]),
				brightness = Math.round(mbzHSB[2]);
			
			if(imageType == "yellow"){
				if(hue < 52 && $(".range input").val() != "1"){
					hue = hue + 308;
				}
				else if($(".range input").val() != "1"){
					hue = hue - 52;
				}
				
				switch($(".range input").val()){
					case "1":
						$(".conversion").text('HSM_BZL_COLOR_HUE = "'+hue+'.000000"\nHSM_BZL_COLOR_SATURATION = "'+saturation+'.000000"\nHSM_BZL_COLOR_VALUE = "'+brightness+'.000000"');
						break;
					case "2":
						$(".conversion").text('HSM_BG_HUE = "'+hue+'.000000"\nHSM_BG_SATURATION = "'+saturation+'.000000"\nHSM_BG_BRIGHTNESS = "'+brightness+'.000000"\nHSM_BG_GAMMA = "0.450000"');
						break;
					case "3":
						$(".conversion").text('HSM_LED_HUE = "'+hue+'.000000"\nHSM_LED_SATURATION = "'+saturation+'.000000"\nHSM_LED_BRIGHTNESS = "'+brightness+'.000000"\nHSM_LED_GAMMA = "0.450000"');
						break;
					case "4":
						$(".conversion").text('HSM_DEVICE_HUE = "'+hue+'.000000"\nHSM_DEVICE_SATURATION = "'+saturation+'.000000"\nHSM_DEVICE_BRIGHTNESS = "'+brightness+'.000000"\nHSM_DEVICE_GAMMA = "0.450000"');
						break;
					case "5":
						$(".conversion").text('HSM_DEVICELED_HUE = "'+hue+'.000000"\nHSM_DEVICELED_SATURATION = "'+saturation+'.000000"\nHSM_DEVICELED_BRIGHTNESS = "'+brightness+'.000000"\nHSM_DEVICELED_GAMMA = "0.450000"');
						break;
					case "6":
						$(".conversion").text('HSM_DECAL_HUE = "'+hue+'.000000"\nHSM_DECAL_SATURATION = "'+saturation+'.000000"\nHSM_DECAL_BRIGHTNESS = "'+brightness+'.000000"\nHSM_DECAL_GAMMA = "0.450000"');
						break;
					case "7":
						$(".conversion").text('HSM_TOP_HUE = "'+hue+'.000000"\nHSM_TOP_SATURATION = "'+saturation+'.000000"\nHSM_TOP_BRIGHTNESS = "'+brightness+'.000000"\nHSM_BRIGHTNESS_GAMMA = "0.450000"');
						break;
					case "8":
						$(".conversion").text('HSM_CAB_GLASS_HUE = "'+hue+'.000000"\nHSM_CAB_GLASS_SATURATION = "'+saturation+'.000000"\nHSM_CAB_GLASS_BRIGHTNESS = "'+brightness+'.000000"\nHSM_CAB_GLASS_GAMMA = "0.450000"');
						break;
				}
			}
			else{
				switch($(".range input").val()){
					case "1":
						$(".conversion").text('HSM_BZL_COLOR_HUE = "'+hue+'.000000"\nHSM_BZL_COLOR_SATURATION = "'+saturation+'.000000"\nHSM_BZL_COLOR_VALUE = "'+brightness+'.000000"');
						break;
					case "2":
						$(".conversion").text('HSM_BG_HUE = "'+hue+'.000000"\nHSM_BG_SATURATION = "'+saturation+'.000000"\nHSM_BG_BRIGHTNESS = "'+brightness+'.000000"');
						break;
					case "3":
						$(".conversion").text('HSM_LED_HUE = "'+hue+'.000000"\nHSM_LED_SATURATION = "'+saturation+'.000000"\nHSM_LED_BRIGHTNESS = "'+brightness+'.000000"');
						break;
					case "4":
						$(".conversion").text('HSM_DEVICE_HUE = "'+hue+'.000000"\nHSM_DEVICE_SATURATION = "'+saturation+'.000000"\nHSM_DEVICE_BRIGHTNESS = "'+brightness+'.000000"');
						break;
					case "5":
						$(".conversion").text('HSM_DEVICELED_HUE = "'+hue+'.000000"\nHSM_DEVICELED_SATURATION = "'+saturation+'.000000"\nHSM_DEVICELED_BRIGHTNESS = "'+brightness+'.000000"');
						break;
					case "6":
						$(".conversion").text('HSM_DECAL_HUE = "'+hue+'.000000"\nHSM_DECAL_SATURATION = "'+saturation+'.000000"\nHSM_DECAL_BRIGHTNESS = "'+brightness+'.000000"');
						break;
					case "7":
						$(".conversion").text('HSM_TOP_HUE = "'+hue+'.000000"\nHSM_TOP_SATURATION = "'+saturation+'.000000"\nHSM_TOP_BRIGHTNESS = "'+brightness+'.000000"');
						break;
					case "8":
						$(".conversion").text('HSM_CAB_GLASS_HUE = "'+hue+'.000000"\nHSM_CAB_GLASS_SATURATION = "'+saturation+'.000000"\nHSM_CAB_GLASS_BRIGHTNESS = "'+brightness+'.000000"');
						break;
				}
			}
		}

		event.preventDefault();
		
	});
	
	if(bezelStyle == "mbz"){
		var sheet = document.createElement('style'),
		$rangeInput = $('.range input'),
		prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

		document.body.appendChild(sheet);

		var getTrackStyle = function (el) {
		  var curVal = el.value,
		  val = (curVal - 1) * 16.666666667,
		  style = '';

		  // Set active label
		  $('.range-labels li').removeClass('active');

		  var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');

		  curLabel.addClass('active');

		  return style;
		};

		$rangeInput.on('input', function () {
		  sheet.textContent = getTrackStyle(this);
		});

		// Change input value on label click
		$('.range-labels li').on('click', function () {
			var index = $(this).index();

			$rangeInput.val(index + 1).trigger('input');
			
			layerToggle($(this).text());
		});
		
		switch(imageLayer){
			case "Bezel":
				$rangeInput.val(1).trigger('input');
				break;
			case "Background":
				$rangeInput.val(2).trigger('input');
				break;
			case "LED":
				$rangeInput.val(3).trigger('input');
				break;
			case "Device":
				$rangeInput.val(4).trigger('input');
				break;
			case "Device LED":
				$rangeInput.val(5).trigger('input');
				break;
			case "Decal":
				$rangeInput.val(6).trigger('input');
				break;
			case "Top":
				$rangeInput.val(7).trigger('input');
				break;
			case "Cab Glass":
				$rangeInput.val(8).trigger('input');
				break;
			default:
				$rangeInput.val(1).trigger('input');
		}
	}
});
