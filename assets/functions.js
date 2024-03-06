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
		$(".imageType").removeClass("disabled");
		$(".imageType input").prop("disabled", false);
		$(".mbz.layers-wrap").css("display", "inline-block");
		$(".koko-aio.layers-wrap").css("display", "none");
	}
	else{
		setCookie("bezelStyle", "koko-aio", 30);
		bezelStyle = "koko-aio";
		buildToggle();
		layerToggle(imageLayer);
		$(".bezel .switch-label:nth-child(1)").addClass("active");
		$(".imageType").addClass("disabled");
		$(".imageType input").prop("disabled", true);
		$(".mbz.layers-wrap").css("display", "none");
		$(".koko-aio.layers-wrap").css("display", "inline-block");
	}
	
	$(".info").empty();
	$(".error").empty();
	clearText(1);
	colorReset();
};

function brightness(){
	if($(".text-box").hasClass("on amber") || $(".text-box").hasClass("amber on")){
		$(".mini, .text-box").removeClass("amber");
	}
	else if($(".text-box").hasClass("on")){
		$(".mini, .text-box").addClass("amber");
	}
	else if($("#highlight").data("theme") == "dark"){
		$("#highlight").attr("href", "assets/highlight/styles/a11y-light.css");
		$("#highlight").data("theme", "light");
	}
	else if($("#highlight").data("theme") == "light"){
		$("#highlight").attr("href", "assets/highlight/styles/a11y-dark.css");
		$("#highlight").data("theme", "dark");
	}
}

function clearText(id){
	if(id == 1){
		$(".text").text("").val("");
		$("#codeBlock1, .error, .info").empty();
		$(".mini .plyr").remove();
		$(".mini textarea").css("display", "block");
		colorReset;
	}
	else{
		$(".text-box .tab-pane.active textarea").text("").val("");
		$("#codeBlock"+id).empty();
		$(".nav-link.active").parents(".nav-item").addClass("empty");
		$(".preset-title").empty();
		$(".tab-pane.active .plyr").remove();
		$(".tab-pane.active textarea").css("display", "block");
	}
	
	cvSet();
}

function colorReset(){
	$(".hex input, .hsb input, .hsl input, .rgb input").val("");
	$(".info").empty();
	$(".info").css("display", "none");
	$(".color").removeClass("active");
	
	if(bezelStyle == "mbz"){
		$(".contrast").css("display", "none");
		$(".dropper").val("#1A1A1A");
		$(".square").css("background", "#1A1A1A");
		$(".colorVis").css("color", "#1A1A1A");
		settingReset();
		
		if($(".format-labels .active").text() == "HEX"){
			$(".hex input").attr("placeholder", "1A1A1A");
		}
		else if($(".format-labels .active").text() == "HSB"){
			$(".hsb input[name='hue']").attr("placeholder", "0");
			$(".hsb input[name='saturation']").attr("placeholder", "0");
			$(".hsb input[name='brightness']").attr("placeholder", "10");
		}
		else if($(".format-labels .active").text() == "HSL"){
			$(".hsl input[name='hue']").attr("placeholder", "0");
			$(".hsl input[name='saturation']").attr("placeholder", "0");
			$(".hsl input[name='lightness']").attr("placeholder", "10");
		}
		else{
			$(".rgb input[name='red']").attr("placeholder", "26");
			$(".rgb input[name='green']").attr("placeholder", "26");
			$(".rgb input[name='blue']").attr("placeholder", "26");
		}
	}
	else{
		$(".contrast").css("display", "block");
		$(".contrast option").prop("selected", false);
		$(".contrast option[value='1.30']").prop("selected", "selected");
		$(".dropper").val("#808080");
		$(".square").css("background", "#808080");
		$(".colorVis").css("color", "#808080");
	
		if($(".format-labels .active").text() == "HEX"){
			$(".hex input").attr("placeholder", "808080");
		}
		else if($(".format-labels .active").text() == "HSB"){
			$(".hsb input[name='hue']").attr("placeholder", "0");
			$(".hsb input[name='saturation']").attr("placeholder", "0");
			$(".hsb input[name='brightness']").attr("placeholder", "50");
		}
		else if($(".format-labels .active").text() == "HSL"){
			$(".hsl input[name='hue']").attr("placeholder", "0");
			$(".hsl input[name='saturation']").attr("placeholder", "0");
			$(".hsl input[name='lightness']").attr("placeholder", "20");
		}
		else{
			$(".rgb input[name='red']").attr("placeholder", "128");
			$(".rgb input[name='green']").attr("placeholder", "128");
			$(".rgb input[name='blue']").attr("placeholder", "128");
		}
	}
	
	update();
	cvSet();
}

function colorVersion(loc){
	if(loc == "us"){
		setCookie("colorVersion", "us", 30);
		$(".format .panel-label").text("Color Format");
		$(".square-title").text($(".square-title").text().replace("Colour", "Color"));
	}
	else{
		setCookie("colorVersion", "world", 30);
		$(".format .panel-label").text("Colour Format");
		$(".square-title").text($(".square-title").text().replace("Color", "Colour"));
	}
}

function colorVision(){
	var hex = $(".dropper").val().replace("#", "");
	$(".color").removeClass("active");
		
	if(colorFormat == "HEX"){
		$(".hex input").val(hex);
		
		$(".color").each(function(){
			if($(this).data("code") == "#"+hex.toUpperCase()){
				$(this).addClass("active");
			}
		});
	}
	else if(colorFormat == "HSB"){
		hsv = colorcolor("#"+hex, 'hsb').replace("hsb(", "").replace(")", "").replace("deg", "").replace(/%/g, "").split(', '),
		h = Math.round(hsv[0]),
		s = Math.round(hsv[1]),
		v = Math.round(hsv[2]);
		
		$(".hsb input[name='hue']").val(h);
		$(".hsb input[name='saturation']").val(s);
		$(".hsb input[name='brightness']").val(v);
		
		$(".color").each(function(){
			if($(this).data("code") == "hsb("+h+"deg, "+s+"%, "+v+"%)"){
				$(this).addClass("active");
			}
		});
	}
	else if(colorFormat == "HSL"){
		hsl = colorcolor("#"+hex, 'hsl').replace("hsl(", "").replace(")", "").replace("deg", "").replace(/%/g, "").split(', '),
		h = Math.round(hsl[0]),
		s = Math.round(hsl[1]),
		l = Math.round(hsl[2]);
		
		$(".hsl input[name='hue']").val(h);
		$(".hsl input[name='saturation']").val(s);
		$(".hsl input[name='lightness']").val(l);
		
		$(".color").each(function(){
			if($(this).data("code") == "hsl("+h+"deg, "+s+"%, "+l+"%)"){
				$(this).addClass("active");
			}
		});
	}
	else{
		rgb = colorcolor("#"+hex, 'rgb').replace("rgb(", "").replace(")", "").split(', ')
		r = rgb[0],
		g = rgb[1],
		b = rgb[2];
		
		$(".rgb input[name='red']").val(r);
		$(".rgb input[name='green']").val(g);
		$(".rgb input[name='blue']").val(b);
		
		$(".color").each(function(){
			if($(this).data("code") == "rgb("+r+", "+g+", "+b+")"){
				$(this).addClass("active");
			}
		});
	}
	
	$("form").submit();
	
	preview();
}

function cvSet(){
	if($(".mini").hasClass("on") == true){
		if(bezelStyle == "mbz"){
			if($(".info").text() == ""){
				$(".info").css("display", "none");
				$(".color-vision").css("top", "-74px");
			}
			else{
				$(".info").css("display", "block");
				$(".color-vision").css("top", "-94px");
			}
		}
		else{
			if($(".info").text() == ""){
				$(".info").css("display", "none");
				$(".color-vision").css("top", "-128px");
			}
			else{
				$(".info").css("display", "block");
				$(".color-vision").css("top", "-148px");
			}
		}
	}
	else{
		if(bezelStyle == "mbz"){
			if($(".info").text() == ""){
				$(".info").css("display", "none");
				$(".color-vision").css("top", "-58px");
			}
			else{
				$(".info").css("display", "block");
				$(".color-vision").css("top", "-78px");
			}
		}
		else{
			if($(".info").text() == ""){
				$(".info").css("display", "none");
				$(".color-vision").css("top", "-112px");
			}
			else{
				$(".info").css("display", "block");
				$(".color-vision").css("top", "-132px");
			}
		}
	}
}

function copy(id){
	if(id == 1){
		navigator.clipboard.writeText($(".text").text().trim());
	}
	else{
		navigator.clipboard.writeText($(".text-box .tab-pane.active textarea").val().trim());
	}
}

function destroy(){
	$(".preset-title").empty();
	$("textarea").val("").text("");
	$(".nav-item").addClass("empty");
	$("code").empty();
	$(".plyr").remove();
	$("textarea").css("display", "block");
	colorReset();
}

function navHide(){
	if($(".nav-tabs").hasClass("hide")){
		setCookie("dots", "shown", 30);
		$(".nav-tabs").removeClass("hide");
		$(".nav-hide span").text("keyboard_double_arrow_up");
		$(".nav-hide").css("transform", "translateY(-4px)");
	}
	else{
		setCookie("dots", "hidden", 30);
		$(".nav-tabs").addClass("hide");
		$(".nav-hide span").text("keyboard_double_arrow_down");
		$(".nav-hide").css("transform", "translateY(-60px)");
	}
}

function edit(){
	if($(".text").attr("readonly") == "readonly"){
		$(".text").prop("readonly", false);
		$("#edit").addClass("active");
	}
	else{
		$(".text").text($(".text").val());
		$(".text").prop("readonly", true);
		$("#edit").removeClass("active");
	}
}

function extraTab(){
	var tabs = $(".nav-item").length - 1;
	
	if(tabs < 25){
		$(".nav-tabs .plus").before('<li class="nav-item empty" role="presentation"><button class="nav-link" id="tab'+tabs+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+tabs+'" type="button" role="tab" aria-controls="tab-pane'+tabs+'" aria-selected="true">'+tabs+'</button></li>');
	}
}

function formatToggle(value){
	  value = parseInt(value, 10);
	  $(".format-labels span").removeClass("active");
	  $(".hex, .hsb, .hsl, .rgb").remove();
	  $(".error").empty();

	  if (value === 1) {
		$('.format input').removeClass('hsbOn hslOn rgbOn');
		$('.format input').addClass('hexOn');
	  }
	  else if (value === 2) {
		$('.format input').removeClass('hexOn hslOn rgbOn');
		$('.format input').addClass('hsbOn');
	  }
	  else if (value === 3) {
		$('.format input').removeClass('hexOn hsbOn rgbOn');
		$('.format input').addClass('hslOn');
	  }
	  else if (value === 4) {
		$('.format input').removeClass('hexOn hsbOn hslOn');
		$('.format input').addClass('rgbOn');
	  }
	  
	$('.format-labels').find("span:nth-child("+value+")").addClass("active");
	$('.format input').val(value);

	$(".colors").empty();
	
	if(value == 1){
		setCookie("colorFormat", "HEX", 30);
		colorFormat = "HEX";
		$("#colorPop .contrast").after('<div class="hex">HEX: # <input type="text" name="hex" size=6 maxlength=6></div>');
	}
	else if(value == 2){
		setCookie("colorFormat", "HSB", 30);
		colorFormat = "HSB";
		$("#colorPop .contrast").after('<div class="hsb">hsb(<input type="text" name="hue" size=3 maxLength=3>deg, <input type="text" name="saturation" size=3 maxLength=3>%, <input type="text" name="brightness" size=3 maxLength=3>%)</div>');
	}
	else if(value == 3){
		setCookie("colorFormat", "HSL", 30);
		colorFormat = "HSL";
		$("#colorPop .contrast").after('<div class="hsl">hsl(<input type="text" name="hue" size=3 maxLength=3>deg, <input type="text" name="saturation" size=3 maxLength=3>%, <input type="text" name="lightness" size=3 maxLength=3>%)</div>');
	}
	else if(value == 4){
		setCookie("colorFormat", "RGB", 30);
		colorFormat = "RGB";
		$("#colorPop .contrast").after('<div class="rgb">rgb(<input type="text" name="red" size=3 maxLength=3>, <input type="text" name="green" size=3 maxLength=3>, <input type="text" name="blue" size=3 maxLength=3>)</div>');
	}
	
	$(".info").empty();
	$(".error").empty();
	colorReset();
	samples();
}

function hide(){
    $(".mini").toggleClass("hide");
	
	if($(".mini").hasClass("hide")){
		$("#hide").text("keyboard_arrow_up");
	}
	else{
		$("#hide").text("keyboard_arrow_down");
	}
}

function buildToggle(){
	if($(".build input").is(":checked")){
		setCookie("build", "on", 30);
		build = "on";
		$(".build input").prop( "checked", true);
	}
	else{
		setCookie("build", "off", 30);
		build = "off";
		$(".build input").prop( "checked", false );
	}
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
	
	if($(".hex input, .hsb input, .hsl input, .rgb input").val() == ""){
		settingReset();
	}
	else{
		$("form").submit();
	}
}

function layerToggle(imageLayers){
	setCookie("imageLayer", imageLayers, 30);
	imageLayer = imageLayers
	
	if($(".hex input, .hsb input, .hsl input, .rgb input").val() == ""){
		settingReset();
	}
	
	if(bezelStyle == "mbz"){
		switch(imageLayer){
			case "Bezel":
				$(".mbz .layer input").val(1).trigger('input');
				$(".mbz .layer-labels li:nth-child(1)").addClass("active");
				break;
			case "Background":
				$(".mbz .layer input").val(2).trigger('input');
				$(".mbz .layer-labels li:nth-child(2)").addClass("active");
				break;
			case "LED":
				$(".mbz .layer input").val(3).trigger('input');
				$(".mbz .layer-labels li:nth-child(3)").addClass("active");
				break;
			case "Device":
				$(".mbz .layer input").val(4).trigger('input');
				$(".mbz .layer-labels li:nth-child(4)").addClass("active");
				break;
			case "Device LED":
				$(".mbz .layer input").val(5).trigger('input');
				$(".mbz .layer-labels li:nth-child(5)").addClass("active");
				break;
			case "Decal":
				$(".mbz .layer input").val(6).trigger('input');
				$(".mbz .layer-labels li:nth-child(6)").addClass("active");
				break;
			case "Top":
				$(".mbz .layer input").val(7).trigger('input');
				$(".mbz .layer-labels li:nth-child(7)").addClass("active");
				break;
			case "Cab Glass":
				$(".mbz .layer input").val(8).trigger('input');
				$(".mbz .layer-labels li:nth-child(8)").addClass("active");
				break;
			default:
				$(".mbz .layer input").val(1).trigger('input');
				$(".mbz .layer-labels li:nth-child(1)").addClass("active");
		}
	}
	else{
		switch(imageLayer){
			case "Bezel Curved":
				$(".koko-aio .layer input").val(1).trigger('input');
				$(".koko-aio .layer-labels li:nth-child(1)").addClass("active");
				break;
			case "Bezel Straight":
				$(".koko-aio .layer input").val(2).trigger('input');
				$(".koko-aio .layer-labels li:nth-child(2)").addClass("active");
				break;
			case "Background Under":
				$(".koko-aio .layer input").val(3).trigger('input');
				$(".koko-aio .layer-labels li:nth-child(3)").addClass("active");
				break;
			case "Background Over":
				$(".koko-aio .layer input").val(4).trigger('input');
				$(".koko-aio .layer-labels li:nth-child(4)").addClass("active");
				break;
			case "Backdrop":
				$(".koko-aio .layer input").val(5).trigger('input');
				$(".koko-aio .layer-labels li:nth-child(5)").addClass("active");
				break;
		}
	}
}

function passText(){
	var txt = $(".text-box .tab-pane.active textarea").val();
	
	if(txt == ""){
		$(".text-box .tab-pane.active textarea").text($(".text").val()).val($(".text").val());
	}
	else{
		$(".text-box .tab-pane.active textarea").text(txt+"\n"+$(".text").val()).val(txt+"\n"+$(".text").val())
	}
	
	update();
}

function presetCopy(){
	navigator.clipboard.writeText($(".text").text().trim());
}

function preview(){
	var hex = $('.hex input').val(),
	r = parseInt($(".rgb [name='red']").val()),
	b = parseInt($(".rgb [name='blue']").val()),
	g = parseInt($(".rgb [name='green']").val()),
	h = parseInt($(".hsb [name='hue']").val()),
	s = parseInt($(".hsb [name='saturation']").val()),
	v = parseInt($(".hsb [name='brightness']").val());
	h2 = parseInt($(".hsl [name='hue']").val()),
	s2 = parseInt($(".hsl [name='saturation']").val()),
	l = parseInt($(".hsl [name='lightness']").val())
	
	if(colorFormat == "HEX"){
		$(".square").css("background", "#"+hex);
		$(".dropper").val("#"+hex);
		$(".colorVis").css("color", "#"+hex);
		colorMessage(hex);
	}
	else if(colorFormat == "HSB"){
		$(".square").css("background", colorcolor("hsv("+h+", "+s+"%, "+v+"%)", 'hex'));
		$(".dropper").val(colorcolor("hsv("+h+", "+s+"%, "+v+"%)", 'hex'));
		$(".colorVis").css("color", colorcolor("hsv("+h+", "+s+"%, "+v+"%)", 'hex'));
		colorMessage("hsb("+h+"deg, "+s+"%, "+v+"%)");
	}
	else if(colorFormat == "HSL"){
		$(".square").css("background", colorcolor("hsl("+h2+", "+s2+"%, "+l+"%)", 'hex'));
		$(".dropper").val(colorcolor("hsl("+h2+", "+s2+"%, "+l+"%)", 'hex'));
		$(".colorVis").css("color", colorcolor("hsl("+h2+", "+s2+"%, "+l+"%)", 'hex'));
		colorMessage("hsl("+h2+"deg, "+s2+"%, "+l+"%)");
	}
	else{
		$(".square").css("background", "rgb("+r+", "+g+", "+b+")");
		$(".dropper").val(colorcolor("rgb("+r+", "+g+", "+b+")", 'hex'));
		$(".colorVis").css("color", colorcolor("rgb("+r+", "+g+", "+b+")", 'hex'));
		colorMessage("rgb("+r+", "+g+", "+b+")");
	}
}

function refreshVideo(){
	$(".active video").remove();
	$(".active textarea").css("display", "block");
	$(".content").css("transform", "translateX(0px)");
}

function removeTabs(){
	$(".preset-title").empty();
	$(".nav-hide").remove();
	$(".tab-content textarea").text("").val("");
	$(".remove").remove();
	$(".tooltip").remove();
	$(".nav").addClass("empty");
	$(".tab-pane").removeClass("active").removeClass("show");
	$(".text2").parents(".tab-pane").addClass("active").addClass("show");
	$(".nav-link").removeClass("active");
	$("#tab1").addClass("active");
	$(".nav").remove();
}

function samples(){
	sampleColors();
	$(".hex input").val("");
	$(".rgb input").val("");
	
	$(".sample .color").on('click', function(){
		$(".sample .color").removeClass("active");
		
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
			
			$(".dropper").val(colorcolor("hsb("+h+", "+s+"%, "+v+"%)", 'hex'));
		}
		else if(colorFormat == "HSL"){
			sampleHSL = $(this).parents(".colors").siblings(".color-code").text().replace("hsl(", "").replace(")", "").replace("deg", "").replace(/%/g, "").split(', ');
			
			$(".hsl [name='hue']").val(sampleHSL[0]);
			$(".hsl [name='saturation']").val(sampleHSL[1]);
			$(".hsl [name='lightness']").val(sampleHSL[2]);
			
			
			h = parseInt($(".hsl [name='hue']").val()),
			s = parseInt($(".hsl [name='saturation']").val()),
			l = parseInt($(".hsl [name='lightness']").val());
			
			$(".dropper").val(colorcolor("hsl("+h+", "+s+"%, "+l+"%)", 'hex'));
		}
		else{
			sampleRGB = $(this).parents(".colors").siblings(".color-code").text().replace("rgb(", "").replace(")", "").split(', ');
			
			$(".rgb input[name='red']").val(sampleRGB[0]);
			$(".rgb input[name='green']").val(sampleRGB[1]);
			$(".rgb input[name='blue']").val(sampleRGB[2]);
			
			
			r = parseInt($(".rgb [name='red']").val()),
			g = parseInt($(".rgb [name='green']").val()),
			b = parseInt($(".rgb [name='blue']").val());
			
			$(".dropper").val(colorcolor("rgb("+r+", "+g+", "+b+")", 'hex'));
		}
		
		if($("#edit").hasClass("active") == false){
			$("form").submit();
		}
		
		$(this).addClass("active");
		preview();
		
		update();
		cvSet();
	});
	
	$(".sample .color").on('mouseover', function(){
		$(this).parents(".colors").siblings(".color-code").text($(this).data("code"));
	});
	
	if(getCookie("sampleStyle") == "diamond" || getCookie("sampleStyle") == ""){
		$(".sample, .square").addClass("jewel").removeClass("swatch").removeClass("palette");
	}
	else if(getCookie("sampleStyle") == "palette"){
		$(".sample, .square").addClass("palette").removeClass("jewel").removeClass("swatch");
	}
	else{
		$(".sample, .square").addClass("swatch").removeClass("jewel").removeClass("palette");
	}
}

function savePreset(id){
	  if ('Blob' in window) {
		var fileName = prompt('Please enter file name to save', 'Preset.slangp');
		if (fileName) {
		  
			if(id == 1){
				var textToWrite = $('.text').val();
			}
			else{
				var textToWrite = $('.text-box .tab-pane.active textarea').val();
			}
			
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
				$(".text").val(bezel).text(bezel);
				break;
			case "Background":
				$(".text").val(bg).text(bg);
				break;
			case "LED":
				$(".text").val(led).text(led);
				break;
			case "Device":
				$(".text").val(device).text(device);
				break;
			case "DeviceLED":
				$(".text").val(deviceLED).text(deviceLED);
				break;
			case "Decal":
				$(".text").val(decal).text(decal);
				break;
			case "Top":
				$(".text").val(topLayer).text(topLayer);
				break;
			case "Cab Glass":
				$(".text").val(cabGlass).text(cabGlass);
				break;
		}
	}
	else{
		$(".text").text('BEZEL_R = "0.000000"\nBEZEL_G = "0.000000"\nBEZEL_B = "0.000000"\nBEZEL_CON = "1.300000"').val('BEZEL_R = "0.000000"\nBEZEL_G = "0.000000"\nBEZEL_B = "0.000000"\nBEZEL_CON = "1.300000"');	
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
	
	if(getCookie("build") == ""){
		build = "off";
	}
	else{
		build = getCookie("build");
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
	
	if(getCookie("dots") == ""){
		dots = "shown";
	}
	else{
		dots = getCookie("dots");
	}
	
	if(getCookie("power") == ""){
		power = "off";
	}
	else{
		power = getCookie("power");
	}
	
	if(colorFormat == "HEX"){
		formatToggle(1);
	}
	else if(colorFormat == "HSB"){
		formatToggle(2);
	}
	else if(colorFormat == "HSL"){
		formatToggle(3);
	}
	else{
		formatToggle(4);
	}
	
	if(bezelStyle == "mbz"){
		$(".switch-panel .bezel input").attr("checked", "checked");
		$(".bezel .switch-label:nth-child(3)").addClass("active");
		layerToggle(imageLayer);
		$(".mbz.layers-wrap").css("display", "inline-block");
		$(".koko-aio.layers-wrap").css("display", "none");
		$(".imageType").removeClass("disabled");
		$(".imageType input").prop("disabled", false);
	}
	else{
		$(".bezel .switch-label:nth-child(1)").addClass("active");
		$(".imageType").addClass("disabled");
		$(".mbz.layers-wrap").css("display", "none");
		$(".koko-aio.layers-wrap").css("display", "inline-block");
		layerToggle(imageLayer);
		$(".imageType input").prop("disabled", true);
	}
	
	if(build == "on"){
		$(".build input").attr("checked", "checked");
		$(".build .switch-label:nth-child(3)").addClass("active");
	}
	else{
		$(".build .switch-label:nth-child(1)").addClass("active");
	}
	
	if(imageType == "yellow"){
		$(".switch-panel .imageType input").attr("checked", "checked");
		$(".imageType .switch-label:nth-child(3)").addClass("active");
	}
	else{
		$(".imageType .switch-label:nth-child(1)").addClass("active");
	}
	
	if(power == "on"){
		$(".power, .text1, .text-box, .mini").addClass('on');
		$("code").css("display", "none");
	}
	
	colorReset();
	colorVersion(colorVer);
	updateCode();
}

function update(){
	if(build == "on"){
		var textBox = $(".active textarea").attr("class").replace("text", "");
	}
	else{
		var textBox = "1";
	}
	
	switch(textBox){
		case "2":
			updateCode2();
			break;
		case "3":
			updateCode3();
			break;
		case "4":
			updateCode4();
			break;
		case "5":
			updateCode5();
			break;
		case "6":
			updateCode6();
			break;
		case "7":
			updateCode7();
			break;
		case "8":
			updateCode8();
			break;
		case "9":
			updateCode9();
			break;
		case "10":
			updateCode10();
			break;
		case "11":
			updateCode11();
			break;
		case "12":
			updateCode12();
			break;
		case "13":
			updateCode13();
			break;
		case "14":
			updateCode14();
			break;
		case "15":
			updateCode15();
			break;
		case "16":
			updateCode16();
			break;
		case "17":
			updateCode17();
			break;
		case "18":
			updateCode18();
			break;
		case "19":
			updateCode19();
			break;
		case "20":
			updateCode20();
			break;
		case "21":
			updateCode21();
			break;
		case "22":
			updateCode22();
			break;
		case "23":
			updateCode23();
			break;
		case "24":
			updateCode24();
			break;
		case "25":
			updateCode25();
			break;
		default:
			updateCode();
	}
}

$(".brightness").on('click', function(){
	brightness();
	
	$(this).blur();
});

$("#colorPop .submit").on('click', function(){
	$('form').submit();
});

$(".colorVis").on('click', function(){
	$(this).blur();
});

$(".destroy").on('click', function(){
	destroy();
	
	$(this).blur();
});

$(".dropper").on('change', function(){
	colorVision();
});

$(".build input").on('click', function(){
	buildToggle();
});

$(".build .switch-label").on('click', function(){
	if($(this).hasClass("active") == false){
		if($(".build input").is(":checked")){
			$(".build input").prop('checked', false);
		}
		else{
			$(".build input").prop('checked', true);
			
		}
		
		$(".build .switch-label").removeClass("active");
		
		buildToggle();
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

$(".pass").on('click', function(){
	passText();
	$(this).blur();
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
	else if($(this).text() == "HSL"){
		formatToggle(3);
	}
	else if($(this).text() == "RGB"){
		formatToggle(4);
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

$(".active textarea").dblclick(function(){
	$('#load2 input[type="file"]').click();
});

$(".mini textarea").dblclick(function(){
	$('#load input[type="file"]').click();
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
	$('[data-bs-toggle="tooltip"]').tooltip();

	$('.image input[type="file"]').change(function (e) {
		const geekss = e.target.files[0].name;
		
		if(build == "on"){
			var settings = $(".active textarea").val();
			
			if(bezelStyle == "mbz"){
				switch($(".mbz .layer input").val()){
					case "2":
						$(".active textarea").val(settings+'BackgroundImage = "pathtofile\\'+geekss+'"\n').text(settings+'BackgroundImage = "pathtofile\\'+geekss+'"\n');
						break;
					case "3":
						$(".active textarea").val(settings+'LEDImage = "pathtofile\\'+geekss+'"\n').text(settings+'LEDImage = "pathtofile\\'+geekss+'"\n');
						break;
					case "4":
						$(".active textarea").val(settings+'DeviceImage = "pathtofile\\'+geekss+'"\n').text(settings+'DeviceImage = "pathtofile\\'+geekss+'"\n');
						break;
					case "5":
						$(".active textarea").val(settings+'DeviceLEDImage = "pathtofile\\'+geekss+'"\n').text(settings+'DeviceLEDImage = "pathtofile\\'+geekss+'"\n');
						break;
					case "6":
						$(".active textarea").val(settings+'DecalImage = "pathtofile\\'+geekss+'"\n').text(settings+'DecalImage = "pathtofile\\'+geekss+'"\n');
						break;
					case "7":
						$(".active textarea").val(settings+'TopLayerImage = "pathtofile\\'+geekss+'"\n').text(settings+'TopLayerImage = "pathtofile\\'+geekss+'"\n');
						break;
					case "8":
						$(".active textarea").val(settings+'CabinetGlassImage = "pathtofile\\'+geekss+'"\n').text(settings+'CabinetGlassImage = "pathtofile\\'+geekss+'"\n');
						break;
				}
			}
			else{
				switch($(".koko-aio .layer input").val()){
					case "1":
						$(".active textarea").val(settings+'monitor_body_curved = "pathtofile\\'+geekss+'"\n').text(settings+'monitor_body_curved = "pathtofile\\'+geekss+'"\n');
						break;
					case "2":
						$(".active textarea").val(settings+'monitor_body_straight = "pathtofile\\'+geekss+'"\n').text(settings+'monitor_body_straight = "pathtofile\\'+geekss+'"\n');
						break;
					case "3":
						$(".active textarea").val(settings+'bg_under = "pathtofile\\'+geekss+'"\n').text(settings+'bg_under = "pathtofile\\'+geekss+'"\n');
						break;
					case "4":
						$(".active textarea").val(settings+'bg_over = "pathtofile\\'+geekss+'"\n').text(settings+'bg_over = "pathtofile\\'+geekss+'"\n');
						break;
					case "5":
						$(".active textarea").val(settings+'backdrop = "pathtofile\\'+geekss+'"\n').text(settings+'backdrop = "pathtofile\\'+geekss+'"\n');
						break;
				}
			}
		}
		else{
			if(bezelStyle == "mbz"){
				switch($(".mbz .layer input").val()){
					case "2":
						$(".text").val('BackgroundImage = "pathtofile\\'+geekss+'"\n').text('BackgroundImage = "pathtofile\\'+geekss+'"\n');
						break;
					case "3":
						$(".text").val('LEDImage = "pathtofile\\'+geekss+'"\n').text('LEDImage = "pathtofile\\'+geekss+'"\n');
						break;
					case "4":
						$(".text").val('DeviceImage = "pathtofile\\'+geekss+'"\n').text('DeviceImage = "pathtofile\\'+geekss+'"\n');
						break;
					case "5":
						$(".text").val('DeviceLEDImage = "pathtofile\\'+geekss+'"\n').text('DeviceLEDImage = "pathtofile\\'+geekss+'"\n');
						break;
					case "6":
						$(".text").val('DecalImage = "pathtofile\\'+geekss+'"\n').text('DecalImage = "pathtofile\\'+geekss+'"\n');
						break;
					case "7":
						$(".text").val('TopLayerImage = "pathtofile\\'+geekss+'"\n').text('TopLayerImage = "pathtofile\\'+geekss+'"\n');
						break;
					case "8":
						$(".text").val('CabinetGlassImage = "pathtofile\\'+geekss+'"\n').text('CabinetGlassImage = "pathtofile\\'+geekss+'"\n');
						break;
				}
			}
			else{
				switch($(".koko-aio .layer input").val()){
					case "1":
						$(".text").val('monitor_body_curved = "pathtofile\\'+geekss+'"\n').text('monitor_body_curved = "pathtofile\\'+geekss+'"\n');
						break;
					case "2":
						$(".text").val('monitor_body_straight = "pathtofile\\'+geekss+'"\n').text('monitor_body_straight = "pathtofile\\'+geekss+'"\n');
						break;
					case "3":
						$(".text").val('bg_under = "pathtofile\\'+geekss+'"\n').text('bg_under = "pathtofile\\'+geekss+'"\n');
						break;
					case "4":
						$(".text").val('bg_over = "pathtofile\\'+geekss+'"\n').text('bg_over = "pathtofile\\'+geekss+'"\n');
						break;
					case "5":
						$("text").val('backdrop = "pathtofile\\'+geekss+'"\n').text('backdrop = "pathtofile\\'+geekss+'"\n');
						break;
				}
			}
		}
		
		$('.image input[type="file"]').val("");
		$(this).blur();
	});
	
	$('.modal-link').on('click', function(){
		$('#exampleModal').modal('show').find('.modal-content').load($(this).data('link'));
	});
	
	$('.power').click(function(e){
		if($(this).hasClass('on')){
			e1 = $('.active textarea, .mini textarea');
			e1.addClass('turn-off');
			$(".screen-container").addClass("turning-off");
			e1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
			function (e) {
				e1.removeClass('turn-off');
				$(".screen-container").removeClass("turning-off");
				
				setCookie("power", "off", 30);
				$(".text1, .text-box, .mini").removeClass('on');
				$("code").css("display", "block");
			});
			
			$(this).removeClass('on');
			refreshVideo();
		}
		else{
			setCookie("power", "on", 30);
			$(this).addClass('on');
			$(".text1, .text-box, .mini").addClass('on');
			$("code").css("display", "none");
			
			e1 = $('.active textarea, .mini textarea');
			e1.addClass('turn-on');
			e1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
			function (e) {
				e1.removeClass('turn-on');
			});
		}
		
		cvSet();
	});
	
	$('.shader input[type="file"]').change(function (e) {
		if(build == "on"){
			const shader = $(".active textarea").val()+'#reference "pathtofile\\'+e.target.files[0].name+'"\n';
			$(".active textarea").val(shader).text(shader);
		}
		else{
			const shader = '#reference "pathtofile\\'+e.target.files[0].name+'"\n';
			$(".text").val(shader).text(shader);
		}
			
		$('.shader input[type="file"]').val("");
		$(this).blur();
	});
	
	$('input[type="file"]').change(function(){
		update();
	});
	
	$("form").submit(function (event) {
		$(".info, .error").empty();
		$(".color").removeClass("active");
		hexError = hslError = hsvError = rgbError = "false";
		$(".colorVis").blur();
		
		if(colorFormat == "HEX"){
			var hex = $(".hex input").val().toUpperCase();
		
			if(/^[0-9A-F]{6}$/i.test(hex) == false){
				hexError = "true";
			}
			else{
				hexError = "false";
			
				rgb = colorcolor("#"+hex, 'rgb').replace("rgb(", "").replace(")", "").split(', ')
				r = rgb[0],
				g = rgb[1],
				b = rgb[2];
			
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
					mbzHSB = colorcolor("#"+hex, 'hsb');
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
			
			$(".color").each(function(){
				if($(this).data("code") == "#"+hex){
					$(this).addClass("active");
				}
			});
			
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
				
				rgb = colorcolor("hsv("+h+", "+s+"%, "+v+"%)", 'rgb').replace("rgb(", "").replace(")", "").split(', ')
				r = rgb[0],
				g = rgb[1],
				b = rgb[2];
				
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
					mbzHSB = "hsb("+h+", "+s+"%, "+v+"%)";
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
			
			$(".color").each(function(){
				if($(this).data("code") == "hsb("+h+"deg, "+s+"%, "+v+"%)"){
					$(this).addClass("active");
				}
			});
			
			$(".contrast input, .hsb input").blur();
		}
		else if(colorFormat == "HSL"){
			var h = parseInt($(".hsl [name='hue']").val()),
				s = parseInt($(".hsl [name='saturation']").val()),
				l = parseInt($(".hsl [name='lightness']").val());
			
			if(h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100){
				hslError = "true";
			}
			else if(Number.isInteger(h) == false || Number.isInteger(s) == false || Number.isInteger(l) == false){
				hslError = "true";
			}
			else{
				hslError = "false";
				
				rgb = colorcolor("hsl("+h+", "+s+"%, "+l+"%)", 'rgb').replace("rgb(", "").replace(")", "").split(', ')
				r = rgb[0],
				g = rgb[1],
				b = rgb[2];
				
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
					mbzHSB = colorcolor("hsl("+h+", "+s+"%, "+l+"%)", 'hsb');
				}
				
				$("#copy").prop("disabled", false);
				colorMessage("hsl("+h+"deg, "+s+"%, "+l+"%)");
			}
			
			if(hsvError == "true"){
				$(".error").text("HSL is in format 0-360deg, 0-100%, 0-100%");
				$(".info").empty();
			}
			else{
				$(".error").empty();
			}
			
			$(".color").each(function(){
				if($(this).data("code") == "hsl("+h+", "+s+"%, "+l+"%)"){
					$(this).addClass("active");
				}
			});
			
			$(".contrast input, .hsl input").blur();
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
					mbzHSB = colorcolor("rgb("+r+", "+g+", "+b+")", 'hsb');
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
			
			$(".color").each(function(){
				if($(this).data("code") == "rgb("+r+", "+g+", "+b+")"){
					$(this).addClass("active");
				}
			});
			
			$(".contrast input, .rgb input").blur();
		}
		
		$(".text").val();
		
		if(hexError == "false" && hslError == "false" && hsvError == "false" && rgbError == "false"){
		
			if(bezelStyle == "mbz"){
				preview();
				
				mbzHSB = mbzHSB.replace("hsb(", "").replace(")", "").replace(/%/g, "").split(', ')
				
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
				
				if(build == "off"){
					switch($(".layer input").val()){
						case "1":
							$(".text").val(bezel).text(bezel);
							break;
						case "2":
							$(".text").val(bg).text(bg);
							break;
						case "3":
							$(".text").val(led).text(led);
							break;
						case "4":
							$(".text").val(device).text(device);
							break;
						case "5":
							$(".text").val(deviceLED).text(deviceLED);
							break;
						case "6":
							$(".text").val(decal).text(decal);
							break;
						case "7":
							$(".text").val(topLayer).text(topLayer);
							break;
						case "8":
							$(".text").val(cabGlass).text(cabGlass);
							break;
					}
				}
				else{
					switch($(".layer input").val()){
						case "1":
							$(".active textarea").val($(".active textarea").val()+bezel).text($(".active textarea").val()+bezel);
							break;
						case "2":
							$(".active textarea").val($(".active textarea").val()+bg).text($(".active textarea").val()+bg);
							break;
						case "3":
							$(".active textarea").val($(".active textarea").val()+led).text($(".active textarea").val()+led);
							break;
						case "4":
							$(".active textarea").val($(".active textarea").val()+device).text($(".active textarea").val()+device);
							break;
						case "5":
							$(".active textarea").val($(".active textarea").val()+deviceLED).text($(".active textarea").val()+deviceLED);
							break;
						case "6":
							$(".active textarea").val($(".active textarea").val()+decal).text($(".active textarea").val()+decal);
							break;
						case "7":
							$(".active textarea").val($(".active textarea").val()+topLayer).text($(".active textarea").val()+topLayer);
							break;
						case "8":
							$(".active textarea").val($(".active textarea").val()+cabGlass).text($(".active textarea").val()+cabGlass);
							break;
					}
				}
			}
			
			else if(bezelStyle == "koko-aio"){
				preview();
				
				var preset = 'BEZEL_R = "'+rSetting+'"\nBEZEL_G = "'+gSetting+'"\nBEZEL_B = "'+bSetting+'"\nBEZEL_CON = "'+contrastSetting+'"\n';
				
				if(build == "on"){
					$(".active textarea").val($(".active textarea").val()+preset).text($(".active textarea").val()+preset);
				}
				else{
					$(".text").val(preset).text(preset);
				}
				
				
			}
		}
		update();
		event.preventDefault();
		
		if($(".mini").hasClass("hide") && build == "off"){
			hide();
		}
	});
	
	start();
	
	var c = 0;
	
	$(document).on('keydown', function(e){
		key = e.key;
		
		if (key == "Enter") {
			$('form').submit();
		}
		
		if(e.altKey && key === "Delete"){
			e.preventDefault;
			$(".mini .plyr").remove();
			$(".mini textarea").css("display", "block");
		}
		
		if(e.ctrlKey && key === "Delete"){
			e.preventDefault;
			$(".active .plyr").remove();
			$(".nav-link.active").parents(".nav-item").addClass("empty");
			$(".active textarea").css("display", "block");
		}
		
		if(e.altKey && c == 0){
			modalVar = "alt";
			c++;
		}
		else if(e.altKey && c == 1){
			modalVar = "standard";
			c--;
		};
		
		if(key == "F2"){
			if($(".text").is(":focus")){
				savePreset(1);
			}
			else{
				savePreset(2);
			}
		}
		
		if(key == "F4"){
			if($(".text").is(":focus")){
				$('#load input[type="file"]').click();
			}
			else{
				$('#load2 input[type="file"]').click();
			}
		}
		
		$('.modal-link').on('click', function(){
			if(modalVar == "alt"){
				$('#exampleModal').modal('show').find('.modal-content').load($(this).data('link').replace(".html", "")+"_alt.html");
			}
			else{
				$('#exampleModal').modal('show').find('.modal-content').load($(this).data('link'));
			}
		});
		
		if($(".nav").children().length > 1){
			var id = parseInt($(".nav-link.active").attr("id").replace("tab", ""));
			
			switch(key){
				case "PageDown":
					e.preventDefault();
					if(id > 1){
						$("#tab"+id).removeClass("active");
						$("#tab-pane"+id).removeClass("active").removeClass("show");
						$("#tab"+(id-1)).addClass("active");
						$("#tab-pane"+(id-1)).addClass("active").addClass("show");
					}
					break;
				case "PageUp":
					e.preventDefault();
					if(id+2 < $(".nav").children().length){
						$("#tab"+id).removeClass("active");
						$("#tab-pane"+id).removeClass("active").removeClass("show");
						$("#tab"+(id+1)).addClass("active");
						$("#tab-pane"+(id+1)).addClass("active").addClass("show");
					}
					break;
			}
		}
	});
});
