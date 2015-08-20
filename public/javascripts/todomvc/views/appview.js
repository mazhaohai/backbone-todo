/**
 * Created by Administrator on 2014/11/26.
 */
define(['app','views/login'],function(app,Login){
    return Marionette.LayoutView.extend({
        initialize:function(){
            var loginView=new Login();
            app.containerRegion.show(loginView);
        }
    });
});


