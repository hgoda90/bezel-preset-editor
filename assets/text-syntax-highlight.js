const textBlock = $(".tab-pane textarea"), codeBlock = $(".tab-pane code"), miniText = $(".mini textarea"), miniCode = $(".mini code");

function highlightJS() {
	$('pre code').each(function() {
        hljs.highlightBlock(this);
    });
}

function updateCode(){
	let content = textBlock.val();
	content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	codeBlock.html(content);
	codeBlock.removeAttr('data-highlighted');
	highlightJS();
}

function updateCode2(id){
	const textBlock2 = $(".tab-pane #dropText"+id+" textarea"), codeBlock2 = $(".tab-pane #dropText"+id+" code");
	let content = textBlock2.val();
	content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	codeBlock2.html(content);
	codeBlock2.removeAttr('data-highlighted');
	highlightJS();
	
	$(textBlock2).scroll(function() {
		$(codeBlock2).scrollTop($(textBlock2).scrollTop());
		$(codeBlock2).scrollLeft($(textBlock2).scrollLeft());
	});
}

function updateMini(){
	let content = miniText.val();
	content = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	miniCode.html(content);
	miniCode.removeAttr('data-highlighted');
	highlightJS();
}

$(miniText).on("input", updateMini);
$(miniText).scroll(function() {
	$(miniCode).scrollTop($(miniText).scrollTop());
	$(miniCode).scrollLeft($(miniText).scrollLeft());
});