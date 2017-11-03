var AYLIENTextAPI = require('aylien_textapi');
var credentials = require('./private/aylien_text_credentials.js');

var textapi = new AYLIENTextAPI({
  application_id: credentials.id,
  application_key: credentials.key
});

var getSummary = (url, cb) => {
    textapi.summarize({
    url: url,
    sentences_number: 5
  }, function(error, response) {
    if (error) cb(error);
    if (error === null) {
      cb(response.sentences);
    }
  })
}
module.exports = getSummary;
// module.exports = textapi.sentiment({
//   'text': 'John is a very good football player!'
// }, function(error, response) {
//   if (error === null) {
//     console.log(response);
//   }
// });