/**
 * MAZH Created by Administrator on 2014/11/17.
 */
define(function(){
    var app = new Marionette.Application();
    app.on("start", function(options){
        //alert("");
    });
    app.addInitializer(function(options) {
        var customRegion=Marionette.Region.extend({});
        this.addRegions({
            containerRegion:{
                selector:".container",
                regionClass:customRegion
            }
        });
        require(['views/appview'],function(appView){
            new appView();
        });
        /*require(['views/login'],function(login){
            new login();
        });*/
        /*require(['module/layout'],function(layout){
            //layout.renderAll();
        });*/
        require(['modules/routes'],function(routes){
            Backbone.history.start();
        });
    });
    return app;
});
