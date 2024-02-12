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
					$(this).find(".colors").append("<div class='color' data-code='rgb(189, 186, 177)' style='background: rgb(189, 186, 177);'></div>");
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
					$(this).find(".colors").append("<div class='color' data-code='rgb(9, 178, 207)' style='background: rgb(9, 178, 207);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(28, 128, 179)' style='background: rgb(28, 128, 179);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(47, 79, 152)' style='background: rgb(47, 79, 152);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(33, 33, 41)' style='background: rgb(33, 33, 41);'></div>");
					break;
				case "snes":
					$(this).find(".colors").append("<div class='color' data-code='rgb(181, 182, 228)' style='background: rgb(181, 182, 228);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(85, 58, 153)' style='background: rgb(85, 58, 153);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(144, 138, 153)' style='background: rgb(144, 138, 153);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='rgb(209, 209, 209)' style='background: rgb(209, 209, 209);'></div>");
					break;
			}
		});
		$(".color-code").css("text-align", "center");
	}
	else if (colorFormat == "HSB"){
		$(".sample").each(function(element){
			switch($(this).attr("id")){
				case "a26":
					$(this).find(".colors").append("<div class='color' data-code='hsb(0deg, 3%, 14%)' style='background: rgb(36, 35, 35);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(29deg, 50%, 58%)' style='background: rgb(148, 110, 74);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(28deg, 80%, 100%)' style='background: rgb(255, 146, 51);'></div>");
					break;
				case "dc":
					$(this).find(".colors").append("<div class='color' data-code='hsb(26deg, 79%, 93%)' style='background: rgb(237, 131, 50);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(11deg, 92%, 81%)' style='background: rgb(207, 51, 17);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(214deg, 70%, 76%)' style='background: rgb(58, 117, 194);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(45deg, 6%, 74%)' style='background: rgb(189, 186, 177);'></div>");
					break;
				case "gc":
					$(this).find(".colors").append("<div class='color' data-code='hsb(250deg, 47%, 50%)' style='background: rgb(78, 68, 128);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(0deg, 0%, 15%)' style='background: rgb(38, 38, 38);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(0deg, 0%, 68%)' style='background: rgb(173, 173, 173);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(24deg, 88%, 100%)' style='background: rgb(255, 120, 31);'></div>");
					break;
				case "n64":
					$(this).find(".colors").append("<div class='color' data-code='hsb(330deg, 2%, 78%)' style='background: rgb(199, 195, 197);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(292deg, 22%, 53%)' style='background: rgb(131, 105, 135);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(330deg, 3%, 26%)' style='background: rgb(66, 64, 65);'></div>");
					break;
				case "nes":
					$(this).find(".colors").append("<div class='color' data-code='hsb(0deg, 0%, 90%)' style='background: rgb(229, 229, 229);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(0deg, 2%, 65%)' style='background: rgb(165, 162, 162);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(0deg, 8%, 5%)' style='background: rgb(13, 12, 12);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(0deg, 86%, 87%)' style='background: rgb(221, 32, 32);'></div>");
					break;
				case "ps":
					$(this).find(".colors").append("<div class='color' data-code='hsb(340deg, 2%, 66%)' style='background: rgb(168, 165, 166);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(220deg, 10%, 93%)' style='background: rgb(213, 221, 237);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(221deg, 68%, 36%)' style='background: rgb(29, 49, 92);'></div>");
					break;
				case "ps2":
					$(this).find(".colors").append("<div class='color' data-code='hsb(189deg, 96%, 81%)' style='background: rgb(9, 178, 207);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(200deg, 84%, 70%)' style='background: rgb(28, 128, 179);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(222deg, 69%, 60%)' style='background: rgb(47, 79, 152);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(240deg, 20%, 16%)' style='background: rgb(33, 33, 41);'></div>");
					break;
				case "snes":
					$(this).find(".colors").append("<div class='color' data-code='hsb(239deg, 21%, 89%)' style='background: rgb(181, 182, 228);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(257deg, 62%, 60%)' style='background: rgb(85, 58, 153);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(264deg, 10%, 60%)' style='background: rgb(144, 138, 153);'></div>");
					$(this).find(".colors").append("<div class='color' data-code='hsb(0deg, 0%, 82%)' style='background: rgb(209, 209, 209);'></div>");
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
					$(this).find(".colors").append("<div class='color' data-code='#BDBAB1' style='background: #BDBAB1;'></div>");
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
					$(this).find(".colors").append("<div class='color' data-code='#09B2CF' style='background: #09B2CF;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#1C80B3' style='background: #1C80B3;'></div>");
					$(this).find(".colors").append("<div class='color' data-code='#2F4F98' style='background: #2F4F98;'></div>");
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
			case "BDBAB1":
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
			case "212129":
			case "2A5FA3":
			case "2F4F98":
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
	else if (colorFormat == "HSB"){
		switch(colors){
			case "hsb(0deg, 3%, 14%)":
			case "hsb(28deg, 80%, 100%)":
			case "hsb(29deg, 50%, 58%)":
				$(".message").text("Atari 2600");
				$(".message").addClass("info");
				break;
			case "hsb(11deg, 92%, 81%)":
			case "hsb(26deg, 79%, 93%)":
			case "hsb(45deg, 6%, 74%)":
			case "hsb(214deg, 70%, 76%)":
				$(".message").text("Dreamcast");
				$(".message").addClass("info");
				break;
			case "hsb(0deg, 0%, 15%)":
			case "hsb(0deg, 0%, 68%)":
			case "hsb(24deg, 88%, 100%)":
			case "hsb(250deg, 47%, 50%)":
				$(".message").text("GameCube");
				$(".message").addClass("info");
				break;
			case "hsb(292deg, 22%, 53%)":
			case "hsb(330deg, 2%, 78%)":
			case "hsb(330deg, 3%, 26%)":
				$(".message").text("Nintendo 64");
				$(".message").addClass("info");
				break;
			case "hsb(0deg, 0%, 90%)":
			case "hsb(0deg, 2%, 65%)":
			case "hsb(0deg, 8%, 5%)":
			case "hsb(0deg, 86%, 87%)":
				$(".message").text("Nintendo Entertainment System");
				$(".message").addClass("info");
				break;
			case "hsb(220deg, 10%, 93%)":
			case "hsb(221deg, 68%, 36%)":
			case "hsb(340deg, 2%, 66%)":
				$(".message").text("PlayStation");
				$(".message").addClass("info");
				break;
			case "hsb(189deg, 96%, 81%)":
			case "hsb(200deg, 84%, 70%)":
			case "hsb(222deg, 69%, 60%)":
			case "hsb(240deg, 20%, 16%)":
				$(".message").text("PlayStation 2");
				$(".message").addClass("info");
				break;
			case "hsb(0deg, 0%, 82%)":
			case "hsb(239deg, 21%, 89%)":
			case "hsb(257deg, 62%, 60%)":
			case "hsb(264deg, 10%, 60%)":
				$(".message").text("Super Nintendo");
				$(".message").addClass("info");
				break;
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
			case "rgb(189, 186, 177)":
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
			case "rgb(9, 178, 207)":
			case "rgb(28, 128, 179)":
			case "rgb(33, 33, 41)":
			case "rgb(47, 79, 152)":
				$(".message").text("PlayStation 2");
				$(".message").addClass("info");
				break;
			case "rgb(85, 58, 153)":
			case "rgb(144, 138, 153)":
			case "rgb(181, 182, 228)":
			case "rgb(209, 209, 209)":
				$(".message").text("Super Nintendo");
				$(".message").addClass("info");
				break;
		}
	}
}
