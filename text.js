var AYLIENTextAPI = require('aylien_textapi');
var credentials = require('./private/aylien_text_credentials.js');

var textapi = new AYLIENTextAPI({
  application_id: credentials.id,
  application_key: credentials.key
});

module.exports = textapi.sentiment({
  'text': 'John is a very good football player!'
}, function(error, response) {
  if (error === null) {
    console.log(response);
  }
});