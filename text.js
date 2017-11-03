var AYLIENTextAPI = require('aylien_textapi');
var credentials = require('./private/aylien_text_credentials.js');

var request = require('request');

var textapi = new AYLIENTextAPI({
  application_id: credentials.id,
  application_key: credentials.key
});

var getTitle = (url, cb) => {
  textapi.extract({url: url, best_image: false},
    (err, resp) => err !== null ? console.log(err) : cb(resp.title)
  );
}

module.exports.getSummary = (url, cb) => {
    textapi.summarize({
    url: url,
    sentences_percentage: 20
  }, 
  (err, resp) => err !== null ? console.log(err) : 
  getTitle(url, (title) =>  {
    console.log(title);
    cb({title: title, summary: resp.sentences})
  })
  );
};

module.exports.getRon = (cb) => {
  let url = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
  request(url, (err, resp, body) => {
    err ? cb(err) : cb(body);
  })
};



