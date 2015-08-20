define(['app','require','tpl!~/todos'],function(app,require,todosView){
    return Marionette.ItemView.extend({
        tagName: "li",
        template: todosView,
        events: {
            "click .toggle": "toggle",
            "dblclick .view": "edit", //双击是dblclick
            "click .destroy": "destroy",
            "keypress .edit": "updateOnEnter"
        },
        initialize: function() {
            this.listenTo(this.model, "change", this.render);
            this.listenTo(this.model, "destroy", this.remove); //当模型被删除，视图相应被移除

        },
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            //切换是否添加移除done类
            if(this.model.get('done')) {
                this.$el.toggleClass('done',true);
            }else{
                this.$el.toggleClass('done',false);
            }
            return this;
        },
        toggle: function() {
            this.model.toggleDone();
        },
        edit: function() {
            var _this=this;
            this.$el.prepend("<input id='editTitle' value="+this.model.get('title')+" />");
            $("#editTitle").focus();
            $("#editTitle").on('blur',function(){
                _this.close();
            });
            this.$el.find('div').hide();
        },
        destroy: function() {
            this.model.destroy();
        },
        updateOnEnter: function(e) {
            if (e.keyCode == 13) {
                this.close();
            }
        },
        close: function() {
            var value = $("#editTitle").val();
            $("#editTitle").remove();
            this.$el.find('div').show();
            if (!value) {
                this.destroy();
            } else {
                this.model.save({
                    title: value
                })
            }
        }
    });
});
