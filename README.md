jqm-inline-multiselect
======================

A plugin which lets you use a checkbox group to represent a multiselect in jquery mobile.

Why? I have a jQM form that exists in a popup, I need to use a multiselect in here. The multiselect needs to use the jQM styles but this is not possible because jQM implements it as a popup and you can't have chained popups in jQM. This plugin works around that by displaying the multiselect as a group of checkboxes (where user interactions with the checkboxes alters the underlying multiselect).

Of course, you could do this yourself easily, but it might be useful if you are working with unchangeable legacy code which expects to be dealing with a multiselect.

There are not many features currently, just enough to do what I need it to do, but this may be expanded in future.
