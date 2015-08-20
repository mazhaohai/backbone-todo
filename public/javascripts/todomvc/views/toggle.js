define(['app','require','backbone','tpl!~/toggle'], function(app,require, Backbone, toggleTpl) {
    return Marionette.ItemView.extend({
        template: toggleTpl,
        events: {
            "click #toggle-all": "toggleAllComplete"
        },
        initialize: function() {
            this.listenTo(this.collection, "all", this.render);
        },
        render: function() {
            this.$el.html(this.template);
            var remaining = this.collection.remaining().length;
            this.allCheckbox=this.$el.find("#toggle-all")[0];
            if(remaining==0){
                this.allCheckbox.checked="checked";
            }else{
                this.allCheckbox.checked="";
            }
            return this;
        },
        toggleAllComplete: function() {
            var checkValue = this.allCheckbox.checked;
            var done =checkValue ? 'checked="checked"' : '';
            this.collection.each(function(todo) {
                todo.save({
                    done: done
                });
            });
        }

    });
});