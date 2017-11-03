var textapi = require('./text.js');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));

//todo build out post from react;
app.use('/summary', bodyParser.json());
app.post('/summary', (req, res) => {
  textapi(req.body.url, (data) => {
    res.send(data)
  })
});
//todo get ron quote
//todo get sentiment



// get sentiment




module.exports = app;