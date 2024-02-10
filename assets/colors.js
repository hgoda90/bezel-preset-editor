function sampleColors() {
	if(colorFormat == "RGB"){
		$(".sample").each(function(element){
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
				case "n64":
					$(this).find(".colors").append("<div class='color' data-code='rgb(199, 195, 197)' style='background: rgb(199, 195, 197);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(131, 105, 135)' style='background: rgb(131, 105, 135);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(66, 64, 65)' style='background: rgb(66, 64, 65);'></div>");
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
		$(".sample").each(function(){
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
				case "n64":
					$(this).find(".colors").append("<div class='color' data-code='#C7C3C5' style='background: #C7C3C5;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#836987' style='background: #836987;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#424041' style='background: #424041;'></div>");
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
}

function colorMessage(colors) {
	if(colorFormat == "HEX"){
		switch(colors){
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
			case "424041":
			case "836987":
			case "C7C3C5":
				$(".message").text("Nintendo 64");
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
	else{
		switch(colors){
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
			case "rgb(66, 64, 65)":
			case "rgb(131, 105, 135)":
			case "rgb(199, 195, 197)":
				$(".message").text("Nintendo 64");
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
}
