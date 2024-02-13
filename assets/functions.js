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
	$(".bezel .switch-label").removeClass("active");
	
	if($(".switch-panel .bezel input").is(":checked")){
		setCookie("bezelStyle", "mbz", 30);
		bezelStyle = "mbz";
		layerToggle(imageLayer);
		$(".bezel .switch-label:nth-child(3)").addClass("active");
		$(".layers-wrap, .imageType").removeClass("disabled");
		$(".imageType input").prop("disabled", false);
	}
	else{
		setCookie("bezelStyle", "koko-aio", 30);
		bezelStyle = "koko-aio";
		holdToggle();
		$(".bezel .switch-label:nth-child(1)").addClass("active");
		$(".layers-wrap, .imageType").addClass("disabled");
		$(".imageType input").prop("disabled", true);
	}
	
	$(".info").empty();
	$(".error").empty();
	clearConversion();
	colorReset();
};

function clearConversion(){
	$(".conversion").text("").val("");
	$(".info").empty();
	$(".error").empty();
	colorReset();
}

function colorReset(){
	$(".hex input").val("");
	$(".rgb input").val("");
	$(".hsb input").val("");
	
	if(bezelStyle == "mbz"){
		$(".contrast").css("opacity", 0);
		$("#mb").css("display", "inline-block");
		$("#koko").css("display", "none");
		$(".dropper").val("#1A1A1A");
		
		$(".square").css({"background": "#1A1A1A", "box-shadow": "0px 0px 14px 4px rgba(26, 26, 26, 0.25)"});
		
		if(hold == "off"){
			settingReset();
		}
		
		if($(".format-labels .active").text() == "HEX"){
			$(".hex input").attr("placeholder", "1A1A1A");
		}
		else if($(".format-labels .active").text() == "HSB"){
			$(".hsb input[name='hue']").attr("placeholder", "0");
			$(".hsb input[name='saturation']").attr("placeholder", "0");
			$(".hsb input[name='brightness']").attr("placeholder", "10");
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
		$("#koko").css("display", "inline-block");
		$("#mb").css("display", "none");
		$(".dropper").val("#808080");
		
		$(".square").css({"background": "#808080", "box-shadow": "0px 0px 14px 4px rgba(128, 128, 128, 0.25)"});
	
		if($(".format-labels .active").text() == "HEX"){
			$(".hex input").attr("placeholder", "808080");
		}
		else if($(".format-labels .active").text() == "HSB"){
			$(".hsb input[name='hue']").attr("placeholder", "0");
			$(".hsb input[name='saturation']").attr("placeholder", "0");
			$(".hsb input[name='brightness']").attr("placeholder", "50");
		}
		else{
			$(".rgb input[name='red']").attr("placeholder", "128");
			$(".rgb input[name='green']").attr("placeholder", "128");
			$(".rgb input[name='blue']").attr("placeholder", "128");
		}
	}
}

function colorVersion(loc){
	if(loc == "us"){
		setCookie("colorVersion", "us", 30);
		$(".format .panel-label").text("Color Format");
		$("#color").text($("#color").text().replace("Colour", "Color"));
		$(".square-title").text($(".square-title").text().replace("Colour", "Color"));
	}
	else{
		setCookie("colorVersion", "world", 30);
		$(".format .panel-label").text("Colour Format");
		$("#color").text($("#color").text().replace("Color", "Colour"));
		$(".square-title").text($(".square-title").text().replace("Color", "Colour"));
	}
}

function colorVision(){
	var hex = $(".dropper").val().replace("#", "");
		
	if(colorFormat == "HEX"){
		$(".hex input").val(hex);
	}
	else if(colorFormat == "HSB"){
		hsv = rgbToHSB(hexToRgb(hex).r, hexToRgb(hex).g, hexToRgb(hex).b),
		h = Math.round(hsv[0]),
		s = Math.round(hsv[1]),
		v = Math.round(hsv[2]);
		
		$(".hsb input[name='hue']").val(h);
		$(".hsb input[name='saturation']").val(s);
		$(".hsb input[name='brightness']").val(v);
	}
	else{
		r = hexToRgb(hex).r,
		g = hexToRgb(hex).g,
		b = hexToRgb(hex).b;
		
		$(".rgb input[name='red']").val(r);
		$(".rgb input[name='green']").val(g);
		$(".rgb input[name='blue']").val(b);
	}
	
	if(hold == "off"){
		$("form").submit();
	}
	
	preview();
}

function editConversion(){
	if($(".conversion").attr("readonly") == "readonly"){
		$(".conversion").prop("readonly", false);
		$("#edit").addClass("active");
	}
	else{
		$(".conversion").text($(".conversion").val());
		$(".conversion").prop("readonly", true);
		$("#edit").removeClass("active");
	}
}

function formatToggle(value){
	  value = parseInt(value, 10);
	  $(".format-labels span").removeClass("active");
	  $(".hex, .hsb, .rgb").remove();
	  $(".error").empty();

	  if (value === 1) {
		$('.format input').removeClass('hsbOn rgbOn');
		$('.format input').addClass('hexOn');
	  }
	  else if (value === 2) {
		$('.format input').removeClass('hexOn rgbOn');
		$('.format input').addClass('hsbOn');
	  }
	  else if (value === 3) {
		$('.format input').removeClass('hexOn hsbOn');
		$('.format input').addClass('rgbOn');
	  }
	  
	$('.format-labels').find("span:nth-child("+value+")").addClass("active");
	$('.format input').val(value);

	$(".colors").empty();
	
	if(value == 1){
		setCookie("colorFormat", "HEX", 30);
		colorFormat = "HEX";
		$(".text-box").after('<div class="hex">HEX: # <input type="text" name="hex" size=6 maxlength=6></div>');
	}
	else if(value == 2){
		setCookie("colorFormat", "HSB", 30);
		colorFormat = "HSB";
		$(".text-box").after('<div class="hsb">hsb(<input type="text" name="hue" size=3 maxLength=3>deg, <input type="text" name="saturation" size=3 maxLength=3>%, <input type="text" name="brightness" size=3 maxLength=3>%)</div>');
	}
	else if(value == 3){
		setCookie("colorFormat", "RGB", 30);
		colorFormat = "RGB";
		$(".text-box").after('<div class="rgb">rgb(<input type="text" name="red" size=3 maxLength=3>, <input type="text" name="green" size=3 maxLength=3>, <input type="text" name="blue" size=3 maxLength=3>)</div>');
	}
	
	$(".info").empty();
	$(".error").empty();
	colorReset();
	samples();
}

function hexToRgb(color) {
	var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
	
	return rgb ? {
		r: parseInt(rgb[1], 16),
		g: parseInt(rgb[2], 16),
		b: parseInt(rgb[3], 16)
	} : null;
}

function holdToggle(){
	$(".hold .switch-label").removeClass("active");
	
	if($(".hold input").is(":checked")){
		setCookie("hold", "on", 30);
		hold = "on";
		$(".hold .switch-label:nth-child(3)").addClass("active");
	}
	else{
		setCookie("hold", "off", 30);
		hold = "off";
		$(".hold .switch-label:nth-child(1)").addClass("active");
		
		if(colorFormat == "HEX" && $('.hex input').val() != "" || colorFormat == "HSB" && $('.hsb input').val() != "" || colorFormat == "RGB" && $('.rgb input').val() != ""){
			$("form").submit();
		}
		else{
			colorReset();
		}
		
		$(".hold input").prop( "checked", false );
	}
}

function mix(a, b, v)
{
    return (1-v)*a + v*b;
}

function HSVtoRGB(H, S, V)
{
    var V2 = V * (1 - S);
    var r  = ((H>=0 && H<=60) || (H>=300 && H<=360)) ? V : ((H>=120 && H<=240) ? V2 : ((H>=60 && H<=120) ? mix(V,V2,(H-60)/60) : ((H>=240 && H<=300) ? mix(V2,V,(H-240)/60) : 0)));
    var g  = (H>=60 && H<=180) ? V : ((H>=240 && H<=360) ? V2 : ((H>=0 && H<=60) ? mix(V2,V,H/60) : ((H>=180 && H<=240) ? mix(V,V2,(H-180)/60) : 0)));
    var b  = (H>=0 && H<=120) ? V2 : ((H>=180 && H<=300) ? V : ((H>=120 && H<=180) ? mix(V2,V,(H-120)/60) : ((H>=300 && H<=360) ? mix(V,V2,(H-300)/60) : 0)));

    return {
        r : Math.round(r * 255),
        g : Math.round(g * 255),
        b : Math.round(b * 255)
    };
}

function imageTypeToggle(){
	$(".imageType .switch-label").removeClass("active");
	
	if($(".switch-panel .imageType input").is(":checked")){
		setCookie("imageType", "yellow", 30);
		imageType = "yellow";
		$(".imageType .switch-label:nth-child(3)").addClass("active");
	}
	else{
		setCookie("imageType", "standard", 30);
		imageType = "standard";
		$(".imageType .switch-label:nth-child(1)").addClass("active");
	}
	
	if($(".hex input, .hsb input, .rgb input").val() == "" && hold == "off"){
		settingReset();
	}
	else if(hold == "off"){
		$("form").submit();
	}
}

function layerToggle(imageLayers){
	setCookie("imageLayer", imageLayers, 30);
	imageLayer = imageLayers
	
	if($(".hex input, .hsb input, .rgb input").val() == "" && hold == "off"){
		settingReset();
	}
	else if(hold == "off"){
		$("form").submit();
	}
	
	switch(imageLayer){
		case "Bezel":
			$(".layer input").val(1).trigger('input');
			$(".layer-labels li:nth-child(1)").addClass("active");
			break;
		case "Background":
			$(".layer input").val(2).trigger('input');
			$(".layer-labels li:nth-child(2)").addClass("active");
			break;
		case "LED":
			$(".layer input").val(3).trigger('input');
			$(".layer-labels li:nth-child(3)").addClass("active");
			break;
		case "Device":
			$(".layer input").val(4).trigger('input');
			$(".layer-labels li:nth-child(4)").addClass("active");
			break;
		case "Device LED":
			$(".layer input").val(5).trigger('input');
			$(".layer-labels li:nth-child(5)").addClass("active");
			break;
		case "Decal":
			$(".layer input").val(6).trigger('input');
			$(".layer-labels li:nth-child(6)").addClass("active");
			break;
		case "Top":
			$(".layer input").val(7).trigger('input');
			$(".layer-labels li:nth-child(7)").addClass("active");
			break;
		case "Cab Glass":
			$(".layer input").val(8).trigger('input');
			$(".layer-labels li:nth-child(8)").addClass("active");
			break;
		default:
			$(".layer input").val(1).trigger('input');
			$(".layer-labels li:nth-child(1)").addClass("active");
	}
}

function presetCopy() {
	navigator.clipboard.writeText($(".conversion").text().trim());
}

function preview(){
	var hex = $('.hex input').val(),
	r = parseInt($(".rgb [name='red']").val()),
	b = parseInt($(".rgb [name='blue']").val()),
	g = parseInt($(".rgb [name='green']").val()),
	h = parseInt($(".hsb [name='hue']").val()),
	s = parseInt($(".hsb [name='saturation']").val()),
	v = parseInt($(".hsb [name='brightness']").val());
	
	if(colorFormat == "HEX"){
		$(".square").css("box-shadow", "0px 0px 14px 4px rgba("+hexToRgb(hex).r+", "+hexToRgb(hex).g+", "+hexToRgb(hex).b+", 0.25)");
		$(".square").css("background", "#"+hex);
		$(".dropper").val("#"+hex);
	}
	else if(colorFormat == "HSB"){
		$(".square").css("box-shadow", "0px 0px 14px 4px rgba("+HSVtoRGB(h, s/100, v/100).r+", "+HSVtoRGB(h, s/100, v/100).g+", "+HSVtoRGB(h, s/100, v/100).b+", 0.25)");
		$(".square").css("background", "rgb("+HSVtoRGB(h, s/100, v/100).r+", "+HSVtoRGB(h, s/100, v/100).g+", "+HSVtoRGB(h, s/100, v/100).b+")");
		$(".dropper").val(rgbToHex(HSVtoRGB(h, s/100, v/100).r, HSVtoRGB(h, s/100, v/100).g, HSVtoRGB(h, s/100, v/100).b));
	}
	else{
		$(".square").css("box-shadow", "0px 0px 14px 4px rgba("+r+", "+g+", "+b+", 0.25)");
		$(".square").css("background", "rgb("+r+", "+g+", "+b+")");
		$(".dropper").val(rgbToHex(r, g, b));
	}
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function rgbToHSB(r, g, b){
    r /= 255, g /= 255, b /= 255;
	var v = Math.max(r, g, b), n = v - Math.min(r, g, b);
	var h = (n === 0) ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
	
    return [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];
}

function samples(){
	sampleColors();
	$(".hex input").val("");
	$(".rgb input").val("");
	
	$(".sample .color").on('click', function(){
		if(colorFormat == "HEX"){
			hex = $(this).parents(".colors").siblings(".color-code").text()
			
			$(".hex input").val(hex.replace("#", ""));
			$(".dropper").val(hex);
		}
		else if(colorFormat == "HSB"){
			sampleHSV = $(this).parents(".colors").siblings(".color-code").text().replace("hsb(", "").replace(")", "").replace("deg", "").replace(/%/g, "").split(', ');
			
			$(".hsb [name='hue']").val(sampleHSV[0]);
			$(".hsb [name='saturation']").val(sampleHSV[1]);
			$(".hsb [name='brightness']").val(sampleHSV[2]);
			
			
			h = parseInt($(".hsb [name='hue']").val()),
			s = parseInt($(".hsb [name='saturation']").val()),
			v = parseInt($(".hsb [name='brightness']").val());
			
			$(".dropper").val(rgbToHex(HSVtoRGB(h, s/100, v/100).r, HSVtoRGB(h, s/100, v/100).g, HSVtoRGB(h, s/100, v/100).b));
		}
		else{
			sampleRGB = $(this).parents(".colors").siblings(".color-code").text().replace("rgb(", "").replace(")", "").split(', ');
			
			$(".rgb input[name='red']").val(sampleRGB[0]);
			$(".rgb input[name='green']").val(sampleRGB[1]);
			$(".rgb input[name='blue']").val(sampleRGB[2]);
			
			
			r = parseInt($(".rgb [name='red']").val()),
			g = parseInt($(".rgb [name='green']").val()),
			b = parseInt($(".rgb [name='blue']").val());
			
			$(".dropper").val(rgbToHex(r, g, b));
		}
		
		if(hold == "off"){
			$("form").submit();
		}
		
		preview();
	});
	
	$(".sample .color").on('mouseover', function(){
		$(this).parents(".colors").siblings(".color-code").text($(this).data("code"));
	});
	
	if(getCookie("sampleStyle") == "diamond" || getCookie("sampleStyle") == ""){
		$(".sample").addClass("jewel").removeClass("swatch").removeClass("palette");
	}
	else if(getCookie("sampleStyle") == "palette"){
		$(".sample").addClass("palette").removeClass("jewel").removeClass("swatch");
	}
	else{
		$(".sample").addClass("swatch").removeClass("jewel").removeClass("palette");
	}
}

function savePreset(){
	  if ('Blob' in window) {
		var fileName = prompt('Please enter file name to save', 'Preset.slangp');
		if (fileName) {
		  var textToWrite = $('.conversion').val().replace(/n/g, 'rn');
		  var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });

		  if ('msSaveOrOpenBlob' in navigator) {
			navigator.msSaveOrOpenBlob(textFileAsBlob, fileName);
		  } else {
			var downloadLink = document.createElement('a');
			downloadLink.download = fileName;
			downloadLink.innerHTML = 'Download File';
			
			if ('webkitURL' in window) {
			  // Chrome allows the link to be clicked without actually adding it to the DOM.
			  downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
			} else {
			  // Firefox requires the link to be added to the DOM before it can be clicked.
			  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
			  downloadLink.click(function(){
				document.body.removeChild(event.target);
			  }); 
			  
			  downloadLink.style.display = 'none';
			  document.body.appendChild(downloadLink);
			}
			downloadLink.click();
		  }
		}
	  } else {
		alert('Your browser does not support the HTML5 Blob.');
	  }
}

function settingReset(){
	if(bezelStyle == "mbz"){
		if(imageType == "yellow"){
			var bezel = 'HSM_BZL_COLOR_HUE = "0.000000"\nHSM_BZL_COLOR_SATURATION = "0.000000"\nHSM_BZL_COLOR_VALUE = "10.000000"\n',
					bg = 'HSM_BG_HUE = "0.000000"\nHSM_BG_SATURATION = "100.000000"\nHSM_BG_BRIGHTNESS = "100.000000"\nHSM_BG_GAMMA = "1.000000"\n',
					led = 'HSM_LED_HUE = "0.000000"\nHSM_LED_SATURATION = "100.000000"\nHSM_LED_BRIGHTNESS = "100.000000"\nHSM_LED_GAMMA = "1.000000"\n',
					device = 'HSM_DEVICE_HUE = "0.000000"\nHSM_DEVICE_SATURATION = "100.000000"\nHSM_DEVICE_BRIGHTNESS = "100.000000"\nHSM_DEVICE_GAMMA = "1.000000"\n',
					deviceLED = 'HSM_DEVICELED_HUE = "0.000000"\nHSM_DEVICELED_SATURATION = "100.000000"\nHSM_DEVICELED_BRIGHTNESS = "100.000000"\nHSM_DEVICELED_GAMMA = "1.000000"\n',
					decal = 'HSM_DECAL_HUE = "0.000000"\nHSM_DECAL_SATURATION = "100.000000"\nHSM_DECAL_BRIGHTNESS = "100.000000"\nHSM_DECAL_GAMMA = "1.000000"\n',
					topLayer = 'HSM_TOP_HUE = "0.000000"\nHSM_TOP_SATURATION = "100.000000"\nHSM_TOP_BRIGHTNESS = "100.000000"\nHSM_TOP_GAMMA = "1.000000"\n',
					cabGlass = 'HSM_CAB_GLASS_HUE = "0.000000"\nHSM_CAB_GLASS_SATURATION = "100.000000"\nHSM_CAB_GLASS_BRIGHTNESS = "100.000000"\nHSM_CAB_GLASS_GAMMA = "1.000000"\n';
		}
		else{
			var bezel = 'HSM_BZL_COLOR_HUE = "0.000000"\nHSM_BZL_COLOR_SATURATION = "0.000000"\nHSM_BZL_COLOR_VALUE = "10.000000"\n',
					bg = 'HSM_BG_HUE = "0.000000"\nHSM_BG_SATURATION = "100.000000"\nHSM_BG_BRIGHTNESS = "100.000000"\n',
					led = 'HSM_LED_HUE = "0.000000"\nHSM_LED_SATURATION = "100.000000"\nHSM_LED_BRIGHTNESS = "100.000000"\n',
					device = 'HSM_DEVICE_HUE = "0.000000"\nHSM_DEVICE_SATURATION = "100.000000"\nHSM_DEVICE_BRIGHTNESS = "100.000000"\n',
					deviceLED = 'HSM_DEVICELED_HUE = "0.000000"\nHSM_DEVICELED_SATURATION = "100.000000"\nHSM_DEVICELED_BRIGHTNESS = "100.000000"\n',
					decal = 'HSM_DECAL_HUE = "0.000000"\nHSM_DECAL_SATURATION = "100.000000"\nHSM_DECAL_BRIGHTNESS = "100.000000"\n',
					topLayer = 'HSM_TOP_HUE = "0.000000"\nHSM_TOP_SATURATION = "100.000000"\nHSM_TOP_BRIGHTNESS = "100.000000"\n',
					cabGlass = 'HSM_CAB_GLASS_HUE = "0.000000"\nHSM_CAB_GLASS_SATURATION = "100.000000"\nHSM_CAB_GLASS_BRIGHTNESS = "100.000000"\n';
		}
		
		switch(imageLayer){
			case "Bezel":
				$(".conversion").val(bezel).text(bezel);
				break;
			case "Background":
				$(".conversion").val(bg).text(bg);
				break;
			case "LED":
				$(".conversion").val(led).text(led);
				break;
			case "Device":
				$(".conversion").val(device).text(device);
				break;
			case "DeviceLED":
				$(".conversion").val(deviceLED).text(deviceLED);
				break;
			case "Decal":
				$(".conversion").val(decal).text(decal);
				break;
			case "Top":
				$(".conversion").val(topLayer).text(topLayer);
				break;
			case "Cab Glass":
				$(".conversion").val(cabGlass).text(cabGlass);
				break;
		}
	}
	else{
		$(".conversion").text('BEZEL_R = "0.000000"\nBEZEL_G = "0.000000"\nBEZEL_B = "0.000000"\nBEZEL_CON = "1.300000"').val('BEZEL_R = "0.000000"\nBEZEL_G = "0.000000"\nBEZEL_B = "0.000000"\nBEZEL_CON = "1.300000"');	
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
	
	if(getCookie("hold") == ""){
		hold = "off";
	}
	else{
		hold = getCookie("hold");
	}
	
	if(getCookie("sample") == ""){
		sampleStyle = "diamond";
	}
	else{
		sampleStyle = getCookie("sampleStyle");
	}
	
	if(getCookie("colorVersion") == ""){
		colorVer = "world";
	}
	else{
		colorVer = getCookie("colorVersion");
	}
	
	if(colorFormat == "HEX"){
		formatToggle(1);
	}
	else if(colorFormat == "HSB"){
		formatToggle(2);
	}
	else{
		formatToggle(3);
	}
	
	if(bezelStyle == "mbz"){
		$(".switch-panel .bezel input").attr("checked", "checked");
		$(".bezel .switch-label:nth-child(3)").addClass("active");
		layerToggle(imageLayer);
		$(".layers-wrap, .imageType").removeClass("disabled");
		$(".imageType input").prop("disabled", false);
	}
	else{
		$(".bezel .switch-label:nth-child(1)").addClass("active");
		$(".layers-wrap, .imageType").addClass("disabled");
		$(".imageType input").prop("disabled", true);
	}
	
	if(hold == "on"){
		$(".hold input").attr("checked", "checked");
		$(".hold .switch-label:nth-child(3)").addClass("active");
	}
	else{
		$(".hold .switch-label:nth-child(1)").addClass("active");
	}
	
	if(imageType == "yellow"){
		$(".switch-panel .imageType input").attr("checked", "checked");
		$(".imageType .switch-label:nth-child(3)").addClass("active");
	}
	else{
		$(".imageType .switch-label:nth-child(1)").addClass("active");
	}
	
	colorReset();
	colorVersion(colorVer);
}

$(".dropper").on('change', function(){
	colorVision();
});

$(".hold input").on('click', function(){
	holdToggle();
});

$(".hold .switch-label").on('click', function(){
	if($(this).hasClass("active") == false){
		if($(".hold input").is(":checked")){
			$(".hold input").prop('checked', false);
		}
		else{
			$(".hold input").prop('checked', true);
			
		}
		
		$(".hold .switch-label").removeClass("active");
		
		holdToggle();
	}
});

$('.layer-labels li').on('click', function () {
	if($(".layers-wrap").hasClass("disabled") == false){
		var index = $(this).index();
		
		$(".layer-labels li").removeClass("active");
		$(".layer input").val(index+1).trigger('input');
		$('.layer-labels').find("li:nth-child("+(index+1)+")").addClass("active");
		layerToggle($(this).text());
	}
});

$(".left-foot .button").on('click', function(){
	setCookie("sampleStyle", $(this).text().trim(), 30);
	$(".colors").empty();
	
	samples();
});

$(".switch-panel .bezel .switch-label").on('click', function(){
	if($(this).hasClass("active") == false){
		if($(".switch-panel .bezel input").is(":checked")){
			$(".switch-panel .bezel input").prop('checked', false);
		}
		else{
			$(".switch-panel .bezel input").prop('checked', true);
		}
		
		$(".bezel .switch-label").toggleClass("active");
		
		bezelToggle();
	}
});

$(".switch-panel .bezel input").on('click', function(){	
	bezelToggle();
});

$(".switch-panel .format-labels span").on('click', function(){
	if($(this).text() == "HEX"){
		formatToggle(1);
	}
	else if($(this).text() == "HSB"){
		formatToggle(2);
	}
	else if($(this).text() == "RGB"){
		formatToggle(3);
	}
});

$(".switch-panel .imageType .switch-label").on('click', function(){
	if($(this).hasClass("active") == false && $(".imageType").hasClass("disabled") == false){
		if($(".switch-panel .imageType input").is(":checked")){
			$(".switch-panel .imageType input").prop('checked', false);
		}
		else{
			$(".switch-panel .imageType input").prop('checked', true);
		}
		
		$(".imageType .switch-label").toggleClass("active");
		
		imageTypeToggle();
	}
});

$(".switch-panel .imageType input").on('click', function(){
	if($(".imageType").hasClass("disabled") == false){
		imageTypeToggle();
	}
});

$(".us, .world").on('click', function(){
	if($(this).hasClass("us") == true){
		colorVersion("us");
	}
	else{
		colorVersion("world");
	}
});

$(document).ready(function () {
	$('.image input[type="file"]').change(function (e) {
		const geekss = e.target.files[0].name;
		var settings = $("textarea").text();
		
		if(bezelStyle == "mbz"){
			switch($(".layer input").val()){
				case "2":
					$(".conversion").val(settings+'BackgroundImage = "'+geekss+'"\n').text(settings+'BackgroundImage = "'+geekss+'"\n');
					break;
				case "3":
					$(".conversion").val(settings+'LEDImage = "'+geekss+'"\n').text(settings+'LEDImage = "'+geekss+'"\n');
					break;
				case "4":
					$(".conversion").val(settings+'DeviceImage = "'+geekss+'"\n').text(settings+'DeviceImage = "'+geekss+'"\n');
					break;
				case "5":
					$(".conversion").val(settings+'DeviceLEDImage = "'+geekss+'"\n').text(settings+'DeviceLEDImage = "'+geekss+'"\n');
					break;
				case "6":
					$(".conversion").val(settings+'DecalImage = "'+geekss+'"\n').text(settings+'DecalImage = "'+geekss+'"\n');
					break;
				case "7":
					$(".conversion").val(settings+'TopLayerImage = "'+geekss+'"\n').text(settings+'TopLayerImage = "'+geekss+'"\n');
					break;
				case "8":
					$(".conversion").val(settings+'CabinetGlassImage = "'+geekss+'"\n').text(settings+'CabinetGlassImage = "'+geekss+'"\n');
					break;
			}
		}
		else{
			$(".conversion").val(settings+'bg_under = "'+geekss+'"\n').text(settings+'bg_under = "'+geekss+'"\n');
		}
		
		$('.image input[type="file"]').val("");
		$(this).blur();
	});
	
	$('.shader input[type="file"]').change(function (e) {
		if(bezelStyle == "mbz"){
			const geekss = $(".conversion").val()+'#reference "shaders_slang\\bezel\\Mega_Bezel\\Presets\\Base_CRT_Presets\\'+e.target.files[0].name+'"\n';
			$(".conversion").val(geekss).text(geekss);
		}
		else{
			const geekss = $(".conversion").val()+'#reference "shaders_slang\\bezel\\koko-aio-slang\\Presets-ng\\'+e.target.files[0].name+'"\n';
			$(".conversion").val(geekss).text(geekss);
		}
		
		$('.shader input[type="file"]').val("");
		$(this).blur();
	});
	
	$("form").submit(function (event) {
		$(".info, .error").empty();
		hexError = hsvError = rgbError = "false";
		$(".submit").blur();
		
		if(colorFormat == "HEX"){
			var hex = $(".hex input").val().toUpperCase();
		
			if(/^[0-9A-F]{6}$/i.test(hex) == false){
				hexError = "true";
			}
			else{
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
				}
				else{
					mbzHSB = rgbToHSB(hexToRgb(hex).r, hexToRgb(hex).g, hexToRgb(hex).b);
				}
				
				$("#copy").prop("disabled", false);
				colorMessage(hex);
			}
			
			if(hexError == "true"){
				$(".error").html("HEX needs to be <strong>RRGGBB</strong> value");
				$(".info").empty();
			}
			else{
				$(".error").empty();
			}
			
			$(".contrast input, .hex input").blur();
		}
		else if(colorFormat == "HSB"){
			var h = parseInt($(".hsb [name='hue']").val()),
				s = parseInt($(".hsb [name='saturation']").val()),
				v = parseInt($(".hsb [name='brightness']").val());
			
			if(h < 0 || h > 360 || s < 0 || s > 100 || v < 0 || v > 100){
				hsvError = "true";
			}
			else if(Number.isInteger(h) == false || Number.isInteger(s) == false || Number.isInteger(v) == false){
				hsvError = "true";
			}
			else{
				hsvError = "false";
				
				s = s/100;
				v = v/100;
				
				if(bezelStyle == "koko-aio"){
					var contrast = $("#contrasts option:selected").val();
					if(contrast < 1){
						rSetting = (((HSVtoRGB(h, s, v).r - 128) * (0.395 - (contrast - 1.30) * ((3.75 - contrast) * (contrast * .1 + .105) + (contrast * .01 + .0105))) / 128)).toFixed(10);
						gSetting = (((HSVtoRGB(h, s, v).g - 128) * (0.395 - (contrast - 1.30) * ((3.75 - contrast) * (contrast * .1 + .105) + (contrast * .01 + .0105))) / 128)).toFixed(10);
						bSetting = (((HSVtoRGB(h, s, v).b - 128) * (0.395 - (contrast - 1.30) * ((3.75 - contrast) * (contrast * .01 + .055) + (contrast * .001 + .0055))) / 128)).toFixed(10);
					}
					else{
						rSetting = (((HSVtoRGB(h, s, v).r - 128) * (0.395 - (contrast - 1.30) * ((3.75 - contrast) * (contrast * .01 + .105) + (contrast * .001 + .0105))) / 128)).toFixed(10);
						gSetting = (((HSVtoRGB(h, s, v).g - 128) * (0.395 - (contrast - 1.30) * ((3.75 - contrast) * (contrast * .01 + .105) + (contrast * .001 + .0105))) / 128)).toFixed(10);
						bSetting = (((HSVtoRGB(h, s, v).b - 128) * (0.395 - (contrast - 1.30) * ((3.75 - contrast) * (contrast * .001 + .055) + (contrast * .0001 + .0055))) / 128)).toFixed(10);
					}
					
						contrastSetting = contrast+"0000";
				}
				else{
					mbzHSB = rgbToHSB(HSVtoRGB(h, s, v).r, HSVtoRGB(h, s, v).g, HSVtoRGB(h, s, v).b);
				}
				
				$("#copy").prop("disabled", false);
				colorMessage("hsb("+h+"deg, "+s*100+"%, "+v*100+"%)");
			}
			
			if(hsvError == "true"){
				$(".error").text("HSV is in format 0-360deg, 0-100%, 0-100%");
				$(".info").empty();
			}
			else{
				$(".error").empty();
			}
			
			$(".contrast input, .hsb input").blur();
		}
		else{
			var r = parseInt($(".rgb [name='red']").val()),
				g = parseInt($(".rgb [name='green']").val()),
				b = parseInt($(".rgb [name='blue']").val());
				
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
				}
				else{
					mbzHSB = rgbToHSB(r, g, b);
				}
				
				$("#copy").prop("disabled", false);
				colorMessage("rgb("+r+", "+g+", "+b+")");
			}
			
			if(rgbError == "true"){
				$(".error").text("RGB has to be a number between 0 to 255");
				$(".info").empty();
			}
			else{
				$(".error").empty();
			}
			
			$(".contrast input, .rgb input").blur();
		}
		
		$(".conversion").val();
		
		if(bezelStyle == "mbz" && hexError == "false" && hsvError == "false" && rgbError == "false"){
			preview();
			
			var hue = Math.round(mbzHSB[0]),
				saturation = Math.round(mbzHSB[1]),
				brightness = Math.round(mbzHSB[2]);
			
			if(imageType == "yellow"){
				if(hue < 52 && $(".layer input").val() != "1"){
					hue = hue + 308;
				}
				else if($(".layer input").val() != "1"){
					hue = hue - 52;
				}
				
				var bezel = 'HSM_BZL_COLOR_HUE = "'+hue+'.000000"\nHSM_BZL_COLOR_SATURATION = "'+saturation+'.000000"\nHSM_BZL_COLOR_VALUE = "'+brightness+'.000000"\n',
					bg = 'HSM_BG_HUE = "'+hue+'.000000"\nHSM_BG_SATURATION = "'+saturation+'.000000"\nHSM_BG_BRIGHTNESS = "'+brightness+'.000000"\nHSM_BG_GAMMA = "0.450000"\n',
					led = 'HSM_LED_HUE = "'+hue+'.000000"\nHSM_LED_SATURATION = "'+saturation+'.000000"\nHSM_LED_BRIGHTNESS = "'+brightness+'.000000"\nHSM_LED_GAMMA = "0.450000"\n',
					device = 'HSM_DEVICE_HUE = "'+hue+'.000000"\nHSM_DEVICE_SATURATION = "'+saturation+'.000000"\nHSM_DEVICE_BRIGHTNESS = "'+brightness+'.000000"\nHSM_DEVICE_GAMMA = "0.450000"\n',
					deviceLED = 'HSM_DEVICELED_HUE = "'+hue+'.000000"\nHSM_DEVICELED_SATURATION = "'+saturation+'.000000"\nHSM_DEVICELED_BRIGHTNESS = "'+brightness+'.000000"\nHSM_DEVICELED_GAMMA = "0.450000"\n',
					decal = 'HSM_DECAL_HUE = "'+hue+'.000000"\nHSM_DECAL_SATURATION = "'+saturation+'.000000"\nHSM_DECAL_BRIGHTNESS = "'+brightness+'.000000"\nHSM_DECAL_GAMMA = "0.450000"\n',
					topLayer = 'HSM_TOP_HUE = "'+hue+'.000000"\nHSM_TOP_SATURATION = "'+saturation+'.000000"\nHSM_TOP_BRIGHTNESS = "'+brightness+'.000000"\nHSM_TOP_GAMMA = "0.450000"\n',
					cabGlass = 'HSM_CAB_GLASS_HUE = "'+hue+'.000000"\nHSM_CAB_GLASS_SATURATION = "'+saturation+'.000000"\nHSM_CAB_GLASS_BRIGHTNESS = "'+brightness+'.000000"\nHSM_CAB_GLASS_GAMMA = "0.450000"\n';
			}
			else{
				var bezel = 'HSM_BZL_COLOR_HUE = "'+hue+'.000000"\nHSM_BZL_COLOR_SATURATION = "'+saturation+'.000000"\nHSM_BZL_COLOR_VALUE = "'+brightness+'.000000"\n',
					bg = 'HSM_BG_HUE = "'+hue+'.000000"\nHSM_BG_SATURATION = "'+saturation+'.000000"\nHSM_BG_BRIGHTNESS = "'+brightness+'.000000"\n',
					led = 'HSM_LED_HUE = "'+hue+'.000000"\nHSM_LED_SATURATION = "'+saturation+'.000000"\nHSM_LED_BRIGHTNESS = "'+brightness+'.000000"\n',
					device = 'HSM_DEVICE_HUE = "'+hue+'.000000"\nHSM_DEVICE_SATURATION = "'+saturation+'.000000"\nHSM_DEVICE_BRIGHTNESS = "'+brightness+'.000000"\n',
					deviceLED = 'HSM_DEVICELED_HUE = "'+hue+'.000000"\nHSM_DEVICELED_SATURATION = "'+saturation+'.000000"\nHSM_DEVICELED_BRIGHTNESS = "'+brightness+'.000000"\n',
					decal = 'HSM_DECAL_HUE = "'+hue+'.000000"\nHSM_DECAL_SATURATION = "'+saturation+'.000000"\nHSM_DECAL_BRIGHTNESS = "'+brightness+'.000000"\n',
					topLayer = 'HSM_TOP_HUE = "'+hue+'.000000"\nHSM_TOP_SATURATION = "'+saturation+'.000000"\nHSM_TOP_BRIGHTNESS = "'+brightness+'.000000"\n',
					cabGlass = 'HSM_CAB_GLASS_HUE = "'+hue+'.000000"\nHSM_CAB_GLASS_SATURATION = "'+saturation+'.000000"\nHSM_CAB_GLASS_BRIGHTNESS = "'+brightness+'.000000"\n';
			}
			
			if(hold == "off"){
				switch($(".layer input").val()){
					case "1":
						$(".conversion").val(bezel).text(bezel);
						break;
					case "2":
						$(".conversion").val(bg).text(bg);
						break;
					case "3":
						$(".conversion").val(led).text(led);
						break;
					case "4":
						$(".conversion").val(device).text(device);
						break;
					case "5":
						$(".conversion").val(deviceLED).text(deviceLED);
						break;
					case "6":
						$(".conversion").val(decal).text(decal);
						break;
					case "7":
						$(".conversion").val(topLayer).text(topLayer);
						break;
					case "8":
						$(".conversion").val(cabGlass).text(cabGlass);
						break;
				}
			}
			else{
				switch($(".layer input").val()){
					case "1":
						$(".conversion").val($(".conversion").text()+bezel).text($(".conversion").text()+bezel);
						break;
					case "2":
						$(".conversion").val($(".conversion").text()+bg).text($(".conversion").text()+bg);
						break;
					case "3":
						$(".conversion").val($(".conversion").text()+led).text($(".conversion").text()+led);
						break;
					case "4":
						$(".conversion").val($(".conversion").text()+device).text($(".conversion").text()+device);
						break;
					case "5":
						$(".conversion").val($(".conversion").text()+deviceLED).text($(".conversion").text()+deviceLED);
						break;
					case "6":
						$(".conversion").val($(".conversion").text()+decal).text($(".conversion").text()+decal);
						break;
					case "7":
						$(".conversion").val($(".conversion").text()+topLayer).text($(".conversion").text()+topLayer);
						break;
					case "8":
						$(".conversion").val($(".conversion").text()+cabGlass).text($(".conversion").text()+cabGlass);
						break;
				}
			}
		}
		
		else if(bezelStyle == "koko-aio" && hexError == "false" && hsvError == "false" && rgbError == "false"){
			preview();
			
			var preset = 'BEZEL_R = "'+rSetting+'"\nBEZEL_G = "'+gSetting+'"\nBEZEL_B = "'+bSetting+'"\nBEZEL_CON = "'+contrastSetting+'"\n';
			
			if(hold == "off"){
				$(".conversion").val(preset).text(preset);
			}
			else{
				$(".conversion").val($(".conversion").text()+preset).text($(".conversion").text()+preset);
			}
		}
		
		event.preventDefault();
		
	});
	
	start();
	
});
