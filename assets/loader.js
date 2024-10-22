var p = 1,
	page = 1;

function img(file, id){
	var reader = new FileReader();
	reader.onload = function(){
		$("#dropText"+(id+1)).append('<div class="img-holder"><img src="'+reader.result+'"></div>');
		$("#dropText"+(id+1)+" .plyr").remove()
		$("#dropText"+(id+1)+" textarea").css("display", "none");
		$("#tab"+id).addClass("img").removeClass("twitch").removeClass("twitch-live").removeClass("yt").removeClass("vid");
	}
	
	reader.readAsDataURL(file);
}

function loadFile(presets, files, id){
	var reader = new FileReader();
	reader.onload = function(e) {
		var preset = e.target.result;
		$("#dropText"+(id+2)+" textarea").text(preset.trim()).val(preset.trim());
		$("#dropText"+(id+2)+" .plyr").remove()
		$("#dropText"+(id+2)+" textarea").css("display", "block");
		$("#tab"+(id+1)).removeClass("img").removeClass("twitch").removeClass("twitch-live").removeClass("yt").removeClass("vid");
		
		if(power == "off"){
			$("#dropText"+(id+2)+" code").css("display", "block");
		}
		else{
			$("#dropText"+(id+2)+" code").css("display", "none");
		}
		
		updateMini();
		updateCode2(id+2);
		console.clear();
	};
	
	reader.readAsText(presets, "UTF-8");
}

function miniLoad(file){
	var reader = new FileReader();
	reader.onload = function(e) {
		var preset = e.target.result;
		$(".text").val(preset.trim()).text(preset.trim());
		updateMini();
		console.clear();
	};
	
	reader.readAsText(file, "UTF-8");
}

function dropLoad(file, files, id){
	var reader = new FileReader();
	reader.onload = function(e) {
		var preset = e.target.result;
		$("#dropText"+(id+1)+" textarea").text(preset.trim()).val(preset.trim());
		$("#dropText"+(id+1)+" .plyr").remove()
		$("#dropText"+(id+1)+" textarea").css("display", "block");
		$("#tab"+id).removeClass("twitch").removeClass("twitch-live").removeClass("yt").removeClass("vid");
		
		if(power == "off"){
			$("#dropText"+(id+2)+" code").css("display", "block");
		}
		else{
			$("#dropText"+(id+2)+" code").css("display", "none");
		}
		
		updateMini();
		updateCode2(id+2);
		console.clear();
	};
	
	reader.readAsText(file, "UTF-8");
}

function miniTwitchLive(){
	let channel = prompt("Enter Channel Name", "Twitch");
	$(".mini textarea, .mini pre").css("display", "none");
	$(".mini .screen-container").append('<iframe src="https://player.twitch.tv/?channel='+encodeURI(channel)+'&parent='+document.location.hostname+'" style="width: 100%;height: 100%"></iframe');
}

function twitchLive(id){
	clearText(id);
	
	let channel = prompt("Enter Channel Name", "Twitch");
	$(".tab-pane.active .preset-title").empty();
	$("#dropText"+id+" textarea, #dropText"+id+" pre").css("display", "none");
	$("#tab"+(id-1)).addClass("twitch-live").removeClass("twitch").removeClass("img").removeClass("yt").removeClass("vid");
	$("#dropText"+id).append('<iframe class="ttvl" src="https://player.twitch.tv/?channel='+encodeURI(channel)+'&parent='+document.location.hostname+'&muted=false" style="width: 100%;height: 100%"></iframe');
}

function miniTwitch(file){
	let video = prompt("Enter Video Line Number", "1");
	$(".tab-pane.active .preset-title").empty();

	if(file.length == 1){
		links = file[0].name;
	}
	else{
		links = file.name;
	}
	
	jQuery.get("twitch/"+links, function(data) {
		data = data.trim().split("\n");
		$(".mini textarea, .mini pre").css("display", "none");
		$(".mini .screen-container").append('<iframe src="https://player.twitch.tv/?video=v'+data[(video-1)].split("/").pop()+'&parent='+document.location.hostname+'&muted=false" style="width: 100%;height: 100%"></iframe');
	});
}

function twitch(file, id){
	let video = prompt("Enter Video Line Number", "1");
	$(".tab-pane.active .preset-title").empty();

	if(file.length == 1){
		links = file[0].name;
	}
	else{
		links = file.name;
	}
	
	jQuery.get("twitch/"+links, function(data) {
		data = data.trim().split("\n");
		
		if(video != null && video > 0 && video <= data.length && video % 1 == 0){
			$(".tab-pane.active .preset-title").empty();
			$("#tab"+(id-1)).addClass("twitch").removeClass("twitch-live").removeClass("img").removeClass("yt").removeClass("vid");
			$("#dropText"+id+" textarea, #dropText"+id+" pre").css("display", "none");
			$("#dropText"+id).append('<iframe class="ttv" src="https://player.twitch.tv/?video=v'+data[(video-1)].split("/").pop()+'&parent='+document.location.hostname+'&muted=false" style="width: 100%;height: 100%"></iframe');
		}
	});
}

function minitube(file){
	let video = prompt("Enter Video Line Number", "1");

	jQuery.get("youtube/"+file.name, function(data) {
		data = data.trim().split("\n");

		if(video != null && video > 0 && video <= data.length && video % 1 == 0){
			if($("#player").length == 0){
				$(".mini .screen-container").append('<div id="player" data-plyr-provider="youtube" data-plyr-embed-id="'+data[(video-1)]+'"></div>');

				const player = new Plyr('#player', {autoplay: true,invertTime: false});
				player.source = {type: 'video',sources: [{src: data[(video-1)],provider: 'youtube'}]};

				function next(){
					var nextVid = video++;

					if(nextVid < data.length){
						$(".mini .plyr").remove();

						$(".mini .screen-container").append('<div id="player" data-plyr-provider="youtube" data-plyr-embed-id="'+data[(nextVid)]+'"></div>');
						const player = new Plyr('#player', {autoplay: true,invertTime: false});
						player.source = {type: 'video',sources: [{src: data[(nextVid)],provider: 'youtube'}]};

						player.on('ready', (event) => {
							$(".mini .plyr").addClass("yt");

							if(data.length > 1 && video < data.length){
								$('.mini .plyr__controls .plyr__controls__item:first-child').after('<button class="plyr__controls__item plyr__control" id="next" type="button" data-plyr="next" aria-pressed="false" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Z"></path></svg><span class="label--not-pressed plyr__sr-only">Next</span></button>');
							}

							$(".mini #next").on("click", function(){
								next();
							});
						});
					}
				}

				player.on('ready', (event) => {
					$(".mini .plyr").addClass("yt");

					if(data.length > 1 && video < data.length){
						$('.mini .plyr__controls .plyr__controls__item:first-child').after('<button class="plyr__controls__item plyr__control" id="next" type="button" data-plyr="next" aria-pressed="false" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" 	width="24"><path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Z"></path></svg><span class="label--not-pressed plyr__sr-only">Next</span></button>');
					}

					$(".mini #next").on("click", function(){
						next();
					});
				});
			}
			$(".mini textarea").css("display", "none");
		}
	});
	
	$(".mini .plyr").attr("tab-index", "0");
}

function youtube(file, id){
	let video = prompt("Enter Video Line Number", "1");
	$(".tab-pane.active .preset-title").empty();

	if(file.length == 1){
		links = file[0].name;
	}
	else{
		links = file.name;
	}

	jQuery.get("youtube/"+links, function(data) {
		data = data.trim().split("\n");

		if(video != null && video > 0 && video <= data.length && video % 1 == 0){
			if($("#player"+id).length == 0){
				$(".tab-pane.active .screen-container").append('<div id="player'+id+'" data-plyr-provider="youtube" data-plyr-embed-id="'+data[(video-1)]+'"></div>');
				$("#tab"+$(".tab-pane.active").attr("id").replace("tab-pane", "")).addClass("yt").removeClass("vid");

				const player = new Plyr('#player'+id, {autoplay: true,invertTime: false});
				player.source = {type: 'video',sources: [{src: data[(video-1)],provider: 'youtube'}]};

				function next(){
					var nextVid = video++;

					if(nextVid < data.length){
						$(".tab-pane.active .plyr").remove();

						$(".tab-pane.active .screen-container").append('<div id="player'+id+'" data-plyr-provider="youtube" data-plyr-embed-id="'+data[(nextVid)]+'"></div>');
						const player = new Plyr('#player'+id, {autoplay: true,invertTime: false});
						player.source = {type: 'video',sources: [{src: data[(nextVid)],provider: 'youtube'}]};

						player.on('ready', (event) => {
							$(".tab-pane.active .plyr").addClass("yt");

							if(data.length > 1 && video < data.length){
								$('.tab-pane.active .plyr__controls .plyr__controls__item:first-child').after('<button class="plyr__controls__item plyr__control" id="next" type="button" data-plyr="next" aria-pressed="false" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Z"></path></svg><span class="label--not-pressed plyr__sr-only">Next</span></button>');
							}

							fetchJSONFile('https://www.youtube.com/oembed?url='+data[(video)], function(info){
								$(".tab-pane.active .plyr__controls").prepend('<div class="next-up"><img src="'+info["thumbnail_url"]+'"><div class="next-info"><span>Next</span><span id="next-title">'+info["title"]+'</span><span id="user"><a href="'+info["author_url"]+'">'+info["author_name"]+'</a></span></div></div>')
							});

							$(".tab-pane.active #next").on("click", function(){
								next();
							});

							$(".tab-pane.active #next").hover(function(){$(".next-up").addClass("show")}, function(){$(".next-up").removeClass("show")});
						});
					}
				}

				player.on('ready', (event) => {
					$(".tab-pane.active .plyr").addClass("yt");

					if(data.length > 1 && video < data.length){
						$('.tab-pane.active .plyr__controls .plyr__controls__item:first-child').after('<button class="plyr__controls__item plyr__control" id="next" type="button" data-plyr="next" aria-pressed="false" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Z"></path></svg><span class="label--not-pressed plyr__sr-only">Next</span></button>');
					}

					fetchJSONFile('https://www.youtube.com/oembed?url='+data[(video)], function(info){
						$(".tab-pane.active .plyr__controls").prepend('<div class="next-up"><img src="'+info["thumbnail_url"]+'"><div class="next-info"><span>Next</span><span id="next-title">'+info["title"]+'</span><span id="user"><a href="'+info["author_url"]+'">'+info["author_name"]+'</a></span></div></div>')
					});

					$(".tab-pane.active #next").on("click", function(){
						next();
					});

					$(".tab-pane.active #next").hover(function(){$(".next-up").addClass("show")}, function(){$(".next-up").removeClass("show")});
				});
			}
			$(".tab-pane.active textarea").css("display", "none");
		}
	});
	
	$(".tab-pane .plyr").attr("tab-index", "0");
}

function video(id, file, files, extension, playing){
	$("#tab"+id).addClass("vid").removeClass("yt");
	
	if(files == 1 && id > 2){
		var input = URL.createObjectURL(file[0]);
		
		if(extension == "mp3"){
			$("#dropText"+(id+1)).append('<audio controls crossorigin playsinline id="player'+(id+1)+'"></audio>');
		}
		else if(extension == "mp4"){
			$("#dropText"+(id+1)).append('<video controls crossorigin playsinline id="player'+(id+1)+'"></video>');
		}
		
		const player = new Plyr('#player'+(id+1), {autoplay: true,invertTime: false});
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
	}
	else{
		var input = URL.createObjectURL(file[files-1]);
		
		if(extension == "mp3"){
			$("#dropText"+(id+1)).append('<audio controls crossorigin playsinline class="js-player" id="player'+(id+1)+'" data-plyr-config=\'{ "invertTime": false }\'><source src="'+input+'" type="audio/mp3"></audio>');
		}
		else if(extension == "mp4"){
			$("#dropText"+(id+1)).append('<video controls crossorigin playsinline class="js-player" id="player'+(id+1)+'" data-plyr-config=\'{ "invertTime": false }\'><source src="'+input+'" type="video/mp4"></video>');
		}
	
		const players = Array.from(document.querySelectorAll('.js-player')).map((p) => new Plyr(p));
	}
	
	$("#dropText"+(id+1)+" textarea, #dropText"+(id+1)+" code").css("display", "none");
	$(".tab-pane .plyr").attr("tab-index", (id+1));
}

function loadVideo(id, file, files, extension, playing){
	if(files == 1){
		var input = URL.createObjectURL(file[0]);
		
		if(extension == "mp3"){
			$("#dropText"+id).append('<audio controls crossorigin playsinline id="player'+id+'"></audio>');
		}
		else if(extension == "mp4"){
			$("#dropText"+id).append('<video controls crossorigin playsinline id="player'+id+'"></video>');
		}
		
		$("#tab"+(id-1)).addClass("vid").removeClass("yt");
		
		const player = new Plyr('#player'+id, {autoplay: true,invertTime: false});
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
	}
	else{
		var input = URL.createObjectURL(file);
		
		if(extension == "mp3"){
			$("#dropText"+(id+2)).append('<audio controls crossorigin playsinline class="js-player" id="player'+(id+2)+'" data-plyr-config=\'{ "invertTime": false }\'><source src="'+input+'" type="audio/mp3"></audio>');
		}
		else if(extension == "mp4"){
			$("#dropText"+(id+2)).append('<video controls crossorigin playsinline class="js-player" id="player'+(id+2)+'" data-plyr-config=\'{ "invertTime": false }\'><source src="'+input+'" type="video/mp4"></video>');
		}
		
		$("#tab"+(id+1)).addClass("vid").removeClass("yt");
		
		const players = Array.from(document.querySelectorAll('.js-player')).map((p) => new Plyr(p));
		
		$("#dropText"+(id+2)+" textarea, #dropText"+(id+1)+" code").css("display", "none");
	}
}

function dropFile(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
			input = URL.createObjectURL(file);
	
	$(".mini .plyr, #player").remove();
	
	if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$(".mini .screen-container").append('<audio controls crossorigin playsinline id="player"></audio>');
	}
	else if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$(".mini .screen-container").append('<video controls crossorigin playsinline id="player"></video>');
	}
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		const player = new Plyr('#player', {autoplay: true,invertTime: false});
		
		if(playing == "youtube"){
			minitube(file);
		}
		else{
			player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
			$(".mini .plyr").attr("tab-index", "0");
		}
		
		$(".text").css("display", "none");
	}
	else if(extension == "ttvl"){
		miniTwitchLive();
	}
	else if(extension == "ttv"){
		miniTwitch(file);
	}
	else{
		miniLoad(file);
	}
}

function dropFile2(file) {
	var id = parseInt(file.length);
	
	if($(".tab-pane.active").length == 0){
		active = 1;
	}
	else{
		active = parseInt($(".tab-pane.active").attr("id").replace("tab-pane", ""));
	}
	
	var num = (active + id) - 1;
	
	if($(".tab-pane").length < num){
		$(".tab-content").append('<div class="tab-pane fade" id="tab-pane'+num+'" role="tabpanel" aria-labelledby="tab'+num+'" tabindex="0"><span class="preset-title" id="preset'+num+'"></span><div class="screen-container" id="dropText'+(num+1)+'"><pre id="preCode"><code id="codeBlock'+(num+1)+'" class="language-csharp"></code></pre><textarea class="text'+(num+1)+' screen" rows="7" cols="36" placeholder="Drag & Drop preset file... "></textarea><div class="overlay">VGA '+num+'</div></div></div>');
	}
	
	var extension = file[id-1].name.substr( (file[id-1].name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, active+1);
		}
		else{
			video(num, file, file.length, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
		
		$("#preset"+num).empty();
	}
	else if(extension == "jpg" || extension == "png"){
		img(file[id-1], num);
		$(".tab-pane.active textarea").css("display", "none");
	}
	else if(extension == "ttv"){
		twitch(file, active+1);
	}
	else if(extension == "ttvl"){
		twitchLive(active+1);
	}
	else{
		dropLoad(file[id-1], file.length, num);
		$("#preset"+num).text(file[id-1].name.replace(".params", "").replace(".slangp", ""));
	}
	$("#tab"+(num)).removeClass("empty");
	
	if(power == "on"){
		$(".tab-pane code").each(function(){
			$(this).css("display", "none");
		});
	}
}

$(".mini .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile(file);
});

function dropTab(e){
	e.preventDefault();
	const files = [],
		length = e.originalEvent.dataTransfer.files.length,
		name = e.originalEvent.dataTransfer.files[0].name;
	var tabs = parseInt($(".nav-stage").children().length);
	$(".tab-pane.active textarea").text("").val("");
	$(".nav-item.close, .less, .more, .nav-hide, .plus, .remove").remove();
	
	var extension = name.substr( (name.lastIndexOf('.') +1) );
	
	if($(".tab-pane.active").length == 0){
		active = 1;
	}
	else{
		active = parseInt($(".tab-pane.active").attr("id").replace("tab-pane", ""));
	}
	
	if(length > 1 && $(".nav").children().length == 0){
		$(".text-wrap").append('<ul class="nav nav-tabs" id="myTab" role="tablist"></ul>');
	}
	
	if($(".nav-slide").length == 0){
		$(".nav.nav-tabs").append('<div class="nav-slide"><div class="nav-stage" style="transform:translateX(0px);"></div></div>');
	}
  
	if(length <= 256){
		for (var i=0; i<length;i++){
			if(length > 1){
				if(i == 0 && $(".nav-stage").children().length == 0){
					$(".nav-stage").append('<li class="nav-item" role="presentation"><button class="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#tab-pane1" type="button" role="tab" aria-controls="tab-pane1" aria-selected="true">1</button></li>');
				}
				else if(length == 256){
					$(".nav-stage").append('<li class="nav-item" role="presentation"><button class="nav-link" id="tab'+(tabs+(i+1))+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+(tabs+(i+1))+'" type="button" role="tab" aria-controls="tab-pane'+(tabs+(i+1))+'" aria-selected="true">'+(tabs+(i+1))+'</button></li>');
					$(".nav-link").removeClass("empty");
				}
				else if(active+i > tabs){
					$(".nav-stage").append('<li class="nav-item" role="presentation"><button class="nav-link" id="tab'+(active+i)+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+(active+i)+'" type="button" role="tab" aria-controls="tab-pane'+(active+i)+'" aria-selected="true">'+(active+i)+'</button></li>');
					$(".nav-tabs #tab"+(active+i)).removeClass("empty");
				}
			}
			files[i] = e.originalEvent.dataTransfer.files[i];
			dropFile2(files);
		}
	}
	else if(length > 256){
		if($(".nav-stage").children().length == 0){
			for (i=0; i<256;i++){
				$(".nav-link").removeClass("empty");
				if(i == 0 && $(".nav-stage").children().length == 0){
					$(".nav-stage").append('<li class="nav-item" role="presentation"><button class="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#tab-pane1" type="button" role="tab" aria-controls="tab-pane1" aria-selected="true">1</button></li>');
				}
				else{
					$(".nav-stage").append('<li class="nav-item" role="presentation"><button class="nav-link" id="tab'+(i+1)+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+(i+1)+'" type="button" role="tab" aria-controls="tab-pane'+(i+1)+'" aria-selected="true">'+(i+1)+'</button></li>');
				}
			}
		}
		else{
			for (var i=0; i<(256 - tabs);i++){
				$(".nav-link").removeClass("empty");
				$(".nav-stage").append('<li class="nav-item" role="presentation"><button class="nav-link" id="tab'+parseInt(tabs+(i+1))+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+parseInt(tabs+(i+1))+'" type="button" role="tab" aria-controls="tab-pane'+parseInt(tabs+(i+1))+'" aria-selected="true">'+parseInt(tabs+(i+1))+'</button></li>');
			}
		}
		
		for (var i=0; i<256;i++){
			files[i] = e.originalEvent.dataTransfer.files[i];
			dropFile2(files);
		}
	}

	if($(".nav-stage").children().length > 20 && $(".nav .more").length == 0){
		$(".nav-tabs").prepend('<div class="less nav-item" style="display: none;"><span class="material-symbols-outlined nav-link">chevron_left</span></div>');
		$(".nav-tabs").append('<div class="more nav-item" style="display: table-cell;"><span class="material-symbols-outlined nav-link">chevron_right</span></div>');
		
		$(".less.nav-item").on('click', function(){
			prevTab("page");
		});
		
		$(".more.nav-item").on('click', function(){
			nextTab("page");
		});
	}
	
	if(tabs > 1 || length > 1){
		$(".nav-tabs").append('<div class="close nav-item"><span class="material-symbols-outlined nav-link" title="Minus Tab">remove</span></div>');
		$(".nav-tabs").append('<div class="plus nav-item"><span class="material-symbols-outlined nav-link" title="Add Tab">Add</span></div>');
		$(".nav-tabs").append('<div class="remove nav-item"><span class="material-symbols-outlined nav-link" title="Remove Tabs">close_small</span></div>');
		
		const tooltip = new bootstrap.Tooltip($('.nav-item.close'));
		const tooltip2 = new bootstrap.Tooltip($('.plus'));
		const tooltip3 = new bootstrap.Tooltip($('.remove'));
		
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
	}
}

$(document).ready(function(){
	$('#load input[type="file"]').change(function (e) {
		const file = e.target.files[0],
			extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
			input = URL.createObjectURL(file);
		
		$(".mini .plyr, #player, iframe").remove();
		
		if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
			$(".mini .screen-container").append('<audio controls crossorigin playsinline id="player"></audio>');
		}
		else if(extension == "mp4" && $(".tab-pane.active video").length == 0){
			$(".mini .screen-container").append('<video controls crossorigin playsinline id="player"></video>');
		}
		
		if(extension == "mp4" || extension == "mp3" || extension == "txt"){
			const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
			
			if(playing == "youtube"){
				minitube(file);
			}
			else{
				const player = new Plyr('#player', {autoplay: true,invertTime: false});
				player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
				$(".mini .plyr").attr("tab-index", "0");
			}
			
			$(".text").css("display", "none");
		}
		else if(extension == "ttvl"){
			miniTwitchLive();
		}
		else if(extension == "ttv"){
			miniTwitch(file);
		}
		else{
			miniLoad(file);
		}
	});
	
	$('#load2 input[type="file"]').change(function (e) {
		const presets = e.target.files;
		$(".nav-item.close, .nav-hide, .plus, .tab-pane.active .plyr, .tab-pane.active iframe, .remove").remove();
		$(".tab-pane.active textarea").css("display", "block");
		var tabs = parseInt($(".nav-stage").children().length),
			files = [];
			
		var id = parseInt(presets.length);
		
		if($(".tab-pane.active").length == 0){
			active = 1;
		}
		else{
			active = parseInt($(".tab-pane.active").attr("id").replace("tab-pane", ""));
		}
		
		var extension = presets[(id-1)].name.substr( (presets[(id-1)].name.lastIndexOf('.') +1) );

		if(id > 1 && $(".nav").children().length == 0){
			$(".text-wrap").append('<ul class="nav nav-tabs" id="myTab" role="tablist"></ul>');
		}
		
		if($(".nav-slide").length == 0){
			$(".nav.nav-tabs").append('<div class="nav-slide"><div class="nav-stage" style="transform:translateX(0px);"></div></div>');
		}
	  
		if(id+tabs <= 256){
			for (let i=0;i<id;i++){
				if(id > 1){
					if(i == 0 && $(".nav-stage").children().length == 0){
						$(".nav-stage").append('<li class="nav-item" role="presentation"><button class="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#tab-pane1" type="button" role="tab" aria-controls="tab-pane1" aria-selected="true">1</button></li>');
					}
					else if(id == 256){
						$(".nav-stage").append('<li class="nav-item" role="presentation"><button class="nav-link" id="tab'+(tabs+(i+1))+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+(tabs+(i+1))+'" type="button" role="tab" aria-controls="tab-pane'+(tabs+(i+1))+'" aria-selected="true">'+(tabs+(i+1))+'</button></li>');
						$(".nav-link").removeClass("empty");
					}
					else if(tabs < active+i){
						$(".nav-stage").append('<li class="nav-item" role="presentation"><button class="nav-link" id="tab'+(active+i)+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+(active+i)+'" type="button" role="tab" aria-controls="tab-pane'+(active+i)+'" aria-selected="true">'+(active+i)+'</button></li>');
						$(".nav-tabs #tab"+(active+i)).removeClass("empty");
					}
				}
			}
		}
		else if(id > 256){
			if($(".nav-slide").children().length == 0){
				for (var i=0; i<256;i++){
					$(".nav-link").removeClass("empty");
					if(i == 0 && $(".nav-stage").children().length == 0){
						$(".nav-stage").append('<li class="nav-item" role="presentation"><button class="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#tab-pane1" type="button" role="tab" aria-controls="tab-pane1" aria-selected="true">1</button></li>');
					}
					else{
						$(".nav-stage").append('<li class="nav-item" role="presentation"><button class="nav-link" id="tab'+(i+1)+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+(i+1)+'" type="button" role="tab" aria-controls="tab-pane'+(i+1)+'" aria-selected="true">'+(i+1)+'</button></li>');
					}
				}
			}
			else{
				for (var i=0; i<(256 - tabs);i++){
					$(".nav-link").removeClass("empty");
					$(".nav-stage").append('<li class="nav-item" role="presentation"><button class="nav-link" id="tab'+parseInt(tabs+(i+1))+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+parseInt(tabs+(i+1))+'" type="button" role="tab" aria-controls="tab-pane'+parseInt(tabs+(i+1))+'" aria-selected="true">'+parseInt(tabs+(i+1))+'</button></li>');
				}
			}
		}
		
		if($(".nav-stage").children().length > 20 && $(".nav .more").length == 0){
			$(".nav-tabs").prepend('<div class="less nav-item" style="display: none;"><span class="material-symbols-outlined nav-link">chevron_left</span></div>');
			$(".nav-tabs").append('<div class="more nav-item" style="display: table-cell;"><span class="material-symbols-outlined nav-link">chevron_right</span></div>');
			
			$(".less.nav-item").on('click', function(){
				prevTab("page");
			});
			
			$(".more.nav-item").on('click', function(){
				nextTab("page");
			});
		}
		
		if(tabs > 1 || id > 1){
			$(".nav-tabs").append('<div class="close nav-item"><span class="material-symbols-outlined nav-link" title="Minus Tab">remove</span></div>');
			$(".nav-tabs").append('<div class="plus nav-item"><span class="material-symbols-outlined nav-link" title="Add Tab">Add</span></div>');
			$(".nav-tabs").append('<div class="remove nav-item"><span class="material-symbols-outlined nav-link" title="Remove Tabs">close_small</span></div>');
			
			const tooltip = new bootstrap.Tooltip($('.nav-item.close'));
			const tooltip2 = new bootstrap.Tooltip($('.plus'));
			const tooltip3 = new bootstrap.Tooltip($('.remove'));
			
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
		}
		
		if(id == 1){
			if($(".nav-stage .nav-link").length == 0){
				var num = 1;
			}
			else{
				var num = parseInt($(".nav-link.active").text());
			}
			
			if(extension == "mp4" || extension == "mp3" || extension == "txt"){
				const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
				
				if(playing == "youtube"){
					youtube(presets, parseInt($(".active textarea").attr("class").replace("text", "")));
				}
				else{
					loadVideo(num+1, presets, 1, extension, playing);
					
					$(".tab-pane.active textarea").css("display", "none");
				}
			}
			else if(extension == "jpg" || extension == "png"){
				img(presets[0], num);
				$(".tab-pane.active textarea").css("display", "none");
			}
			else if(extension == "ttv"){
				twitch(presets, num+1);
			}
			else if(extension == "ttvl"){
				twitchLive(num+1);
			}
			else{
				loadFile(presets[0], 1, num-1);
				$("#preset"+num).text(presets[0].name.replace(".params", "").replace(".slangp", ""));
			}
			
			$(".nav-link.active").removeClass("empty");
		}
		if(id > 1){
			if($(".tab-pane.active").length == 0){
				active = 1;
			}
			else{
				active = parseInt($(".tab-pane.active").attr("id").replace("tab-pane", ""));
			}
		
			for(i=0;i<id;i++){
				var num = (active + i) - 1;
				
				if($(".tab-pane").length < num+1){
					$(".tab-content").append('<div class="tab-pane fade" id="tab-pane'+(num+1)+'" role="tabpanel" aria-labelledby="tab'+(num+1)+'" tabindex="0"><span class="preset-title" id="preset'+(num+1)+'"></span><div class="screen-container" id="dropText'+(num+2)+'"><pre id="preCode"><code id="codeBlock'+(num+2)+'" class="language-csharp"></code></pre><textarea class="text'+(num+2)+' screen" rows="7" cols="36" placeholder="Drag & Drop preset file... "></textarea><div class="overlay">VGA '+(num+1)+'</div></div></div>');
				}
				
				if(extension == "mp4" || extension == "mp3" || extension == "txt"){
					const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
					
					if(playing == "youtube"){
						youtube(presets, num);
					}
					else{
						loadVideo(num, presets[i], id, extension, playing);
						
						$(".tab-pane.active textarea").css("display", "none");
					}
					
					$("#preset"+(num+1)).empty();
				}
				else if(extension == "jpg" || extension == "png"){
					img(presets[i], num+1);
					$(".tab-pane.active textarea").css("display", "none");
				}
				else{
					loadFile(presets[i], id, num);
					$("#preset"+(num+1)).text(presets[i].name.replace(".params", "").replace(".slangp", ""));
				}
				$("#tab"+(num+1)).removeClass("empty");
				
				if(power == "on"){
					$(".tab-pane code").each(function(){
						$(this).css("display", "none");
					});
				}
			}
		}
		
		$('#load2 input[type="file"]').val("");
		$(this).blur();
	});
});