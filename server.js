var textapi = require('./text.js');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));

app.use('/summary', bodyParser.json());
app.post('/summary', (req, res) => {
  textapi.getSummary(req.body.url, (data) => {
    res.send(data)
  })
});

app.get('/rons-words', (req, res) => {
  textapi.getRon((data) => {
    console.log(data);
    res.send(data);
  });
});
//todo get ron quote
//todo get sentiment



// get sentiment




module.exports = app;