/**
 * Created by Administrator on 2014/12/3.
 */
define(['app'], function(app){
    if(app.Routes){
        return app.Routes;
    }else{
        app.module('Routes', function(Routes, App, Backbone, Marionette, $, _) {
            Routes.getRoute=function(){
                if(Routes._Route)
                    return Routes._Route;
                else{
                    var MyRouter = Marionette.AppRouter.extend({});
                    return new MyRouter();
                }
            };
            if(!Routes._Route)
                Routes._Route=Routes.getRoute();
            Routes.addRoute=function(routeConfig){
                _.each(routeConfig,function(value,index,arry){
                    require([value.dependencies], function(controller){
                        return Routes._Route.processAppRoutes(controller, value.appRoutes);
                    });
                })
            }
        });
    }
    return app.Routes;
});