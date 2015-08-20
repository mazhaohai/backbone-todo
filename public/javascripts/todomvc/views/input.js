/**
 * Created by Administrator on 2014/11/25.
 */
define(['app','tpl!~/input'],function(app,inputTpl){
    return Marionette.ItemView.extend({
        template : inputTpl,
        events: {
            'keypress #new-todo':'createOnEnter'
        },
        createOnEnter: function(e) {
            this.input = $("#new-todo");
            if (e.keyCode != 13) return;
            value = this.input.val();
            if (!this.input.val()) return;
            value = this.input.val();
            this.collection.create({
                title: this.input.val()
            });
            //这里在初始化时，传入collection属性，由于是传引用，所以appview的collection变化会被监听到
            this.input.val("");
        },
        render:function(){
            this.$el.html(this.template);
            return this;
        }
    });
});
