$('#myCanvas').show();
$('#myCanvas').css('border-radius', '20px');
$(document).ready(function() {

	function imageExists(url, callback) {
		var img = new Image();
		img.onload = function() { callback(true); };
		img.onerror = function() { callback(false); };
		img.src = url;
	}

	var makeTags = function()
	{
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
			document.getElementById('myCanvasContainer').style.display = 'none';
		}
	}
	// Sample usage
	var tags = $("div#tags ul li a");
	var tagLength = tags.length;
	$("div#tags ul li a").each(function(i){
		var tag = this.innerHTML;
		var tagPng = "/assets/tag-"+tag+".png";
		var element = $(this);
		imageExists(tagPng, function(exists) {
			if(exists) {
				element.empty();
				element.append("<img src=\""+tagPng+"\">");
			}
			if(i+1 == tagLength) {
				makeTags();
			}
		});
	});

});
