Handlebars.registerHelper('check', function(conditional,key, options) {
  if(conditional.indexOf(key)!=-1) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
Handlebars.registerHelper('equal', function(conditional,key, options) {
  if(conditional==key) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});