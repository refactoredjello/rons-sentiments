var express = require('express');
var textapi = require('./text.js')
var app = express();
app.use(express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));

app.get('/', (req, res) => {
  ;
  res.send(__dirname + '/public/index.html')
});


// get quote
// get sentiment




module.exports = app;