/**
 * Created by Administrator on 2014/12/3.
 */
define(['app','views/layout','views/toggle','collections/TodoList'],function(app,Layout,Toggle,Collection){
   return {
       init:function(){
           var todoCollection=new Collection();
           var layout = new Layout({collection: todoCollection});
           var toggle = new Toggle({collection: todoCollection});
           app.containerRegion.show(layout);
           app.containerRegion.currentView.mainRegion.show(toggle);
       }
   };
});
