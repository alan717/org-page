$('#myCanvas').show();
$('#myCanvas').css('border-radius', '20px');
$(document).ready(function() {

	function imageExists(url, callback) {
		var img = new Image();
		img.onload = function() { callback(true); };
		img.onerror = function() { callback(false); };
		img.src = url;
	}
	function getRandomIntInclusive(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function getTagCanvasOptions() {
		var gradient = {
			0:    '#f00', // red
			0.33: '#ff0', // yellow
			0.66: '#0f0', // green
			1:    '#00f'  // blue
		};

		var common_options = {
			stretchX: 1.6,
			fadeIn: 800,
			minBrightness: 0.4,
			depth: 0.99,
			reverse: true,
			weightGradient: gradient,
			weightFrom : 'tag-weight',
			weight : true,
			weightMode : 'both',
			weightSize : 2,
			weightSizeMax : 36,
			weightSizeMin : 14,
			wheelZoom : false,
			imageRadius : '50%', //图片圆角
			shuffleTags: true,
			depth: 0.8,
			maxSpeed: 0.05,
			imageMode: 'both',
			outlineDash: 5,
			outlineDashSpace: 3,
			outlineRadius: 10,
			outlineColour: 'tag'
		};
		var options;
		var index = getRandomIntInclusive(1,3);
		if(index == 1) {
			options = common_options;
			options.shape = 'hcylinder(0.6)';
			options.lock = 'x';
			options.initial = [0.0, Math.random()];
			options.weightMode = 'colour';
			options.stretchX = 1;
			options.dragControl = true;
		}
		else if (index == 2) {
			options = common_options;
			options.stretchX= 1.6;
			options.initial= [Math.random(), Math.random()];
			options.dragControl = true;
		}
		else if (index == 3) {
			options = common_options;
			options.stretchX= 1.6;
			options.initial= [0, Math.random()];
			options.dragControl = true;
			options.shape = 'hring';
			options.lock = 'x';
		}
		return options;
	}

	var makeTags = function()
	{
		try {
			var options = getTagCanvasOptions();
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
				element.append("<img src=\""+tagPng+"\">");
			}
			if(i+1 == tagLength) {
				makeTags();
			}
		});
	});

});
