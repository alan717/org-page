		$(document).ready(function() {
				var test = "hehe";
				var baseUrl = document.location.origin;
				var currentUrl = window.location.href;
				var currentShortUrl = currentUrl.replace(baseUrl,"");
				$("li.dmx-menu-item a").each(function(i){
					var url = this.href;
					var shortUrl = url.replace(baseUrl,"");
					var active = false;
					if(currentShortUrl.length==1) {
						if(shortUrl.length == 1) {
							active = true;
						}
					} 
					else {
						if(shortUrl.length>1 && currentShortUrl.indexOf(shortUrl) == 0) {
							active = true;
						}
					}
					if(active) {
						$(this).parents("li:first").addClass('active');
					}
					else {
						$(this).parents("li:first").removeClass('active');
					}
					});
				});
