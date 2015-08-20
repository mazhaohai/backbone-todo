define(['underscore', 'backbone', 'backboneLocalstorage', 'models/Todo'], function(_, Backbone, store, Todo) {
	return Backbone.Collection.extend({
		model: Todo,
		url: '',
		localStorage: new Backbone.LocalStorage("todos-backbone"),
		done: function() {
			return this.where({
				done: 'checked="checked"'
			});
		},
		remaining: function() {
			return this.where({
				done: ''
			});
		}
	});
})