define(['underscore','backbone'],function(_,Backbone){
    var Todo = Backbone.Model.extend({
        defaults:{
            title:'',
            done:''
        },
        toggleDone:function(){
            var ch=""
            if(this.get('done')==""){
                ch='checked="checked"';
            }
            this.save({done:ch});
        }
    });
    return Todo;
});
