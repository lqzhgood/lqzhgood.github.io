(function ($) {
	
	$.fn.extend({
		goufoScrolling: function (opts) {
			var settings = $.extend({}, $.goufoScrolling.defaults, opts);
			
			if( !settings.is_mac ) {
				$(settings.body).bind('mousewheel DOMMouseScroll', function(e) { settings.mousewheel(e); });
			}
		}
	});
	
	$.extend({
		goufoScrolling: {
			defaults: {	
				top : 0,
				step : $(window).height() / 4,
				viewport : $(window).height(),
				body : 'body' /*$.browser.webkit ? $('body') : $('html')*/,
				wheel: false,
				is_mac : navigator.platform.toUpperCase().indexOf('MAC')!==-1,
				is_windows : navigator.platform.toUpperCase().indexOf('WIN')!==-1,
				is_linux : navigator.platform.toUpperCase().indexOf('LINUX')!==-1,
				scroll : function(delta) {
					this.top += delta;
		       		 
		       		$(this.body).stop().animate({scrollTop: this.top}, 400, 'easeOutQuad', function (e) {
			        	this.wheel = false;
			        });
				},
				mousewheel : function(e) {
					e.stopPropagation();
					e.preventDefault();
					
				    if (e.type == 'mousewheel') {
				        this.scroll(e.originalEvent.wheelDelta * -1);
				    } else if (e.type == 'DOMMouseScroll') {
				        this.scroll(40 * e.originalEvent.detail);
				    }
				}
			}
		}	
	});
})( jQuery );