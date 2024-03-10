const textarea1 = $("#dropText textarea"), textarea2 = $("#dropText2 textarea"), textarea3 = $("#dropText3 textarea"), textarea4 = $("#dropText4 textarea"),  textarea5 = $("#dropText5 textarea"), 
	textarea6 = $("#dropText6 textarea"), textarea7 = $("#dropText7 textarea"), textarea8 = $("#dropText8 textarea"), textarea9 = $("#dropText9 textarea"),  textarea10 = $("#dropText10 textarea"), 
	textarea11 = $("#dropText11 textarea"), textarea12 = $("#dropText12 textarea"), textarea13 = $("#dropText13 textarea"), textarea14 = $("#dropText14 textarea"),  textarea15 = $("#dropText15 textarea"), 
	textarea16 = $("#dropText16 textarea"), textarea17 = $("#dropText17 textarea"), textarea18 = $("#dropText18 textarea"), textarea19 = $("#dropText19 textarea"),  textarea20 = $("#dropText20 textarea"), 
	textarea21 = $("#dropText21 textarea"), textarea22 = $("#dropText22 textarea"), textarea23 = $("#dropText23 textarea"), textarea24 = $("#dropText24 textarea"), textarea25 = $("#dropText25 textarea");

const codeBlock1 = $("#codeBlock1"),  codeBlock2 = $("#codeBlock2"), codeBlock3 = $("#codeBlock3"), codeBlock4 = $("#codeBlock4"), codeBlock5 = $("#codeBlock5"),
	 codeBlock6 = $("#codeBlock6"), codeBlock7 = $("#codeBlock7"), codeBlock8 = $("#codeBlock8"), codeBlock9 = $("#codeBlock9"), codeBlock10 = $("#codeBlock10"),
	 codeBlock11 = $("#codeBlock11"), codeBlock12 = $("#codeBlock12"), codeBlock13 = $("#codeBlock13"), codeBlock14 = $("#codeBlock14"), codeBlock15 = $("#codeBlock15"),
	 codeBlock16 = $("#codeBlock16"), codeBlock17 = $("#codeBlock17"), codeBlock18 = $("#codeBlock18"), codeBlock19 = $("#codeBlock19"), codeBlock20 = $("#codeBlock20"),
	 codeBlock21 = $("#codeBlock21"), codeBlock22 = $("#codeBlock22"), codeBlock23 = $("#codeBlock23"), codeBlock24 = $("#codeBlock24"), codeBlock25 = $("#codeBlock25");

function highlightJS() {
	$('pre code').each(function() {
        hljs.highlightBlock(this);
    });
}

var uc = {
	1: function() {let content = textarea1.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock1.html(content);codeBlock1.removeAttr('data-highlighted');highlightJS();},
	2: function() {let content = textarea2.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock2.html(content);codeBlock2.removeAttr('data-highlighted');highlightJS();},
	3: function() {let content = textarea3.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock3.html(content);codeBlock3.removeAttr('data-highlighted');highlightJS();},
	4: function() {let content = textarea4.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock4.html(content);codeBlock4.removeAttr('data-highlighted');highlightJS();},
	5: function() {let content = textarea5.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock5.html(content);codeBlock5.removeAttr('data-highlighted');highlightJS();},
	6: function() {let content = textarea6.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock6.html(content);codeBlock6.removeAttr('data-highlighted');highlightJS();},
	7: function() {let content = textarea7.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock7.html(content);codeBlock7.removeAttr('data-highlighted');highlightJS();},
	8: function() {let content = textarea8.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock8.html(content);codeBlock8.removeAttr('data-highlighted');highlightJS();},
	9: function() {let content = textarea9.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock9.html(content);codeBlock9.removeAttr('data-highlighted');highlightJS();},
	10: function() {let content = textarea10.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock10.html(content);codeBlock10.removeAttr('data-highlighted');highlightJS();},
	11: function() {let content = textarea11.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock11.html(content);codeBlock11.removeAttr('data-highlighted');highlightJS();},
	12: function() {let content = textarea12.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock12.html(content);codeBlock12.removeAttr('data-highlighted');highlightJS();},
	13: function() {let content = textarea13.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock13.html(content);codeBlock13.removeAttr('data-highlighted');highlightJS();},
	14: function() {let content = textarea14.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock14.html(content);codeBlock14.removeAttr('data-highlighted');highlightJS();},
	15: function() {let content = textarea15.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock15.html(content);codeBlock15.removeAttr('data-highlighted');highlightJS();},
	16: function() {let content = textarea16.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock16.html(content);codeBlock16.removeAttr('data-highlighted');highlightJS();},
	17: function() {let content = textarea17.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock17.html(content);codeBlock17.removeAttr('data-highlighted');highlightJS();},
	18: function() {let content = textarea18.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock18.html(content);codeBlock18.removeAttr('data-highlighted');highlightJS();},
	19: function() {let content = textarea19.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock19.html(content);codeBlock19.removeAttr('data-highlighted');highlightJS();},
	20: function() {let content = textarea20.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock20.html(content);codeBlock20.removeAttr('data-highlighted');highlightJS();},
	21: function() {let content = textarea21.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock21.html(content);codeBlock21.removeAttr('data-highlighted');highlightJS();},
	22: function() {let content = textarea22.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock22.html(content);codeBlock22.removeAttr('data-highlighted');highlightJS();},
	23: function() {let content = textarea23.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock23.html(content);codeBlock23.removeAttr('data-highlighted');highlightJS();},
	24: function() {let content = textarea24.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock24.html(content);codeBlock24.removeAttr('data-highlighted');highlightJS();},
	25: function() {let content = textarea25.val();content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');codeBlock25.html(content);codeBlock25.removeAttr('data-highlighted');highlightJS();}
}

$(textarea1).on("input", uc[1]);
$(textarea1).scroll(function() {
	$(codeBlock1).scrollTop($(textarea1).scrollTop());
	$(codeBlock1).scrollLeft($(textarea1).scrollLeft());
});

$(textarea2).on("input", uc[2]);
$(textarea2).scroll(function() {
	$(codeBlock2).scrollTop($(textarea2).scrollTop());
	$(codeBlock2).scrollLeft($(textarea2).scrollLeft());
});

$(textarea3).on("input", uc[3]);
$(textarea3).scroll(function() {
	$(codeBlock3).scrollTop($(textarea3).scrollTop());
	$(codeBlock3).scrollLeft($(textarea3).scrollLeft());
});

$(textarea4).on("input", uc[4]);
$(textarea4).scroll(function() {
	$(codeBlock4).scrollTop($(textarea4).scrollTop());
	$(codeBlock4).scrollLeft($(textarea4).scrollLeft());
});

$(textarea5).on("input", uc[5]);
$(textarea5).scroll(function() {
	$(codeBlock5).scrollTop($(textarea5).scrollTop());
	$(codeBlock5).scrollLeft($(textarea5).scrollLeft());
});

$(textarea6).on("input", uc[6]);
$(textarea6).scroll(function() {
	$(codeBlock6).scrollTop($(textarea6).scrollTop());
	$(codeBlock6).scrollLeft($(textarea6).scrollLeft());
});

$(textarea7).on("input", uc[7]);
$(textarea7).scroll(function() {
	$(codeBlock7).scrollTop($(textarea7).scrollTop());
	$(codeBlock7).scrollLeft($(textarea7).scrollLeft());
});

$(textarea8).on("input", uc[8]);
$(textarea8).scroll(function() {
	$(codeBlock8).scrollTop($(textarea8).scrollTop());
	$(codeBlock8).scrollLeft($(textarea8).scrollLeft());
});

$(textarea9).on("input", uc[9]);
$(textarea9).scroll(function() {
	$(codeBlock9).scrollTop($(textarea9).scrollTop());
	$(codeBlock9).scrollLeft($(textarea9).scrollLeft());
});

$(textarea10).on("input", uc[10]);
$(textarea10).scroll(function() {
	$(codeBlock10).scrollTop($(textarea10).scrollTop());
	$(codeBlock10).scrollLeft($(textarea10).scrollLeft());
});

$(textarea11).on("input", uc[11]);
$(textarea11).scroll(function() {
	$(codeBlock11).scrollTop($(textarea11).scrollTop());
	$(codeBlock11).scrollLeft($(textarea11).scrollLeft());
});

$(textarea12).on("input", uc[12]);
$(textarea12).scroll(function() {
	$(codeBlock12).scrollTop($(textarea12).scrollTop());
	$(codeBlock12).scrollLeft($(textarea12).scrollLeft());
});

$(textarea13).on("input", uc[13]);
$(textarea13).scroll(function() {
	$(codeBlock13).scrollTop($(textarea13).scrollTop());
	$(codeBlock13).scrollLeft($(textarea13).scrollLeft());
});

$(textarea14).on("input", uc[14]);
$(textarea14).scroll(function() {
	$(codeBlock14).scrollTop($(textarea14).scrollTop());
	$(codeBlock14).scrollLeft($(textarea14).scrollLeft());
});

$(textarea15).on("input", uc[15]);
$(textarea15).scroll(function() {
	$(codeBlock15).scrollTop($(textarea15).scrollTop());
	$(codeBlock15).scrollLeft($(textarea15).scrollLeft());
});

$(textarea16).on("input", uc[16]);
$(textarea16).scroll(function() {
	$(codeBlock16).scrollTop($(textarea16).scrollTop());
	$(codeBlock16).scrollLeft($(textarea16).scrollLeft());
});

$(textarea17).on("input", uc[17]);
$(textarea17).scroll(function() {
	$(codeBlock17).scrollTop($(textarea17).scrollTop());
	$(codeBlock17).scrollLeft($(textarea17).scrollLeft());
});

$(textarea18).on("input", uc[18]);
$(textarea18).scroll(function() {
	$(codeBlock18).scrollTop($(textarea18).scrollTop());
	$(codeBlock18).scrollLeft($(textarea18).scrollLeft());
});

$(textarea19).on("input", uc[19]);
$(textarea19).scroll(function() {
	$(codeBlock19).scrollTop($(textarea19).scrollTop());
	$(codeBlock19).scrollLeft($(textarea19).scrollLeft());
});

$(textarea20).on("input", uc[20]);
$(textarea20).scroll(function() {
	$(codeBlock20).scrollTop($(textarea20).scrollTop());
	$(codeBlock20).scrollLeft($(textarea20).scrollLeft());
});

$(textarea21).on("input", uc[21]);
$(textarea21).scroll(function() {
	$(codeBlock21).scrollTop($(textarea21).scrollTop());
	$(codeBlock21).scrollLeft($(textarea21).scrollLeft());
});

$(textarea22).on("input", uc[22]);
$(textarea22).scroll(function() {
	$(codeBlock22).scrollTop($(textarea22).scrollTop());
	$(codeBlock22).scrollLeft($(textarea22).scrollLeft());
});

$(textarea23).on("input", uc[23]);
$(textarea23).scroll(function() {
	$(codeBlock23).scrollTop($(textarea23).scrollTop());
	$(codeBlock23).scrollLeft($(textarea23).scrollLeft());
});

$(textarea24).on("input", uc[24]);
$(textarea24).scroll(function() {
	$(codeBlock24).scrollTop($(textarea24).scrollTop());
	$(codeBlock24).scrollLeft($(textarea24).scrollLeft());
});

$(textarea25).on("input", uc[25]);
$(textarea25).scroll(function() {
	$(codeBlock25).scrollTop($(textarea25).scrollTop());
	$(codeBlock25).scrollLeft($(textarea25).scrollLeft());
});
