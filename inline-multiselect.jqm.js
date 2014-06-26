(function ($, undefined) {
	$(document).bind("pagecreate", function (e) {
		$(":jqmData(role=inlinemultiselect)", e.target).inlinemultiselect();
	});
	$.widget("mobile.inlinemultiselect", $.mobile.widget, {
		_create: function () {
			var $elem = this.element;
			
		}
	});
})(jQuery);