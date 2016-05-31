$('#myCanvas').show();
$('#myCanvas').css('background-color', 'rgba(158,167,194,0.2)');
$('#myCanvas').css('border-radius', '20px');
window.onload = function() {
	try {
		TagCanvas.weightFrom = 'tag-weight';
		TagCanvas.weight = true;
		TagCanvas.weightMode = 'both';
		TagCanvas.weightSize = 1.5;
		TagCanvas.weightSizeMax = '6';
		TagCanvas.weightSizeMin = '2';
		var options = {
			textColour: null,
			outlineColour: '#ff00ff',
			reverse: true,
			depth: 0.8,
			maxSpeed: 0.05,
			imageMode: 'both',

		};
		TagCanvas.Start('myCanvas','tags',options);
	} catch(e) {
		// something went wrong, hide the canvas container
		document.getElementById('myCanvasContainer').style.display = 'none';
	}
};
