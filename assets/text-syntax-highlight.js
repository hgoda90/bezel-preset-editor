const textarea1 = $("#dropText"), textarea2 = $("#dropText2"), textarea3 = $("#dropText3"), textarea4 = $("#dropText4"),  textarea5 = $("#dropText5"), 
	textarea6 = $("#dropText6"), textarea7 = $("#dropText7"), textarea8 = $("#dropText8"), textarea9 = $("#dropText9"),  textarea10 = $("#dropText10"), 
	textarea11 = $("#dropText11"), textarea12 = $("#dropText12"), textarea13 = $("#dropText13"), textarea14 = $("#dropText14"),  textarea15 = $("#dropText15"), 
	textarea16 = $("#dropText16"), textarea17 = $("#dropText17"), textarea18 = $("#dropText18"), textarea19 = $("#dropText19"),  textarea20 = $("#dropText20"), 
	textarea21 = $("#dropText21"), textarea22 = $("#dropText22"), textarea23 = $("#dropText23"), textarea24 = $("#dropText24"), textarea25 = $("#dropText25");

const codeBlock1 = $("#codeBlock"),  codeBlock2 = $("#codeBlock2"), codeBlock3 = $("#codeBlock3"), codeBlock4 = $("#codeBlock4"), codeBlock5 = $("#codeBlock5"),
	 codeBlock6 = $("#codeBlock6"), codeBlock7 = $("#codeBlock7"), codeBlock8 = $("#codeBlock8"), codeBlock9 = $("#codeBlock9"), codeBlock10 = $("#codeBlock10"),
	 codeBlock11 = $("#codeBlock11"), codeBlock12 = $("#codeBlock12"), codeBlock13 = $("#codeBlock13"), codeBlock14 = $("#codeBlock14"), codeBlock15 = $("#codeBlock15"),
	 codeBlock16 = $("#codeBlock16"), codeBlock17 = $("#codeBlock17"), codeBlock18 = $("#codeBlock18"), codeBlock19 = $("#codeBlock19"), codeBlock20 = $("#codeBlock20"),
	 codeBlock21 = $("#codeBlock21"), codeBlock22 = $("#codeBlock22"), codeBlock23 = $("#codeBlock23"), codeBlock24 = $("#codeBlock24"), codeBlock25 = $("#codeBlock25");

function highlightJS() {
	document.querySelectorAll('pre code').forEach((el) => {
		hljs.highlightElement(el);
	});
}

function updateCode() {let content = textarea1.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock1.html(content);codeBlock1.removeAttr('data-highlighted');highlightJS();}
function updateCode2() {let content = textarea2.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock2.html(content);codeBlock2.removeAttr('data-highlighted');highlightJS();}
function updateCode3() {let content = textarea3.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock3.html(content);codeBlock3.removeAttr('data-highlighted');highlightJS();}
function updateCode4() {let content = textarea4.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock4.html(content);codeBlock4.removeAttr('data-highlighted');highlightJS();}
function updateCode5() {let content = textarea5.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock5.html(content);codeBlock5.removeAttr('data-highlighted');highlightJS();}
function updateCode6() {let content = textarea6.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock6.html(content);codeBlock6.removeAttr('data-highlighted');highlightJS();}
function updateCode7() {let content = textarea7.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock7.html(content);codeBlock7.removeAttr('data-highlighted');highlightJS();}
function updateCode8() {let content = textarea8.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock8.html(content);codeBlock8.removeAttr('data-highlighted');highlightJS();}
function updateCode9() {let content = textarea9.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock9.html(content);codeBlock9.removeAttr('data-highlighted');highlightJS();}
function updateCode10() {let content = textarea10.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock10.html(content);codeBlock10.removeAttr('data-highlighted');highlightJS();}
function updateCode11() {let content = textarea11.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock11.html(content);codeBlock11.removeAttr('data-highlighted');highlightJS();}
function updateCode12() {let content = textarea12.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock12.html(content);codeBlock12.removeAttr('data-highlighted');highlightJS();}
function updateCode13() {let content = textarea13.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock13.html(content);codeBlock13.removeAttr('data-highlighted');highlightJS();}
function updateCode14() {let content = textarea14.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock14.html(content);codeBlock14.removeAttr('data-highlighted');highlightJS();}
function updateCode15() {let content = textarea15.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock15.html(content);codeBlock15.removeAttr('data-highlighted');highlightJS();}
function updateCode16() {let content = textarea16.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock16.html(content);codeBlock16.removeAttr('data-highlighted');highlightJS();}
function updateCode17() {let content = textarea17.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock17.html(content);codeBlock17.removeAttr('data-highlighted');highlightJS();}
function updateCode18() {let content = textarea18.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock18.html(content);codeBlock18.removeAttr('data-highlighted');highlightJS();}
function updateCode19() {let content = textarea19.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock19.html(content);codeBlock19.removeAttr('data-highlighted');highlightJS();}
function updateCode20() {let content = textarea20.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock20.html(content);codeBlock20.removeAttr('data-highlighted');highlightJS();}
function updateCode21() {let content = textarea21.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock21.html(content);codeBlock21.removeAttr('data-highlighted');highlightJS();}
function updateCode22() {let content = textarea22.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock22.html(content);codeBlock22.removeAttr('data-highlighted');highlightJS();}
function updateCode23() {let content = textarea23.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock23.html(content);codeBlock23.removeAttr('data-highlighted');highlightJS();}
function updateCode24() {let content = textarea24.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock24.html(content);codeBlock24.removeAttr('data-highlighted');highlightJS();}
function updateCode25() {let content = textarea25.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock25.html(content);codeBlock25.removeAttr('data-highlighted');highlightJS();}

textarea1.on("input", () => {updateCode()});
textarea1.on("scroll", () => {codeBlock1.scrollTop = textarea1.scrollTop;codeBlock1.scrollLeft = textarea1.scrollLeft;});
textarea2.on("input", () => {updateCode2()});
textarea2.on("scroll", () => {codeBlock2.scrollTop = textarea2.scrollTop;codeBlock2.scrollLeft = textarea2.scrollLeft;});
textarea3.on("input", () => {updateCode3()});
textarea3.on("scroll", () => {codeBlock3.scrollTop = textarea3.scrollTop;codeBlock3.scrollLeft = textarea3.scrollLeft;});
textarea4.on("input", () => {updateCode4()});
textarea4.on("scroll", () => {codeBlock4.scrollTop = textarea4.scrollTop;codeBlock4.scrollLeft = textarea4.scrollLeft;});
textarea5.on("input", () => {updateCode5()});
textarea5.on("scroll", () => {codeBlock5.scrollTop = textarea5.scrollTop;codeBlock5.scrollLeft = textarea5.scrollLeft;});
textarea6.on("input", () => {updateCode6()});
textarea6.on("scroll", () => {codeBlock6.scrollTop = textarea6.scrollTop;codeBlock6.scrollLeft = textarea6.scrollLeft;});
textarea7.on("input", () => {updateCode7()});
textarea7.on("scroll", () => {codeBlock7.scrollTop = textarea7.scrollTop;codeBlock7.scrollLeft = textarea7.scrollLeft;});
textarea8.on("input", () => {updateCode8()});
textarea8.on("scroll", () => {codeBlock8.scrollTop = textarea8.scrollTop;codeBlock8.scrollLeft = textarea8.scrollLeft;});
textarea9.on("input", () => {updateCode9()});
textarea9.on("scroll", () => {codeBlock9.scrollTop = textarea9.scrollTop;codeBlock9.scrollLeft = textarea9.scrollLeft;});
textarea10.on("input", () => {updateCode10()});
textarea10.on("scroll", () => {codeBlock10.scrollTop = textarea10.scrollTop;codeBlock10.scrollLeft = textarea10.scrollLeft;});
textarea11.on("input", () => {updateCode11()});
textarea11.on("scroll", () => {codeBlock11.scrollTop = textarea11.scrollTop;codeBlock11.scrollLeft = textarea11.scrollLeft;});
textarea12.on("input", () => {updateCode12()});
textarea12.on("scroll", () => {codeBlock12.scrollTop = textarea12.scrollTop;codeBlock12.scrollLeft = textarea12.scrollLeft;});
textarea13.on("input", () => {updateCode13()});
textarea13.on("scroll", () => {codeBlock13.scrollTop = textarea13.scrollTop;codeBlock13.scrollLeft = textarea13.scrollLeft;});
textarea14.on("input", () => {updateCode14()});
textarea14.on("scroll", () => {codeBlock14.scrollTop = textarea14.scrollTop;codeBlock14.scrollLeft = textarea14.scrollLeft;});
textarea15.on("input", () => {updateCode15()});
textarea15.on("scroll", () => {codeBlock15.scrollTop = textarea15.scrollTop;codeBlock15.scrollLeft = textarea15.scrollLeft;});
textarea16.on("input", () => {updateCode16()});
textarea16.on("scroll", () => {codeBlock16.scrollTop = textarea16.scrollTop;codeBlock15.scrollLeft = textarea16.scrollLeft;});
textarea17.on("input", () => {updateCode17()});
textarea17.on("scroll", () => {codeBlock17.scrollTop = textarea17.scrollTop;codeBlock15.scrollLeft = textarea17.scrollLeft;});
textarea18.on("input", () => {updateCode18()});
textarea18.on("scroll", () => {codeBlock18.scrollTop = textarea18.scrollTop;codeBlock15.scrollLeft = textarea18.scrollLeft;});
textarea19.on("input", () => {updateCode19()});
textarea19.on("scroll", () => {codeBlock19.scrollTop = textarea19.scrollTop;codeBlock15.scrollLeft = textarea19.scrollLeft;});
textarea20.on("input", () => {updateCode20()});
textarea20.on("scroll", () => {codeBlock20.scrollTop = textarea20.scrollTop;codeBlock15.scrollLeft = textarea20.scrollLeft;});
textarea21.on("input", () => {updateCode21()});
textarea21.on("scroll", () => {codeBlock21.scrollTop = textarea21.scrollTop;codeBlock15.scrollLeft = textarea21.scrollLeft;});
textarea22.on("input", () => {updateCode22()});
textarea22.on("scroll", () => {codeBlock22.scrollTop = textarea22.scrollTop;codeBlock15.scrollLeft = textarea22.scrollLeft;});
textarea23.on("input", () => {updateCode23()});
textarea23.on("scroll", () => {codeBlock23.scrollTop = textarea23.scrollTop;codeBlock15.scrollLeft = textarea23.scrollLeft;});
textarea24.on("input", () => {updateCode24()});
textarea24.on("scroll", () => {codeBlock24.scrollTop = textarea24.scrollTop;codeBlock15.scrollLeft = textarea24.scrollLeft;});
textarea25.on("input", () => {updateCode25()});
textarea25.on("scroll", () => {codeBlock25.scrollTop = textarea25.scrollTop;codeBlock15.scrollLeft = textarea25.scrollLeft;});
