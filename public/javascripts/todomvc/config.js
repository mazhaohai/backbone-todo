var globalConfig={
    baseUrl:"/"
};

requirejs.config({
    'baseUrl':globalConfig.baseUrl+"javascripts/todomvc",
    enforceDefine: true,
    waitSeconds: 0,
    paths: {
        handlebars:globalConfig.baseUrl+'javascripts/libs/handlebars',
        bootstrap: globalConfig.baseUrl + 'javascripts/libs/bootstrap',
        jquery: globalConfig.baseUrl + 'javascripts/libs/jquery',
        underscore: globalConfig.baseUrl + 'javascripts/libs/underscore',
        backbone: globalConfig.baseUrl + 'javascripts/libs/backbone',
        marionette: globalConfig.baseUrl + 'javascripts/libs/backbone.marionette',
        backboneLocalstorage: globalConfig.baseUrl + 'javascripts/libs/backbone.localStorage'
    },
    shim:{
        'handlebars':{
            exports:"Handlebars"
        },
        'underscore':{
            exports:"_"
        },
        'backbone':{
            deps: ['jquery','underscore'],
            exports:"Backbone"
        },
        'marionette':{
            deps: ['backbone'],
            exports:"Marionette"
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'store' // 这里注意和之后函数参数保持一致
        },
        'bootstrap':{
            deps: ['jquery',
                    'css!'+globalConfig.baseUrl+'javascripts/css/todos',
                    'css!'+globalConfig.baseUrl+'stylesheets/bootstrap.min',
                    'css!'+globalConfig.baseUrl+'stylesheets/font-awesome.min',
                    'css!'+globalConfig.baseUrl+'stylesheets/bootstrap-theme.min',
                    'css!'+globalConfig.baseUrl+'stylesheets/bootstrap-social',
                    'css!'+globalConfig.baseUrl+'stylesheets/templatemo_style'
                   ],
            exports:"jQuery"
        },
        'app':{
            deps: ['marionette','bootstrap']
        }
    },
    map: {
        '*': {
            'css': globalConfig.baseUrl+'javascripts/libs/require-css.js',
            'tpl': globalConfig.baseUrl+'javascripts/libs/require-tpl.js'
        }
    },
    //,urlArgs: "bust="+(new Date()).getTime()
    urlArgs: "bust=1"
});

require(["app"],function(app){
    var options = {
        something: "some value",
        another: "#some-selector"
    };
    app.start(options);
});