(function ($, undefined) {
	$(document).bind("pagecreate", function (e) {
		$(":jqmData(role=inlinemultiselect)", e.target).inlinemultiselect();
	});
	$.widget("mobile.inlinemultiselect", $.mobile.widget, {
		_create: function () {
			var $elem = this.element;
			$elem.selectmenu("destroy");

			var holder = $("<div class='inline-multiselect'><p></p></div>");
			var fs = $("<fieldset data-role='controlgroup'></fieldset>");

			var a = $('.inline-multiselect').length, c = 0;
			var options = {};
			$elem.find("option").each(function (x, y) {
				var uniq = "inlinems-" + a + "-" + c;
				$(y).attr("data-multiselect", uniq);
				var check = $("<input type='checkbox' name='" + uniq + "' id='" + uniq + "' />");
				if($(y).is(":selected"))
					check.prop('checked', true);
				var label = $("<label for='" + uniq + "' >" + $(y).text() + "</label>");
				fs.append(check).append(label);

				c++;
			});

			holder.find("p").append(fs);

			$elem.after(holder);
			holder.trigger('create');
			
			holder.find("input").change(function () {
                if ($(this).is(":checked")) {
                    $("[data-multiselect='" + $(this).attr("id") + "']").prop("selected", true).parent().trigger('change');
                } else {
                    $("[data-multiselect='" + $(this).attr("id") + "']").removeAttr('selected').parent().trigger('change');
                }
            });
			
			$elem.hide();
			$('label[for=' + $elem.attr('id') + ']').hide();
		}
	});
})(jQuery);