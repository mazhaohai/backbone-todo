/**
 * Created by Administrator on 2014/11/27.
 */
define(['app','require','tpl!~/login'],function(app,require,login){
    return Marionette.ItemView.extend({
        template:login,

        ui:{
            button:"#loginBtn"
        },
        events:{
            "click @ui.button":'userLogin'
        },
        userLogin:function() {
            window.location="#index";
        }

    });
});
