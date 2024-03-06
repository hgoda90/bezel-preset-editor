function dropfile(file) {
	var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".mini .plyr").remove();
		
	if(extension == "mp4" && $(".mini video").length == 0){
		$(".mini .screen-container").append('<video controls crossorigin playsinline id="player"></video>');
	}
	else if(extension == "mp3" && $(".mini audio").length == 0){
		$(".mini .screen-container").append('<audio controls crossorigin playsinline id="player"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".mini textarea").css("display", "none");
	}
	else{
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText.value = e.target.result;updateCode();};
	  reader.readAsText(file, "UTF-8");
	}
}

function dropfile2(file) {
	if(file.length == 1){
		var extension = file[0].name.substr( (file[0].name.lastIndexOf('.') +1) ),
			input = URL.createObjectURL(file[0]);
			
		$(".tab-pane.active .plyr").remove();
		$(".tab-pane.active .preset-title").empty();
			
		if(extension == "mp4" && $(".tab-pane.active video").length == 0){
			$("#dropText2").parents(".screen-container").append('<video controls crossorigin playsinline id="player2"></video>');
		}
		else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
			$("#dropText2").parents(".screen-container").append('<audio controls crossorigin playsinline id="player2"></audio>');
		}
		
		if(extension == "mp4" || extension == "mp3"){
			const playing = (extension == "mp4") ? "video" : "audio";
			
			const player = new Plyr('#player2', {autoplay: true,invertTime: false});
			
			window.player = player;
			
			player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
			
			$(".tab-pane.active textarea").css("display", "none");
			
			$(".nav-link").on('click', function(){
				player.pause();
			});
		}
		else{
			var reader = new FileReader();
			 reader.onload = function(e) {dropText2.value;updateCode();updateCode2();};
			 reader.readAsText(file[0], "UTF-8");
			 $("#preset1").text(file[0].name.replace(".params", "").replace(".slangp", ""));
		}
		
		$(".nav-link.active").parents(".nav-item").removeClass("empty");
	}
	if(file.length == 2){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText3.value = e.target.result;updateCode3();};
		 reader.readAsText(file[1], "UTF-8");
		 $("#preset2").text(file[1].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 3){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText4.value = e.target.result;updateCode4();};
		 reader.readAsText(file[2], "UTF-8");
		 $("#preset3").text(file[2].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 4){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText5.value = e.target.result;updateCode5();};
		 reader.readAsText(file[3], "UTF-8");
		 $("#preset4").text(file[3].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 5){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText6.value = e.target.result;updateCode6();};
		 reader.readAsText(file[4], "UTF-8");
		 $("#preset5").text(file[4].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 6){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText7.value = e.target.result;updateCode7();};
		 reader.readAsText(file[5], "UTF-8");
		 $("#preset6").text(file[5].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 7){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText8.value = e.target.result;updateCode8();};
		 reader.readAsText(file[6], "UTF-8");
		 $("#preset7").text(file[6].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 8){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText9.value = e.target.result;updateCode9();};
		 reader.readAsText(file[7], "UTF-8");
		 $("#preset8").text(file[7].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 9){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText10.value = e.target.result;updateCode10();};
		 reader.readAsText(file[8], "UTF-8");
		 $("#preset9").text(file[8].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 10){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText11.value = e.target.result;updateCode11();};
		 reader.readAsText(file[9], "UTF-8");
		 $("#preset10").text(file[9].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 11){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText12.value = e.target.result;updateCode12();};
		 reader.readAsText(file[10], "UTF-8");
		 $("#preset11").text(file[10].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 12){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText13.value = e.target.result;updateCode13();};
		 reader.readAsText(file[11], "UTF-8");
		 $("#preset12").text(file[11].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 13){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText14.value = e.target.result;updateCode14();};
		 reader.readAsText(file[12], "UTF-8");
		 $("#preset13").text(file[12].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 14){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText15.value = e.target.result;updateCode15();};
		 reader.readAsText(file[13], "UTF-8");
		 $("#preset14").text(file[13].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 15){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText16.value = e.target.result;updateCode16();};
		 reader.readAsText(file[14], "UTF-8");
		 $("#preset15").text(file[14].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 16){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText17.value = e.target.result;updateCode17();};
		 reader.readAsText(file[15], "UTF-8");
		 $("#preset16").text(file[15].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 17){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText18.value = e.target.result;updateCode18();};
		 reader.readAsText(file[16], "UTF-8");
		 $("#preset17").text(file[16].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 18){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText19.value = e.target.result;updateCode19();};
		 reader.readAsText(file[17], "UTF-8");
		 $("#preset18").text(file[17].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 19){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText20.value = e.target.result;updateCode20();};
		 reader.readAsText(file[18], "UTF-8");
		 $("#preset19").text(file[18].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 20){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText21.value = e.target.result;updateCode21();};
		 reader.readAsText(file[19], "UTF-8");
		 $("#preset20").text(file[19].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 21){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText22.value = e.target.result;updateCode22();};
		 reader.readAsText(file[20], "UTF-8");
		 $("#preset21").text(file[20].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 22){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText23.value = e.target.result;updateCode23();};
		 reader.readAsText(file[21], "UTF-8");
		 $("#preset22").text(file[21].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 23){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText24.value = e.target.result;updateCode24();};
		 reader.readAsText(file[22], "UTF-8");
		 $("#preset23").text(file[22].name.replace(".params", "").replace(".slangp", ""));
	}
	if(file.length == 24){
		 var reader = new FileReader();
		 reader.onload = function(e) {dropText25.value = e.target.result;updateCode25();};
		 reader.readAsText(file[23], "UTF-8");
		 $("#preset24").text(file[23].name.replace(".params", "").replace(".slangp", ""));
	}
	
	$(".nav").removeClass("empty");
}

function dropfile3(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText3").parents(".screen-container").append('<video controls crossorigin playsinline id="player3"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText3").parents(".screen-container").append('<audio controls crossorigin playsinline id="player3"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player3', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText4.value = e.target.result;updateCode4();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset2").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
	
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile4(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText4").parents(".screen-container").append('<video controls crossorigin playsinline id="player4"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText4").parents(".screen-container").append('<audio controls crossorigin playsinline id="player4"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player4', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText4.value = e.target.result;updateCode4();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset3").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile5(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText5").parents(".screen-container").append('<video controls crossorigin playsinline id="player5"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText5").parents(".screen-container").append('<audio controls crossorigin playsinline id="player5"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player5', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText5.value = e.target.result;updateCode5();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset4").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile6(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText6").parents(".screen-container").append('<video controls crossorigin playsinline id="player6"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText6").parents(".screen-container").append('<audio controls crossorigin playsinline id="player6"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player6', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText6.value = e.target.result;updateCode6();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset5").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile7(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText7").parents(".screen-container").append('<video controls crossorigin playsinline id="player7"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText7").parents(".screen-container").append('<audio controls crossorigin playsinline id="player7"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player7', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText7.value = e.target.result;updateCode7();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset6").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile8(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText8").parents(".screen-container").append('<video controls crossorigin playsinline id="player8"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText8").parents(".screen-container").append('<audio controls crossorigin playsinline id="player8"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player8', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText8.value = e.target.result;updateCode8();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset7").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile9(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText9").parents(".screen-container").append('<video controls crossorigin playsinline id="player9"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText9").parents(".screen-container").append('<audio controls crossorigin playsinline id="player9"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player9', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText9.value = e.target.result;updateCode9();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset8").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile10(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText10").parents(".screen-container").append('<video controls crossorigin playsinline id="player10"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText10").parents(".screen-container").append('<audio controls crossorigin playsinline id="player10"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player10', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText10.value = e.target.result;updateCode10();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset9").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile11(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText11").parents(".screen-container").append('<video controls crossorigin playsinline id="player11"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText11").parents(".screen-container").append('<audio controls crossorigin playsinline id="player11"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player11', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText11.value = e.target.result;updateCode11();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset10").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile12(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText12").parents(".screen-container").append('<video controls crossorigin playsinline id="player12"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText12").parents(".screen-container").append('<audio controls crossorigin playsinline id="player12"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player12', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText12.value = e.target.result;updateCode12();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset11").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile13(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText13").parents(".screen-container").append('<video controls crossorigin playsinline id="player13"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText13").parents(".screen-container").append('<audio controls crossorigin playsinline id="player13"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player13', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText13.value = e.target.result;updateCode13();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset12").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile14(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText14").parents(".screen-container").append('<video controls crossorigin playsinline id="player14"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText14").parents(".screen-container").append('<audio controls crossorigin playsinline id="player14"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player14', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText14.value = e.target.result;updateCode14();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset13").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile15(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText15").parents(".screen-container").append('<video controls crossorigin playsinline id="player15"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText15").parents(".screen-container").append('<audio controls crossorigin playsinline id="player15"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player15', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText15.value = e.target.result;updateCode15();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset14").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile16(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText16").parents(".screen-container").append('<video controls crossorigin playsinline id="player16"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText16").parents(".screen-container").append('<audio controls crossorigin playsinline id="player16"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player16', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText16.value = e.target.result;updateCode16();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset15").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile17(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText17").parents(".screen-container").append('<video controls crossorigin playsinline id="player17"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText17").parents(".screen-container").append('<audio controls crossorigin playsinline id="player17"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player17', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText17.value = e.target.result;updateCode17();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset16").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile18(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText18").parents(".screen-container").append('<video controls crossorigin playsinline id="player18"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText18").parents(".screen-container").append('<audio controls crossorigin playsinline id="player18"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player18', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText18.value = e.target.result;updateCode18();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset17").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile19(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText19").parents(".screen-container").append('<video controls crossorigin playsinline id="player19"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText19").parents(".screen-container").append('<audio controls crossorigin playsinline id="player19"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player19', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText19.value = e.target.result;updateCode19();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset18").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile20(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText20").parents(".screen-container").append('<video controls crossorigin playsinline id="player20"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText20").parents(".screen-container").append('<audio controls crossorigin playsinline id="player20"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player20', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText20.value = e.target.result;updateCode20();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset19").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile21(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText21").parents(".screen-container").append('<video controls crossorigin playsinline id="player21"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText21").parents(".screen-container").append('<audio controls crossorigin playsinline id="player21"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player21', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText21.value = e.target.result;updateCode21();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset20").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile22(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText22").parents(".screen-container").append('<video controls crossorigin playsinline id="player22"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText22").parents(".screen-container").append('<audio controls crossorigin playsinline id="player22"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player22', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText22.value = e.target.result;updateCode22();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset21").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile23(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText23").parents(".screen-container").append('<video controls crossorigin playsinline id="player23"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText23").parents(".screen-container").append('<audio controls crossorigin playsinline id="player23"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player23', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText23.value = e.target.result;updateCode23();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset22").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile24(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText24").parents(".screen-container").append('<video controls crossorigin playsinline id="player24"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText24").parents(".screen-container").append('<audio controls crossorigin playsinline id="player24"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player24', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText24.value = e.target.result;updateCode24();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset23").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

function dropfile25(file) {
  var extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
		input = URL.createObjectURL(file);
		
	$(".tab-pane.active .plyr").remove();
	$(".tab-pane.active .preset-title").empty();
		
	if(extension == "mp4" && $(".tab-pane.active video").length == 0){
		$("#dropText25").parents(".screen-container").append('<video controls crossorigin playsinline id="player25"></video>');
	}
	else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
		$("#dropText25").parents(".screen-container").append('<audio controls crossorigin playsinline id="player25"></audio>');
	}
	
	if(extension == "mp4" || extension == "mp3"){
		const playing = (extension == "mp4") ? "video" : "audio";
		
		const player = new Plyr('#player25', {autoplay: true,invertTime: false});
		
		window.player = player;
		
		player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
		
		$(".tab-pane.active textarea").css("display", "none");
			
		$(".nav-link").on('click', function(){
			player.pause();
		});
	}
	else{  
	  var reader = new FileReader();
	  reader.onload = function(e) {dropText25.value = e.target.result;updateCode25();};
	  reader.readAsText(file, "UTF-8");
	  $("#preset24").text(file.name.replace(".params", "").replace(".slangp", ""));
  }
  
	$(".nav-link.active").parents(".nav-item").removeClass("empty");
}

dropText.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile(file);};
dropText2.ondrop = function(e) {
	e.preventDefault();
	const files = [];
	var tabs = $(".nav").children().length;
	$(".text-wrap .text-box:nth-child(2) textarea").text("").val("");
	$(".preset-title, code").empty();
	$(".nav-hide, .plus, .remove").remove();
  
	if(e.dataTransfer.files.length > 1 && $(".nav").children().length == 0){
		$(".text-wrap").append('<ul class="nav nav-tabs" id="myTab" role="tablist"></ul>');
	}
  
	if(e.dataTransfer.files.length <= 24){
		for (var i=0; i< e.dataTransfer.files.length;i++){
			files[i] = e.dataTransfer.files[i];
			dropfile2(files);
			if(e.dataTransfer.files.length > 1){
				if($(".nav").children().length < e.dataTransfer.files.length){
					if(i == 0 && $(".nav").children().length == 0){
						$(".nav.nav-tabs").append('<li class="nav-item" role="presentation"><button class="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#tab-pane1" type="button" role="tab" aria-controls="tab-pane1" aria-selected="true">1</button></li>');
					}
					else if(e.dataTransfer.files.length == 24){
						$(".nav.nav-tabs").append('<li class="nav-item" role="presentation"><button class="nav-link" id="tab'+(tabs+(i+1))+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+(tabs+(i+1))+'" type="button" role="tab" aria-controls="tab-pane'+(tabs+(i+1))+'" aria-selected="true">'+(tabs+(i+1))+'</button></li>');
						$(".nav-item").removeClass("empty");
					}
					else{
						$(".nav.nav-tabs").append('<li class="nav-item" role="presentation"><button class="nav-link" id="tab'+(tabs+(i+1))+'" data-bs-toggle="tab" data-bs-target="#tab-pane'+(tabs+(i+1))+'" type="button" role="tab" aria-controls="tab-pane'+(tabs+(i+1))+'" aria-selected="true">'+(tabs+(i+1))+'</button></li>');
						$(".nav-tabs #tab"+(i+1)).parents(".nav-item").removeClass("empty");
					}
				}
				else{
					$(".nav-tabs #tab"+(i+1)).parents(".nav-item").removeClass("empty");
					$(".nav-tabs #tab"+(i+1)).parents(".nav-item").nextAll().addClass("empty");
				}
			}
			else if($(".nav").children().length > 1){
				$(".nav-tabs #tab"+(i+1)).parents(".nav-item").nextAll().addClass("empty");
			}
		}
	}
	else if(e.dataTransfer.files.length > 24){
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
			files[i] = e.dataTransfer.files[i];
			dropfile2(files);
		}
	}
	
	if(e.dataTransfer.files.length > 1){
		$(".nav-tabs").append('<div class="plus nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Plus 1" role="presentation"><span class="material-symbols-outlined nav-link" aria-selected="false" tabindex="-1" role="tab">exposure_plus_1</span></div>');
	
		const tooltip = new bootstrap.Tooltip($('.plus'));
		
		if($(".nav-tabs .nav-link").length < 26){
			$(".plus").on('click', function(){
				extraTab();
				$(this).children('span').blur();
			});
		}
	
		if($(".nav").children().length > 0){
			$(".nav-tabs").append('<div class="remove nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Remove Tabs"><span class="material-symbols-outlined nav-link">close_small</span></div>');
			
			const tooltip = new bootstrap.Tooltip($('.remove'));
			
			$(".nav-hide").on('click', function(){
				navHide();
			});
			
			$(".nav-link").on('click', function(){
				var id = $(this).parents(".nav-item").index();
			});
			
			$(".remove").on('click', function(){
				removeTabs();
			});
		}
		
		if($(".nav-hide").length == 0){
			$(".text-wrap .text-box:nth-child(2)").append('<div class="nav-hide"><span class="material-symbols-outlined">keyboard_double_arrow_up</span></div>');
			
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
};
dropText3.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile3(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText4.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile4(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText5.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile5(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText6.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile6(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText7.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile7(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText8.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile8(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText9.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile9(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText10.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile10(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText11.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile11(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText12.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile12(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText13.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile13(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText14.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile14(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText15.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile15(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText16.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile16(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText17.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile17(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText18.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile18(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText19.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile19(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText20.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile20(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText21.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile21(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText22.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile22(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText23.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile23(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText24.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile24(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};
dropText25.ondrop = function(e) {e.preventDefault();var file = e.dataTransfer.files[0];dropfile25(file);$(".nav-link.active").parents(".nav-item").removeClass("empty");};

$(document).ready(function(){
	$('#load input[type="file"]').change(function (e) {
		const file = e.target.files[0],
			extension = file.name.substr( (file.name.lastIndexOf('.') +1) ),
			input = URL.createObjectURL(file);
		
		$(".mini .plyr").remove();
		
		if(extension == "mp4" && $(".mini video").length == 0){
			$(".mini .screen-container").append('<video controls crossorigin playsinline id="player"></video>');
		}
		else if(extension == "mp3" && $(".mini audio").length == 0){
			$(".mini .screen-container").append('<audio controls crossorigin playsinline id="player"></audio>');
		}
		
		if(extension == "mp4" || extension == "mp3"){
			const playing = (extension == "mp4") ? "video" : "audio";
			
			const player = new Plyr('#player', {autoplay: true,invertTime: false});
			
			window.player = player;
			
			player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
			
			$(".mini textarea").css("display", "none");
		}
		else{
			var reader = new FileReader();
			reader.onload = function (e) {$(".text").val(e.target.result).text(e.target.result);updateCode();};
		
			reader.readAsText(file);
		}
			
		$('#load input[type="file"]').val("");
		$(this).blur();
	});
	
	$('#load2 input[type="file"]').change(function (e) {
		const presets = e.target.files;
		$(".nav-hide, .plus, .tab-pane.active .plyr, .remove").remove();
		$(".tab-pane.active textarea").css("display", "block");
		$(".tab-pane.active .preset-title").empty();
		var tabs = $(".nav").children().length,
			files = [],
			extension = presets[0].name.substr( (presets[0].name.lastIndexOf('.') +1) ),
			input = URL.createObjectURL(presets[0]);
		
		if(presets.length > 1){
			$(".tab-pane textarea").text("").val("");
			$(".tab-pane code, .preset-title").empty();
		}
			
		if(presets.length == 1){
			if(extension == "mp4" && $(".tab-pane.active video").length == 0){
				$(".tab-pane.active .screen-container").append('<video controls crossorigin playsinline id="player2"></video>');
			}
			else if(extension == "mp3" && $(".tab-pane.active audio").length == 0){
				$(".tab-pane.active .screen-container").append('<audio controls crossorigin playsinline id="player2"></audio>');
			}
			
			if(extension == "mp4" || extension == "mp3"){
				const playing = (extension == "mp4") ? "video" : "audio";
				
				const player = new Plyr('#player2', {autoplay: true,invertTime: false});
				
				window.player = player;
				
				player.source = {type: playing,sources: [{src: input,type: playing+'/'+extension}]};
				
				$(".tab-pane.active textarea").css("display", "none");
				
				$(".nav-link").on('click', function(){
					player.pause();
				});
			}
			else{
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".active textarea").val(e.target.result).text(e.target.result);update();};
				 reader.readAsText(presets[0], "UTF-8");
				 $(".tab-pane.active .preset-title").text(presets[0].name.replace(".params", "").replace(".slangp", ""));
			}
			
			$(".nav-link.active").parents(".nav-item").removeClass("empty");
		}
		if(presets.length > 1 || $(".active .text2").length == 1 && (extension != "mp4" && extension != "mp3")){
			 var reader = new FileReader();
			 reader.onload = function(e) {$(".text2").val(e.target.result).text(e.target.result);updateCode();updateCode2();};
			 reader.readAsText(presets[0], "UTF-8");
			 $("#preset1").text(presets[0].name.replace(".params", "").replace(".slangp", ""));
			 
			if(presets.length >= 2 || $(".active .text3").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text3").val(e.target.result).text(e.target.result);updateCode3();};
				 if($(".active .text3").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset2").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[1], "UTF-8");$("#preset2").text(presets[1].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 3 || $(".active .text4").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text4").val(e.target.result).text(e.target.result);updateCode4();};
				 if($(".active .text4").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset3").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[2], "UTF-8");$("#preset3").text(presets[2].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 4 || $(".active .text5").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text5").val(e.target.result).text(e.target.result);updateCode5();};
				 if($(".active .text5").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset4").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[3], "UTF-8");$("#preset4").text(presets[3].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 5 || $(".active .text6").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text6").val(e.target.result).text(e.target.result);updateCode6();};
				 if($(".active .text6").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset5").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[4], "UTF-8");$("#preset5").text(presets[4].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 6 || $(".active .text7").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text7").val(e.target.result).text(e.target.result);updateCode7();};
				 if($(".active .text7").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset6").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[5], "UTF-8");$("#preset6").text(presets[5].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 7 || $(".active .text8").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text8").val(e.target.result).text(e.target.result);updateCode8();};
				 if($(".active .text8").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset7").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[6], "UTF-8");$("#preset7").text(presets[6].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 8 || $(".active .text9").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text9").val(e.target.result).text(e.target.result);updateCode9();};
				 if($(".active .text9").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset8").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[7], "UTF-8");$("#preset8").text(presets[7].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 9 || $(".active .text10").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text10").val(e.target.result).text(e.target.result);updateCode10();};
				 if($(".active .text10").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset9").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[8], "UTF-8");$("#preset9").text(presets[8].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 10 || $(".active .text11").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text11").val(e.target.result).text(e.target.result);updateCode11();};
				 if($(".active .text11").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset10").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[9], "UTF-8");$("#preset10").text(presets[9].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 11 || $(".active .text12").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text12").val(e.target.result).text(e.target.result);updateCode12();};
				 if($(".active .text12").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset11").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[10], "UTF-8");$("#preset11").text(presets[10].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 12 || $(".active .text13").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text13").val(e.target.result).text(e.target.result);updateCode13();};
				 if($(".active .text13").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset12").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[11], "UTF-8");$("#preset12").text(presets[11].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 13 || $(".active .text14").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text14").val(e.target.result).text(e.target.result);updateCode14();};
				 if($(".active .text14").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset13").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[12], "UTF-8");$("#preset13").text(presets[12].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 14 || $(".active .text15").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text15").val(e.target.result).text(e.target.result);updateCode15();};
				 if($(".active .text15").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset14").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[13], "UTF-8");$("#preset14").text(presets[13].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 15 || $(".active .text16").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text16").val(e.target.result).text(e.target.result);updateCode16();};
				 if($(".active .text16").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset15").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[14], "UTF-8");$("#preset15").text(presets[14].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 16 || $(".active .text17").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text17").val(e.target.result).text(e.target.result);updateCode17();};
				 if($(".active .text17").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset16").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[15], "UTF-8");$("#preset16").text(presets[15].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 17 || $(".active .text18").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text18").val(e.target.result).text(e.target.result);updateCode18();};
				 if($(".active .text18").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset17").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[16], "UTF-8");$("#preset17").text(presets[16].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 18 || $(".active .text19").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text19").val(e.target.result).text(e.target.result);updateCode19();};
				 if($(".active .text19").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset18").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[17], "UTF-8");$("#preset18").text(presets[17].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 19 || $(".active .text20").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text20").val(e.target.result).text(e.target.result);updateCode20();};
				 if($(".active .text20").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset19").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[18], "UTF-8");$("#preset19").text(presets[18].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 20 || $(".active .text21").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text21").val(e.target.result).text(e.target.result);updateCode21();};
				 if($(".active .text21").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset20").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[19], "UTF-8");$("#preset20").text(presets[19].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 21 || $(".active .text22").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text22").val(e.target.result).text(e.target.result);updateCode22();};
				 if($(".active .text22").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset21").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[20], "UTF-8");$("#preset21").text(presets[20].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 22 || $(".active .text23").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text23").val(e.target.result).text(e.target.result);updateCode23();};
				 if($(".active .text23").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset22").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[21], "UTF-8");$("#preset22").text(presets[21].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 23 || $(".active .text24").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text24").val(e.target.result).text(e.target.result);updateCode24();};
				 if($(".active .text24").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset23").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[22], "UTF-8");$("#preset23").text(presets[22].name.replace(".params", "").replace(".slangp", ""));}
			}
			if(presets.length >= 24 || $(".active .text25").length == 1 && presets.length == 1){
				 var reader = new FileReader();
				 reader.onload = function(e) {$(".text25").val(e.target.result).text(e.target.result);updateCode25();};
				 if($(".active .text25").length == 1 && presets.length == 1){reader.readAsText(presets[0], "UTF-8");$("#preset24").text(presets[0].name.replace(".params", "").replace(".slangp", ""));}
				 else{reader.readAsText(presets[23], "UTF-8");$("#preset24").text(presets[23].name.replace(".params", "").replace(".slangp", ""));}
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
					else{
						$(".nav-tabs #tab"+(i+1)).parents(".nav-item").removeClass("empty");
						$(".nav-tabs #tab"+(i+1)).parents(".nav-item").nextAll().addClass("empty");
					}
				}
				else if($(".nav").children().length > 1 && presets.length == 1){
					$(".nav-link.active").removeClass("empty");
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
				dropfile2(files);
			}
		}
		
		if(presets.length > 1 || $(".nav-tabs").children().length > 1){
			$(".nav-tabs").append('<div class="plus nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Plus 1" role="presentation"><span class="material-symbols-outlined nav-link" aria-selected="false" tabindex="-1" role="tab">exposure_plus_1</span></div>');
		
			const tooltip = new bootstrap.Tooltip($('.plus'));
			
			if($(".nav-tabs .nav-link").length < 26){
				$(".plus").on('click', function(){
					extraTab();
					$(this).children('span').blur();
				});
			}
			
			if($(".nav").children().length > 1){
				$(".nav-tabs").append('<div class="remove nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Remove Tabs"><span class="material-symbols-outlined nav-link">close_small</span></div>');
				
				const exampleEl = $('.remove')
				const tooltip = new bootstrap.Tooltip(exampleEl);
				
				$(".nav-hide").on('click', function(){
					navHide();
				});
				
				$(".nav-link").on('click', function(){
					var id = $(this).parents(".nav-item").index();
				});
				
				$(".remove").on('click', function(){
					removeTabs();
				});
			}
			
			if($(".nav-hide").length == 0){
				$(".text-wrap .text-box:nth-child(2)").append('<div class="nav-hide"><span class="material-symbols-outlined">keyboard_double_arrow_up</span></div>');
			
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