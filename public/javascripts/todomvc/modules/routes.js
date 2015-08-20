/**
 * Created by Administrator on 2014/12/3.
 */
define(['app','modules/routesManage'], function(app,routesManage)
{
    var routeConfig=[
        {
            dependencies: 'controller/layout',
            appRoutes: {
                'index': 'init'
            }
        }];
    routesManage.addRoute(routeConfig);
    return routesManage.getRoute();
});
