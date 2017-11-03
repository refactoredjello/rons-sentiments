var AYLIENTextAPI = require('aylien_textapi');
var credentials = require('./private/aylien_text_credentials.js');

var request = require('request');

var textapi = new AYLIENTextAPI({
  application_id: credentials.id,
  application_key: credentials.key
});

module.exports.getSummary = (url, cb) => {
    textapi.summarize({
    url: url,
    sentences_number: 5
  }, function(error, response) {
    if (error) cb(error);
    if (error === null) {
      cb(response.sentences);
    }
  })
};

module.exports.getRon = (cb) => {
  let url = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
  request(url, (err, resp, body) => {
    err ? cb(err) : cb(body);
  })
};



