const Handlebars = require('handlebars'); 

Handlebars.registerHelper('formatDate', function (date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(date).toLocaleString('en-US', options);
  });
  console.log("helper worked");



