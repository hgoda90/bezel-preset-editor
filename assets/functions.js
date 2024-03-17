function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/bezel-preset-editor";
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
		layerToggle(mbzLayer);
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
		layerToggle(kokoLayer);
		$(".bezel .switch-label:nth-child(1)").addClass("active");
		$(".imageType").addClass("disabled");
		$(".imageType input").prop("disabled", true);
		$(".mbz.layers-wrap").css("display", "none");
		$(".koko-aio.layers-wrap").css("display", "inline-block");
	}
	
	$(".info").empty();
	clearText(1);
	colorReset();
};

function brightness(){
	if($(".text-box").hasClass("on") && $(".text-box").hasClass("amber") && $(".text-box").hasClass("wide") == 0){
		$(".mini, .text-box").addClass("green");
		$(".mini, .text-box").removeClass("bw");
		$(".mini, .text-box").removeClass("amber");
	}
	else if($(".text-box").hasClass("on") && $(".text-box").hasClass("green") && $(".text-box").hasClass("wide") == 0){
		$(".mini, .text-box").addClass("amber");
		$(".mini, .text-box").removeClass("bw");
		$(".mini, .text-box").removeClass("green");
	}
	else if($(".text-box").hasClass("on") && $(".text-box").hasClass("bw")){
		$(".mini, .text-box").removeClass("amber");
		$(".mini, .text-box").removeClass("bw");
		$(".mini, .text-box").removeClass("green");
	}
	else if($(".text-box").hasClass("on")){
		$(".mini, .text-box").addClass("bw");
		$(".mini, .text-box").removeClass("amber");
		$(".mini, .text-box").removeClass("green");
	}
	else if($("#highlight").data("theme") == "dark"){
		$("#highlight").attr("href", "assets/highlight/styles/a11y-light.css");
		$("#highlight").data("theme", "light");
	}
	else if($("#highlight").data("theme") == "light"){
		$("#highlight").attr("href", "assets/highlight/styles/a11y-dark.css");
		$("#highlight").data("theme", "dark");
	}
	
	if($(".mini, .text-box").hasClass("amber")){
		setCookie("monochrome", "amber", 30);
	}
	else if($(".mini, .text-box").hasClass("bw")){
		setCookie("monochrome", "bw", 30);
	}
	else if($(".mini, .text-box").hasClass("green")){
		setCookie("monochrome", "green", 30);
	}
	else{
		setCookie("monochrome", "off", 30);
	}
}

function clearText(id){
	if(id == 1){
		$(".text").text("").val("");
		$("#codeBlock1, .info").empty();
		URL.revokeObjectURL($(".mini .plyr source").attr("src"));
		$(".mini .plyr").remove();
		$(".mini textarea").css("display", "block");
		colorReset;
	}
	else{
		$(".text-box .tab-pane.active textarea").text("").val("");
		$(".tab-pane.active code").empty();
		$(".nav-link.active").addClass("empty");
		$(".nav-link.active").removeClass("yt").removeClass("vid");
		$(".text-box .tab-pane.active .preset-title").empty();
		URL.revokeObjectURL($(".tab-pane.active .plyr source").attr("src"));
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
	
	updateMini();
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

function deleteTab(){
	var tab = parseInt($(".tab-pane.active").attr("id").replace("tab-pane", ""));
	
	$("#tab-pane"+tab).remove();
	$("#tab"+tab).parent().remove();
	
	if(tab-1 == $(".nav-stage").children().length){
		$("#tab-pane"+(tab-1)).addClass("active show");
		$("#tab"+(tab-1)).addClass("active");
		
		$(".tab-pane.active .preset-title").attr("id", "preset"+(tab-1));
		$(".tab-pane.active .screen-container").attr("id", "dropText"+tab);
		$(".tab-pane.active code").attr("id", "codeBlock"+tab);
		$(".tab-pane.active textarea").removeClass("text"+(tab+1)).addClass("text"+tab);
		$(".tab-pane.active .overlay").text("VGA"+(tab-1));
		$(".tab-pane.active").attr("id", "tab-pane"+(tab-1)).attr("aria-labelledby", "tab"+(tab-1));
		
		$(".nav-link.active").attr("id", "tab"+(tab-1));
		$(".nav-link.active").attr("data-bs-target", "#tab-pane"+(tab-1));
		$(".nav-link.active").attr("aria-controls", "tab-pane"+(tab-1));
		$(".nav-link.active").text(tab-1);
		$(".nav-link.active").append('<span class="close"></span>');
	}
	else{
		$("#tab-pane"+(tab+1)).addClass("active show");
		$("#tab"+(tab+1)).addClass("active");
		
		$(".tab-pane.active .preset-title").attr("id", "preset"+tab);
		$(".tab-pane.active .screen-container").attr("id", "dropText"+(tab+1));
		$(".tab-pane.active code").attr("id", "codeBlock"+(tab+1));
		$(".tab-pane.active textarea").removeClass("text"+(tab+2)).addClass("text"+(tab+1));
		$(".tab-pane.active .overlay").text("VGA"+tab);
		$(".tab-pane.active").attr("id", "tab-pane"+tab).attr("aria-labelledby", "tab"+tab);
		
		$(".nav-link.active").attr("id", "tab"+tab);
		$(".nav-link.active").attr("data-bs-target", "#tab-pane"+tab);
		$(".nav-link.active").attr("aria-controls", "tab-pane"+tab);
		$(".nav-link.active").text(tab);
		$(".nav-link.active").append('<span class="close"></span>');
	}
	
	$(".tab-pane.active").nextAll().each(function(){
		if(tab-1 == $(".nav-stage").children().length){
			tp = parseInt($(this).attr("id").replace("tab-pane", "")) - 2;
		}
		else{
			tp = parseInt($(this).attr("id").replace("tab-pane", "")) - 1;
		}
		
		$(this).find(".preset-title").attr("id", "preset"+tp);
		$(this).find(".screen-container").attr("id", "dropText"+(tp+1));
		$(this).find("code").attr("id", "codeBlock"+(tp+1));
		$(this).find("textarea").removeClass("text"+(tp+2)).addClass("text"+(tp+1));
		$(this).find(".overlay").text("VGA"+tp);
		$(this).attr("id", "tab-pane"+tp).attr("aria-labelledby", "tab"+tp);
	});
	
	$(".nav-link.active").parent().nextAll().each(function(){
		if(tab-1 == $(".nav-stage").children().length){
			tb = parseInt($(this).children(".nav-link").attr("id").replace("tab", "")) - 3;
		}
		else{
			tb = parseInt($(this).children(".nav-link").attr("id").replace("tab", "")) - 1;
		}
		
		$(this).find(".nav-link").attr("id", "tab"+tb);
		$(this).find(".nav-link").attr("data-bs-target", "#tab-pane"+tb);
		$(this).find(".nav-link").attr("aria-controls", "tab-pane"+tb);
		$(this).find(".nav-link").text(tb);
		$(this).find(".nav-link").append('<span class="close"></span>');
	});
	
	if($(".nav-stage").children().length == 1){
		$(".nav").remove();
		$(".nav-hide").remove();
	}
	
	if($(".nav-stage").children().length < 25){
		$(".less.nav-item, .more.nav-item").remove();
		$(".nav-stage").css("transform", "translateX(0px)");
	}
	else if($(".nav-stage").children().length > 24 && tab > 24 && ($(".nav-stage").children().length - tab) == 1){
		$(".nav-stage").css("transform", "translateX("+((tab - 24) * -39)+"px)");
	}
	else if(($(".nav-stage").children().length - tab) < 24){
		$(".nav-stage").css("transform", "translateX("+(($(".nav-stage").children().length - 24) * -39)+"px)");
		$(".more.nav-item").css("display", "none");
	}
}

function destroy(){
	$(".preset-title").empty();
	$("textarea").val("").text("");
	$(".nav-item:not(.plus):not(.remove) .nav-link").removeClass("vid").removeClass("yt");
	$(".nav-item:not(.plus):not(.remove) .nav-link").addClass("empty");
	$("code").empty();
	$(".plyr").remove();
	$("textarea").css("display", "block");
	colorReset();
}

function navHide(){
	if($(".nav-tabs").hasClass("hide")){
		setCookie("tabs", "shown", 30);
		$(".nav-tabs").removeClass("hide");
		$(".nav-hide span").text("keyboard_double_arrow_up");
		$(".nav-hide").css("transform", "translateY(2px)");
	}
	else{
		setCookie("tabs", "hidden", 30);
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
	var tabs = $(".nav-stage").children().length;
	
	if(tabs < 100 && tabs > 1){
		$(".nav-tabs .nav-stage").append('<li class="nav-item" role="presentation"><button class="nav-link empty" id="tab'+(tabs+1)+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+(tabs+1)+'" type="button" role="tab" aria-controls="tab-pane'+(tabs+1)+'" aria-selected="true">'+(tabs+1)+'<span class="close"></span></button></li>');
		$(".tab-content").append('<div class="tab-pane fade" id="tab-pane'+(tabs+1)+'" role="tabpanel" aria-labelledby="tab'+(tabs+1)+'" tabindex="0"><span class="preset-title" id="preset'+(tabs+1)+'"></span><div class="screen-container" id="dropText'+(tabs+2)+'"><pre id="preCode"><code id="codeBlock'+(tabs+2)+'" class="language-csharp"></code></pre><textarea class="text'+(tabs+2)+' screen" rows="7" cols="36" placeholder="Drag & Drop preset file... "></textarea><div class="overlay">VGA '+(tabs+1)+'</div></div></div>');
	}
	
	if(tabs == 0){
		$(".text-wrap").append('<ul class="nav nav-tabs" id="myTab" role="tablist"><div class="nav-slide"><div class="nav-stage" style="transform:translateX(0px);"></div></div></ul>');
		
		$(".nav-tabs .nav-stage").append('<li class="nav-item" role="presentation"><button class="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#tab-pane1" type="button" role="tab" aria-controls="tab-pane1" aria-selected="true">1<span class="close"></span></button></li>');
		$(".nav-tabs .nav-stage").append('<li class="nav-item" role="presentation"><button class="nav-link empty" id="tab2" data-bs-toggle="tab" data-bs-target="#tab-pane1" type="button" role="tab" aria-controls="tab-pane1" aria-selected="true">2<span class="close"></span></button></li>');
		$(".tab-content").append('<div class="tab-pane fade" id="tab-pane2" role="tabpanel" aria-labelledby="tab2" tabindex="0"><span class="preset-title" id="preset2"></span><div class="screen-container" id="dropText3"><pre id="preCode"><code id="codeBlock3" class="language-csharp"></code></pre><textarea class="text3 screen" rows="7" cols="36" placeholder="Drag & Drop preset file... "></textarea><div class="overlay">VGA 2</div></div></div>');
		
		$(".nav-tabs").append('<div class="plus nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Plus 1" role="presentation"><span class="material-symbols-outlined nav-link" aria-selected="false" tabindex="-1" role="tab">exposure_plus_1</span></div>');
		$(".nav-tabs").append('<div class="remove nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Remove Tabs"><span class="material-symbols-outlined nav-link">close_small</span></div>');
		
		const tooltip = new bootstrap.Tooltip($('.plus'));
		const tooltip2 = new bootstrap.Tooltip($('.remove'));
		
		$(".remove").on('click', function(){
			removeTabs();
		});
		
		if($(".nav-hide").length == 0){
			$(".text-wrap .text-box:nth-child(2)").append('<div class="nav-hide"><span class="material-symbols-outlined">keyboard_double_arrow_up</span></div>');
			
			$(".nav-hide").on('click', function(){
				navHide();
			});
			
			if(tabs == "hidden"){
				$(".nav-tabs").addClass("hide");
				$(".nav-hide span").text("keyboard_double_arrow_down");
				$(".nav-hide").css("transform", "translateY(-60px)");
			}
			else{
				$(".nav-tabs").removeClass("hide");
				$(".nav-hide span").text("keyboard_double_arrow_up");
				$(".nav-hide").css("transform", "translateY(2px)");
			}
		}
		
		if($(".tab-pane.active textarea").val() == "" && $(".tab-pane.active .plyr").length == 0){
			$("#tab1").addClass("empty");
		}
		else if($(".tab-pane.active .plyr.yt").length == 1){
			$("#tab1").addClass("yt");
		}
		else if($(".tab-pane.active .plyr").length == 1){
			$("#tab1").addClass("vid");
		}
	}
	
	if(tabs == 24){
		$(".nav-tabs").prepend('<div class="less nav-item" style="display: none;"><span>...</span></div>');
		$(".nav-tabs .plus").before('<div class="more nav-item" style="display: table-cell;"><span>...</span></div>');
		
		$(".less.nav-item").on('click', function(){
			prevTab();
		});
		
		$(".more.nav-item").on('click', function(){
			nextTab();
		});
	}
	
	if(tabs > 24){
		$(".more.nav-item").css("display", "table-cell");
	}
	
	if(power == "on"){
		$(".tab-pane code").each(function(){
			$(this).css("display", "none");
		});
	}
}

function formatToggle(value){
	  value = parseInt(value, 10);
	  $(".format-labels span").removeClass("active");
	  $(".hex, .hsb, .hsl, .rgb").remove();

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
	colorReset();
	samples();
}

function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
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
	if(bezelStyle == "mbz"){
		setCookie("mbzLayer", imageLayers, 30);
	}
	else{
		setCookie("kokoLayer", imageLayers, 30);
	}
	
	if($(".hex input, .hsb input, .hsl input, .rgb input").val() == ""){
		settingReset();
	}
	
	if(bezelStyle == "mbz"){
		switch(imageLayers){
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
		switch(imageLayers){
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
	
	updateCode();
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

function removeTabs(){
	$( ".tab-pane .plyr" ).each(function() {
		URL.revokeObjectURL($(this).children('source').attr('src'));
	});
	
	$(".preset-title, .tab-pane code").empty();
	$(".tab-content textarea").text("").val("");
	$(".remove, .tooltip, .nav, .nav-hide, .tab-pane .plyr").remove();
	$(".tab-pane").removeClass("active").removeClass("show");
	$(".text2").parents(".tab-pane").addClass("active").addClass("show");
	$(".text2").css("display", "block");
	$(".nav-link").removeClass("active");
	$("#tab1").addClass("active");
	$(".tab-pane .plyr").remove();
	
	$(".tab-pane:not(.active)").each(function(){
		$(this).remove();
	})
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
		
		updateMini();
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
		
		switch(mbzLayer){
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
	
	if(getCookie("mbzLayer") == ""){
		mbzLayer = "Bezel";
	}
	else{
		mbzLayer = getCookie("mbzLayer");
	}
	
	if(getCookie("kokoLayer") == ""){
		kokoLayer = "Bezel Curved";
	}
	else{
		kokoLayer = getCookie("kokoLayer");
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
	
	if(getCookie("tabs") == ""){
		tabs = "shown";
	}
	else{
		tabs = getCookie("tabs");
	}
	
	if(getCookie("monochrome") == ""){
		monochrome = "green";
		$(".monochrome .rocker input").attr("checked", "checked");
	}
	else{
		monochrome = getCookie("monochrome");
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
		layerToggle(mbzLayer);
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
		layerToggle(kokoLayer);
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
	
	if(monochrome != "off"){
		$(".mini, .text-box").addClass(monochrome);
	}
	
	if(monochrome == "amber" || monochrome == "green"){
		$(".monochrome .rocker input").attr("checked", "checked");
	}
	
	if(power == "on"){
		$(".power, .text1, .text-box, .mini").addClass('on');
		$("code").css("display", "none");
	}
	
	colorReset();
	colorVersion(colorVer);
	updateCode();
	$(document).on("drop", ".tab-pane.active .screen-container", function(e) {
	  dropTab(e);
	});
	
	$(document).on("input", ".tab-pane.active", function() {
		updateCode2(parseInt($(".tab-pane.active").attr("id").replace("tab-pane", "")) + 1);
	});
	
	$(document).on("click", ".nav-link.active .close", function(){
		deleteTab();
	});
}

$(".aspect").on('click', function(){
	$(".content .text-box, .mini").toggleClass("wide");
	
	if($(".mini, .text-box").hasClass("wide")){
		$(".mini, .text-box").removeClass("amber");
		$(".mini, .text-box").removeClass("bw");
		$(".mini, .text-box").removeClass("green");
	}
	else if($(".monochrome .rocker input").is(":checked")){
		$(".mini, .text-box").addClass("green");
		$(".mini, .text-box").removeClass("amber");
		$(".mini, .text-box").removeClass("bw");
	}
	
	if($(".mini, .text-box").hasClass("amber")){
		setCookie("monochrome", "amber", 30);
	}
	else if($(".mini, .text-box").hasClass("bw")){
		setCookie("monochrome", "bw", 30);
	}
	else if($(".mini, .text-box").hasClass("green")){
		setCookie("monochrome", "green", 30);
	}
	else{
		setCookie("monochrome", "off", 30);
	}
	
	$(this).blur();
});

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

$(".dropper").on('change', colorVision);

$(".build input").on('click', buildToggle);

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

$(".switch-panel .bezel input").on('click', bezelToggle);

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
		const img = e.target.files[0].name;
		
		if(build == "on"){
			var settings = $(".active textarea").val();
			
			if(bezelStyle == "mbz"){
				switch($(".mbz .layer input").val()){
					case "2":
						$(".active textarea").val(settings+'BackgroundImage = "pathtofile\\'+img+'"\n').text(settings+'BackgroundImage = "pathtofile\\'+img+'"\n');
						break;
					case "3":
						$(".active textarea").val(settings+'LEDImage = "pathtofile\\'+img+'"\n').text(settings+'LEDImage = "pathtofile\\'+img+'"\n');
						break;
					case "4":
						$(".active textarea").val(settings+'DeviceImage = "pathtofile\\'+img+'"\n').text(settings+'DeviceImage = "pathtofile\\'+img+'"\n');
						break;
					case "5":
						$(".active textarea").val(settings+'DeviceLEDImage = "pathtofile\\'+img+'"\n').text(settings+'DeviceLEDImage = "pathtofile\\'+img+'"\n');
						break;
					case "6":
						$(".active textarea").val(settings+'DecalImage = "pathtofile\\'+img+'"\n').text(settings+'DecalImage = "pathtofile\\'+img+'"\n');
						break;
					case "7":
						$(".active textarea").val(settings+'TopLayerImage = "pathtofile\\'+img+'"\n').text(settings+'TopLayerImage = "pathtofile\\'+img+'"\n');
						break;
					case "8":
						$(".active textarea").val(settings+'CabinetGlassImage = "pathtofile\\'+img+'"\n').text(settings+'CabinetGlassImage = "pathtofile\\'+img+'"\n');
						break;
				}
			}
			else{
				switch($(".koko-aio .layer input").val()){
					case "1":
						$(".active textarea").val(settings+'monitor_body_curved = "pathtofile\\'+img+'"\n').text(settings+'monitor_body_curved = "pathtofile\\'+img+'"\n');
						break;
					case "2":
						$(".active textarea").val(settings+'monitor_body_straight = "pathtofile\\'+img+'"\n').text(settings+'monitor_body_straight = "pathtofile\\'+img+'"\n');
						break;
					case "3":
						$(".active textarea").val(settings+'bg_under = "pathtofile\\'+img+'"\n').text(settings+'bg_under = "pathtofile\\'+img+'"\n');
						break;
					case "4":
						$(".active textarea").val(settings+'bg_over = "pathtofile\\'+img+'"\n').text(settings+'bg_over = "pathtofile\\'+img+'"\n');
						break;
					case "5":
						$(".active textarea").val(settings+'backdrop = "pathtofile\\'+img+'"\n').text(settings+'backdrop = "pathtofile\\'+img+'"\n');
						break;
				}
			}
		}
		else{
			if(bezelStyle == "mbz"){
				switch($(".mbz .layer input").val()){
					case "2":
						$(".text").val('BackgroundImage = "pathtofile\\'+img+'"\n').text('BackgroundImage = "pathtofile\\'+img+'"\n');
						break;
					case "3":
						$(".text").val('LEDImage = "pathtofile\\'+img+'"\n').text('LEDImage = "pathtofile\\'+img+'"\n');
						break;
					case "4":
						$(".text").val('DeviceImage = "pathtofile\\'+img+'"\n').text('DeviceImage = "pathtofile\\'+img+'"\n');
						break;
					case "5":
						$(".text").val('DeviceLEDImage = "pathtofile\\'+img+'"\n').text('DeviceLEDImage = "pathtofile\\'+img+'"\n');
						break;
					case "6":
						$(".text").val('DecalImage = "pathtofile\\'+img+'"\n').text('DecalImage = "pathtofile\\'+img+'"\n');
						break;
					case "7":
						$(".text").val('TopLayerImage = "pathtofile\\'+img+'"\n').text('TopLayerImage = "pathtofile\\'+img+'"\n');
						break;
					case "8":
						$(".text").val('CabinetGlassImage = "pathtofile\\'+img+'"\n').text('CabinetGlassImage = "pathtofile\\'+img+'"\n');
						break;
				}
			}
			else{
				switch($(".koko-aio .layer input").val()){
					case "1":
						$(".text").val('monitor_body_curved = "pathtofile\\'+img+'"\n').text('monitor_body_curved = "pathtofile\\'+img+'"\n');
						break;
					case "2":
						$(".text").val('monitor_body_straight = "pathtofile\\'+img+'"\n').text('monitor_body_straight = "pathtofile\\'+img+'"\n');
						break;
					case "3":
						$(".text").val('bg_under = "pathtofile\\'+img+'"\n').text('bg_under = "pathtofile\\'+img+'"\n');
						break;
					case "4":
						$(".text").val('bg_over = "pathtofile\\'+img+'"\n').text('bg_over = "pathtofile\\'+img+'"\n');
						break;
					case "5":
						$("text").val('backdrop = "pathtofile\\'+img+'"\n').text('backdrop = "pathtofile\\'+img+'"\n');
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
	
	$('.monochrome .rocker').on('click', function(){
		if($(".monochrome .rocker input").is(":checked")){
			$(".on").addClass("green");
		}
		else{
			$(".on").removeClass("amber").removeClass("green");
		}
		
		if($(".mini, .text-box").hasClass("amber")){
			setCookie("monochrome", "amber", 30);
		}
		else if($(".mini, .text-box").hasClass("bw")){
			setCookie("monochrome", "bw", 30);
		}
		else if($(".mini, .text-box").hasClass("green")){
			setCookie("monochrome", "green", 30);
		}
		else{
			setCookie("monochrome", "off", 30);
		}
	});
	
	$('.power').click(function(e){
		if($(this).hasClass('on')){
			e1 = $('.active textarea, .mini textarea, .active .plyr');
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
		}
		else{
			setCookie("power", "on", 30);
			$(this).addClass('on');
			$(".text1, .text-box, .mini").addClass('on');
			$("code").css("display", "none");
			
			e1 = $('.active textarea, .mini textarea, .active .plyr');
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
		updateCode();
	});
	
	$("form").submit(function (event) {
		$(".info").empty();
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
				$(".info").css("display", "block");
				$(".info").html("HEX needs to be <strong style='color: red;'>RRGGBB</strong> value");
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
				$(".info").css("display", "block");
				$(".info").text("HSV is in format 0-360deg, 0-100%, 0-100%");
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
				$(".info").css("display", "block");
				$(".info").text("HSL is in format 0-360deg, 0-100%, 0-100%");
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
				$(".info").css("display", "block");
				$(".info").text("RGB has to be a number between 0 to 255");
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
		
		updateMini();
		event.preventDefault();
		
		if($(".mini").hasClass("hide") && build == "off"){
			hide();
		}
	});
	
	start();
	
	var c = 0;
	
	$(document).on('keydown', function(e){
		key = e.key;
		
		if (key == "Enter" && $(".popover.show").length > 0) {
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
			$(".nav-link.active").addClass("empty").removeClass("vid").removeClass("yt");
			$(".active textarea").css("display", "block");
		}
		
		if(e.ctrlKey && key == "End"){
			e.preventDefault;
			if($(".nav-stage").length == 1){
				deleteTab();
			}
		}
		
		if(e.ctrlKey && key == "Insert"){
			extraTab();
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
		
		if($(".nav-stage").children().length > 1){
			var id = parseInt($(".nav-link.active").attr("id").replace("tab", ""));
			
			switch(key){
				case "PageDown":
					e.preventDefault();
					if(id > 1){
						prevTab();
					}
					break;
				case "PageUp":
					e.preventDefault();
					if(id < $(".nav-stage").children().length){
						nextTab();
					}
					break;
			}
		}
	});
});
