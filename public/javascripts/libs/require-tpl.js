/*
 * Require-TPL RequireJS template! loader plugin
 * 0.1.2
 * Fan 2014
 *
 * Usage:
 *  require(['tpl!./mytplFile']);
 *
 * Android
 * iOS 6
 * IE 6 - 10
 * Chome 3 - 26
 * Firefox 3.5 - 19
 * Opera 10 - 12
 * 
 */

define(['handlebars','jquery'],function(handlebars,j$) {
  //main api object
  var tplAPI = {};

  tplAPI.pluginBuilder = 'templates/';

  var tplLoad = function(url, callback,templateName) {
    $.ajax({
        url: url,
        success: function(html){ 
          var template = handlebars.compile(html); 
          callback(template)
        }
    });
  };
  var getTplName = function(url) {
     return url.substr(url.lastIndexOf("/")+1,url.length);
  };

  var getAbsolutePath=function(url){
    return url.lastIndexOf("~/")!=-1?(url.replace("~/",tplAPI.pluginBuilder)):url;
  };

  tplAPI.normalize = function(name, normalize) {
    if (name.substr(name.length - 4, 4) == '.tpl')
      name = name.substr(0, name.length - 4);
    return normalize(name);
  };
  
  tplAPI.load = function(tplId, req, load, config) {
     tplLoad(req.toUrl(getAbsolutePath(tplId) + '.tpl'), load,getTplName(tplId));
  };

  return tplAPI;
});
