var p = 1;

function loadFile(presets, files, id){
	var reader = new FileReader();
	reader.onload = function(e) {
		var preset = e.target.result;
		if(id == 1){
			$(".text2").val(preset.trim()).text(preset.trim());
			uc[1]();
		}
		else{
			$(".text"+(id+1)).val(preset.trim()).text(preset.trim());
			uc[id+1]();
		}
	};

	if($(".tab-pane.active").length == 1 && files == 1){
		reader.readAsText(presets[0], "UTF-8");
		$("#preset"+id).text(presets[0].name.replace(".params", "").replace(".slangp", ""));
	}
	else{
		reader.readAsText(presets[id-1], "UTF-8");
		$("#preset"+id).text(presets[id-1].name.replace(".params", "").replace(".slangp", ""));
	}
}

function miniLoad(file){
	var reader = new FileReader();
	reader.onload = function(e) {
		var preset = e.target.result;
		$(".text").val(preset.trim()).text(preset.trim());
		uc[1]();
	};
	reader.readAsText(file, "UTF-8");
}

function dropLoad(file, files, id){
	var reader = new FileReader();
	reader.onload = function(e) {
		var preset = e.target.result;
		$("#dropText"+(id+1)+" textarea").text(preset.trim()).val(preset.trim());
		uc[id+1]();
	};
	reader.readAsText(file, "UTF-8");
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
							$(".plyr").addClass("yt");

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
					$(".plyr").addClass("yt");

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
}

function youtube(file, id){
	let video = prompt("Enter Video Line Number", "1");
	$(".tab-pane.active .preset-title").empty();

	if(id == 2){
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
							$(".plyr").addClass("yt");

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
					$(".plyr").addClass("yt");

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
}

function video(id, file, files, extension, playing){
	if(files == 1){
		var input = URL.createObjectURL(file[0]);
	}
	else{
		var input = URL.createObjectURL(file[id-1]);
	}

	if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText"+id).append('<audio controls crossorigin playsinline id="player'+id+'"></audio>');
	}
	else if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText"+id).append('<video controls crossorigin playsinline id="player'+id+'"></video>');
	}

	const player = new Plyr('#player'+id, {autoplay: true,invertTime: false,ratio: "4:3"});
	player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};

	$(".nav-link").on('click', function(){
		player.pause();
	});
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
		
		if(playing == "youtube"){
			minitube(file);
		}
		else{
			player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		}
		
		$(".text").css("display", "none");
	}
	else{
		miniLoad(file);
	}
}

function dropFile2(file) {
	if(file.length == 1){
		var extension = file[0].name.substr( (file[0].name.lastIndexOf('.') +1) );
		
		if(extension == "mp4" || extension == "mp3" || extension == "txt"){
			const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
			
			if(playing == "youtube"){
				youtube(file, 2);
			}
			else{
				video(2, file, 1, extension, playing);
				
				$(".tab-pane.active textarea").css("display", "none");
			}
		}
		else{
			dropLoad(file[0], 1, 1);
			$("#preset1").text(file[0].name.replace(".params", "").replace(".slangp", ""));
		}
		
		$(".nav-link.active").parents(".nav-item").removeClass("empty");
	}
	if(file.length == 2){
		dropLoad(file[1], 2, 2);
		$("#preset2").text(file[1].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 3){
		dropLoad(file[2], 3, 3);
		$("#preset3").text(file[2].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 4){
		dropLoad(file[3], 4, 4);
		$("#preset4").text(file[3].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 5){
		dropLoad(file[4], 5, 5);
		$("#preset5").text(file[4].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 6){
		dropLoad(file[5], 6, 6);
		$("#preset6").text(file[5].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 7){
		dropLoad(file[6], 7, 7);
		$("#preset7").text(file[6].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 8){
		dropLoad(file[7], 8, 8);
		$("#preset8").text(file[7].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 9){
		dropLoad(file[8], 9, 9);
		$("#preset9").text(file[8].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 10){
		dropLoad(file[9], 10, 10);
		$("#preset10").text(file[9].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 11){
		dropLoad(file[10], 11, 11);
		$("#preset11").text(file[10].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 12){
		dropLoad(file[11], 12, 12);
		$("#preset12").text(file[11].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 13){
		dropLoad(file[12], 13, 13);
		$("#preset13").text(file[12].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 14){
		dropLoad(file[13], 14, 14);
		$("#preset14").text(file[13].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 15){
		dropLoad(file[14], 15, 15);
		$("#preset15").text(file[14].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 16){
		dropLoad(file[15], 16, 16);
		$("#preset16").text(file[15].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 17){
		dropLoad(file[16], 17, 17);
		$("#preset17").text(file[16].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 18){
		dropLoad(file[17], 18, 18);
		$("#preset18").text(file[17].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 19){
		dropLoad(file[18], 19, 19);
		$("#preset19").text(file[18].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 20){
		dropLoad(file[19], 20, 20);
		$("#preset20").text(file[19].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 21){
		dropLoad(file[20], 21, 21);
		$("#preset21").text(file[20].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 22){
		dropLoad(file[21], 22, 22);
		$("#preset22").text(file[21].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 23){
		dropLoad(file[22], 23, 23);
		$("#preset23").text(file[22].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 24){
		dropLoad(file[23], 24, 24);
		$("#preset24").text(file[23].name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav").removeClass("empty");
}

function dropFile3(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 3);
		}
		else{
			video(3, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 3);
		$("#preset3").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile4(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 4);
		}
		else{
			video(4, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 4);
		$("#preset4").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile5(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 5);
		}
		else{
			video(5, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 5);
		$("#preset5").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile6(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 6);
		}
		else{
			video(6, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 6);
		$("#preset6").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile7(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 7);
		}
		else{
			video(7, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 7);
		$("#preset7").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile8(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 8);
		}
		else{
			video(8, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 8);
		$("#preset8").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile9(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 9);
		}
		else{
			video(9, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 9);
		$("#preset9").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile10(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 10);
		}
		else{
			video(10, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 10);
		$("#preset10").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile11(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp11") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 11);
		}
		else{
			video(11, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 11);
		$("#preset11").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile12(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 12);
		}
		else{
			video(12, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 12);
		$("#preset12").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile13(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 13);
		}
		else{
			video(13, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 13);
		$("#preset13").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile14(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 14);
		}
		else{
			video(14, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 14);
		$("#preset14").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile15(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 15);
		}
		else{
			video(15, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 15);
		$("#preset15").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile16(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 16);
		}
		else{
			video(16, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 16);
		$("#preset16").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile17(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 17);
		}
		else{
			video(17, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 17);
		$("#preset17").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile18(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 18);
		}
		else{
			video(18, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 18);
		$("#preset18").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile19(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 19);
		}
		else{
			video(19, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 19);
		$("#preset19").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile20(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 20);
		}
		else{
			video(20, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 20);
		$("#preset20").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile21(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 21);
		}
		else{
			video(21, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 21);
		$("#preset21").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile22(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 22);
		}
		else{
			video(22, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 22);
		$("#preset22").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile23(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 23);
		}
		else{
			video(23, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 23);
		$("#preset23").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile24(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 24);
		}
		else{
			video(24, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 24);
		$("#preset24").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropFile25(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) );
	
	if(extension == "mp4" || extension == "mp3" || extension == "txt"){
		const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
		
		if(playing == "youtube"){
			youtube(file, 25);
		}
		else{
			video(25, file, 1, extension, playing);
			
			$(".tab-pane.active textarea").css("display", "none");
		}
	}
	else{
		dropLoad(file, 1, 25);
		$("#preset25").text(file.name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

$(".mini .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile(file);
});

$("#tab-pane1 .screen-container").on("drop", function(e) {
	e.preventDefault();
	const files = [],
		length = e.originalEvent.dataTransfer.files.length,
		name = e.originalEvent.dataTransfer.files[0].name;
	var tabs = $(".nav").children().length;
	$(".text-wrap .text-box:nth-child(2) textarea").text("").val("");
	$(".preset-title, code").empty();
	$(".nav-hide, .plus, .remove").remove();
  
	var extension = name.substr( (name.lastIndexOf('.') +1) );
	

	if(length > 1 && $(".nav").children().length == 0){
		$(".text-wrap").append('<ul class="nav nav-tabs" id="myTab" role="tablist"></ul>');
	}
  
	if(length <= 24){
		for (var i=0; i< length;i++){
			files[i] = e.originalEvent.dataTransfer.files[i];
			dropFile2(files);
			if(length > 1){
				if($(".nav").children().length < length){
					if(i == 0 && $(".nav").children().length == 0){
						$(".nav.nav-tabs").append('<li class="nav-item" role="presentation"><button class="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#tab-pane1" type="button" role="tab" aria-controls="tab-pane1" aria-selected="true">1</button></li>');
					}
					else if(length == 24){
						$(".nav.nav-tabs").append('<li class="nav-item" role="presentation"><button class="nav-link" id="tab'+(tabs+(i+1))+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+(tabs+(i+1))+'" type="button" role="tab" aria-controls="tab-pane'+(tabs+(i+1))+'" aria-selected="true">'+(tabs+(i+1))+'</button></li>');
						$(".nav-item").removeClass("empty");
					}
					else{
						$(".nav.nav-tabs").append('<li class="nav-item" role="presentation"><button class="nav-link" id="tab'+(tabs+(i+1))+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+(tabs+(i+1))+'" type="button" role="tab" aria-controls="tab-pane'+(tabs+(i+1))+'" aria-selected="true">'+(tabs+(i+1))+'</button></li>');
						$(".nav-tabs #tab"+(i+1)).parents(".nav-item").removeClass("empty");
					}
				}
			}
		}
	}
	else if(length > 24){
		if($(".nav").children().length == 0){
			for (var i=0; i<24;i++){
				$(".nav-item").removeClass("empty");
				if(i == 0 && $(".nav").children().length == 0){
					$(".nav.nav-tabs").append('<li class="nav-item" role="presentation"><button class="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#tab-pane1" type="button" role="tab" aria-controls="tab-pane1" aria-selected="true">1</button></li>');
				}
				else{
					$(".nav.nav-tabs").append('<li class="nav-item" role="presentation"><button class="nav-link" id="tab'+(i+1)+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+(i+1)+'" type="button" role="tab" aria-controls="tab-pane'+(i+1)+'" aria-selected="true">'+(i+1)+'</button></li>');
				}
			}
		}
		else{
			for (var i=0; i<(24 - tabs);i++){
				$(".nav-item").removeClass("empty");
				$(".nav.nav-tabs").append('<li class="nav-item" role="presentation"><button class="nav-link" id="tab'+parseInt(tabs+(i+1))+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+parseInt(tabs+(i+1))+'" type="button" role="tab" aria-controls="tab-pane'+parseInt(tabs+(i+1))+'" aria-selected="true">'+parseInt(tabs+(i+1))+'</button></li>');
			}
		}
		
		for (var i=0; i<24;i++){
			files[i] = e.originalEvent.dataTransfer.files[i];
			dropFile2(files);
		}
	}

	if(tabs > 1 || length > 1){
		$(".nav-tabs").append('<div class="plus nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Plus 1" role="presentation"><span class="material-symbols-outlined nav-link" aria-selected="false" tabindex="-1" role="tab">exposure_plus_1</span></div>');
		$(".nav-tabs").append('<div class="remove nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Remove Tabs"><span class="material-symbols-outlined nav-link">close_small</span></div>');
		
		const tooltip = new bootstrap.Tooltip($('.plus'));
		const tooltip2 = new bootstrap.Tooltip($('.remove'));
		
		if($(".nav-tabs .nav-link").length < 26){
			$(".plus").on('click', function(){
				extraTab();
				$(this).children('span').blur();
			});
		}
		
		$(".remove").on('click', function(){
			removeTabs();
		});
		
		if($(".nav-hide").length == 0){
			$(".text-wrap .text-box:nth-child(2)").append('<div class="nav-hide"><span class="material-symbols-outlined">keyboard_double_arrow_up</span></div>');
			
			$(".nav-hide").on('click', function(){
				navHide();
			});
			
			if(dots == "hidden"){
				$(".nav-tabs").addClass("hide");
				$(".nav-hide span").text("keyboard_double_arrow_down");
				$(".nav-hide").css("transform", "translateY(-60px)");
			}
			else{
				$(".nav-tabs").removeClass("hide");
				$(".nav-hide span").text("keyboard_double_arrow_up");
				$(".nav-hide").css("transform", "translateY(-4px)");
			}
		}
	}
});

$("#tab-pane2 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile2(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane3 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile3(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane4 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile4(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane5 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile5(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane6 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile6(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane7 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile7(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane8 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile8(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane9 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile9(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane10 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile10(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane11 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile11(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane12 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile12(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane13 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile13(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane14 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile14(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane15 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile15(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane16 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile16(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane17 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile17(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane18 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile18(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane19 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile19(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane20 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile20(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane21 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile21(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane22 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile22(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane23 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile23(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane24 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile24(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$("#tab-pane25 .screen-container").on("drop", function(e) {
	e.preventDefault();
	var file = e.originalEvent.dataTransfer.files[0];
	dropFile25(file);
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
});

$(document).ready(function(){
	$('#load input[type="file"]').change(function (e) {
		const file = e.target.files[0],
			extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
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
			
			if(playing == "youtube"){
				minitube(file);
			}
			else{
				player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
			}
			
			$(".text").css("display", "none");
		}
		else{
			miniLoad(file);
		}
	});
	
	$('#load2 input[type="file"]').change(function (e) {
		const presets = e.target.files;
		$(".nav-hide, .plus, .tab-pane.active .plyr, .remove").remove();
		$(".tab-pane.active textarea").css("display", "block");
		$(".tab-pane.active .preset-title").empty();
		var tabs = $(".nav").children().length,
			files = [];
		
		if(presets.length > 1){
			$(".tab-pane textarea").text("").val("");
			$(".tab-pane code, .preset-title").empty();
		}
			
		if(presets.length == 1){
			var extension = presets[0].name.substr( (presets[0].name.lastIndexOf('.') +1) );
		
			if(extension == "mp4" || extension == "mp3" || extension == "txt"){
				const playing = (extension == "mp4") ? "video" : (extension == "mp3") ? "audio" : "youtube";
				
				if(playing == "youtube"){
					youtube(presets, 2);
				}
				else{
					video(2, presets, 1, extension, playing);
					
					$(".tab-pane.active textarea").css("display", "none");
				}
			}
			else{
				loadFile(presets, presets.length, parseInt($(".tab-pane.active").attr("id").replace("tab-pane", "")));
			}
			
			$(".nav-link.active").parents(".nav-item").removeClass("empty");
		}
		if(presets.length > 1 && (extension != "mp4" && extension != "mp3")){
			loadFile(presets, presets.length, 1);
			 
			if(presets.length >= 2){
				loadFile(presets, presets.length, 2);
			}
			if(presets.length >= 3){
				loadFile(presets, presets.length, 3);
			}
			if(presets.length >= 4){
				loadFile(presets, presets.length, 4);
			}
			if(presets.length >= 5){
				 loadFile(presets, presets.length, 5);
			}
			if(presets.length >= 6){
				 loadFile(presets, presets.length, 6);
			}
			if(presets.length >= 7){
				 loadFile(presets, presets.length, 7);
			}
			if(presets.length >= 8){
				 loadFile(presets, presets.length, 8);
			}
			if(presets.length >= 9){
				 loadFile(presets, presets.length, 9);
			}
			if(presets.length >= 10){
				 loadFile(presets, presets.length, 10);
			}
			if(presets.length >= 11){
				 loadFile(presets, presets.length, 11);
			}
			if(presets.length >= 12){
				 loadFile(presets, presets.length, 12);
			}
			if(presets.length >= 13){
				 loadFile(presets, presets.length, 13);
			}
			if(presets.length >= 14){
				 loadFile(presets, presets.length, 14);
			}
			if(presets.length >= 15){
				 loadFile(presets, presets.length, 15);
			}
			if(presets.length >= 16){
				 loadFile(presets, presets.length, 16);
			}
			if(presets.length >= 17){
				 loadFile(presets, presets.length, 17);
			}
			if(presets.length >= 18){
				 loadFile(presets, presets.length, 18);
			}
			if(presets.length >= 19){
				 loadFile(presets, presets.length, 19);
			}
			if(presets.length >= 20){
				 loadFile(presets, presets.length, 20);
			}
			if(presets.length >= 21){
				 loadFile(presets, presets.length, 21);
			}
			if(presets.length >= 22){
				 loadFile(presets, presets.length, 22);
			}
			if(presets.length >= 23){
				 loadFile(presets, presets.length, 23);
			}
			if(presets.length >= 24){
				 loadFile(presets, presets.length, 24);
			}
		}
		
		if(presets.length > 1 && $(".nav").children().length == 0){
			$(".text-wrap").append('<ul class="nav nav-tabs" id="myTab" role="tablist"></ul>');
		}
	  
		if(presets.length <= 24){
			for (var i=0; i< presets.length;i++){
				if(presets.length > 1){
					if($(".nav").children().length < presets.length){
						if(i == 0 && $(".nav").children().length == 0){
							$(".nav.nav-tabs").append('<li class="nav-item" role="presentation"><button class="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#tab-pane1" type="button" role="tab" aria-controls="tab-pane1" aria-selected="true">1</button></li>');
						}
						else if(presets.length == 24){
							$(".nav.nav-tabs").append('<li class="nav-item" role="presentation"><button class="nav-link" id="tab'+(tabs+(i+1))+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+(tabs+(i+1))+'" type="button" role="tab" aria-controls="tab-pane'+(tabs+(i+1))+'" aria-selected="true">'+(tabs+(i+1))+'</button></li>');
							$(".nav-item").removeClass("empty");
						}
						else{
							$(".nav.nav-tabs").append('<li class="nav-item" role="presentation"><button class="nav-link" id="tab'+(tabs+(i+1))+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+(tabs+(i+1))+'" type="button" role="tab" aria-controls="tab-pane'+(tabs+(i+1))+'" aria-selected="true">'+(tabs+(i+1))+'</button></li>');
							$(".nav-tabs #tab"+(i+1)).parents(".nav-item").removeClass("empty");
						}
					}
				}
			}
		}
		else if(presets.length > 24){
			if($(".nav").children().length == 0){
				for (var i=0; i<24;i++){
					$(".nav-item").removeClass("empty");
					if(i == 0 && $(".nav").children().length == 0){
						$(".nav.nav-tabs").append('<li class="nav-item" role="presentation"><button class="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#tab-pane1" type="button" role="tab" aria-controls="tab-pane1" aria-selected="true">1</button></li>');
					}
					else{
						$(".nav.nav-tabs").append('<li class="nav-item" role="presentation"><button class="nav-link" id="tab'+(i+1)+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+(i+1)+'" type="button" role="tab" aria-controls="tab-pane'+(i+1)+'" aria-selected="true">'+(i+1)+'</button></li>');
					}
				}
			}
			else{
				for (var i=0; i<(24 - tabs);i++){
					$(".nav-item").removeClass("empty");
					$(".nav.nav-tabs").append('<li class="nav-item" role="presentation"><button class="nav-link" id="tab'+parseInt(tabs+(i+1))+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+parseInt(tabs+(i+1))+'" type="button" role="tab" aria-controls="tab-pane'+parseInt(tabs+(i+1))+'" aria-selected="true">'+parseInt(tabs+(i+1))+'</button></li>');
				}
			}
			
			for (var i=0; i<24;i++){
				files[i] = presets[i];
				dropFile2(files);
			}
		}
		
		if(tabs > 1 || presets.length > 1){
			$(".nav-tabs").append('<div class="plus nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Plus 1" role="presentation"><span class="material-symbols-outlined nav-link" aria-selected="false" tabindex="-1" role="tab">exposure_plus_1</span></div>');
			$(".nav-tabs").append('<div class="remove nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Remove Tabs"><span class="material-symbols-outlined nav-link">close_small</span></div>');
			
			const tooltip = new bootstrap.Tooltip($('.plus'));
			const tooltip2 = new bootstrap.Tooltip($('.remove'));
			
			if($(".nav-tabs .nav-link").length < 26){
				$(".plus").on('click', function(){
					extraTab();
					$(this).children('span').blur();
				});
			}
			
			$(".remove").on('click', function(){
				removeTabs();
			});
			
			if($(".nav-hide").length == 0){
				$(".text-wrap .text-box:nth-child(2)").append('<div class="nav-hide"><span class="material-symbols-outlined">keyboard_double_arrow_up</span></div>');
				
				$(".nav-hide").on('click', function(){
					navHide();
				});
				
				if(dots == "hidden"){
					$(".nav-tabs").addClass("hide");
					$(".nav-hide span").text("keyboard_double_arrow_down");
					$(".nav-hide").css("transform", "translateY(-60px)");
				}
				else{
					$(".nav-tabs").removeClass("hide");
					$(".nav-hide span").text("keyboard_double_arrow_up");
					$(".nav-hide").css("transform", "translateY(-4px)");
				}
			}
		}
		
		$('#load2 input[type="file"]').val("");
		$(this).blur();
	});
});