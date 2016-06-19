$('#myCanvas').show();
//$('#myCanvas').css('background-color', 'rgba(158,167,194,0.2)');
$('#myCanvas').css('border-radius', '20px');
window.onload = function() {
	try {
		TagCanvas.weightFrom = 'tag-weight';
		TagCanvas.weight = true;
		TagCanvas.weightMode = 'both';
		TagCanvas.weightSize = 2;
		TagCanvas.weightSizeMax = 36;
		TagCanvas.weightSizeMin = 14;
		TagCanvas.initial= [0.180, 0.270];
		TagCanvas.dragControl = true;
		TagCanvas.wheelZoom = false;
		var gradient = {
			0:    '#f00', // red
			0.33: '#ff0', // yellow
			0.66: '#0f0', // green
			1:    '#00f'  // blue
		};
		TagCanvas.weightGradient = gradient; 

		var options = {
			textColour: null,
			outlineColour: '#ff00ff',
			stretchX: 1.6,
			fadeIn: 800,
			minBrightness: 0.4,
			depth: 0.99,
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
