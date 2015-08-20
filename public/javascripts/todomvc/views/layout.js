/**
 * Created by Administrator on 2014/11/26.
 */
define(['app','require','tpl!~/layout','views/input','views/todos'],function(app,require,layout,InputView,Todo){

    return Marionette.LayoutView.extend({
        template:layout,
        regions:{
            mainRegion:"#main"
        },
        initialize:function(){
             this.listenTo(this.collection, "add", this.addOne);
             this.listenTo(this.collection, "reset", this.addAll);
             this.listenTo(this.collection, "all", this.setSH);
        },
        render:function(){
            this.$el.html(this.template);
            this.$el.find("#todoapp").prepend(new InputView({collection:this.collection}).render().el);
            return this;
        },
        addOne:function(todoMode){
            var todoView=new Todo({
                model:todoMode
            });
            $("#todo-list").append(todoView.render().el);
        },
        addAll:function(){},
        setSH:function(){
            if(this.collection.length>0){
                $("#main").show();
                $("#todo-list").show();
            }else{
                $("#main").hide();
                $("#todo-list").hide();
            }
        }
    });
});
