var textapi = require('./text.js');

var db = require('./db');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));

app.use('/summary', bodyParser.json());

//save the summary temporarily for later db write
var tempSummTitle;
app.post('/summary', (req, res) => {
  textapi.getSummary(req.body.url, (data) => {
    tempSummTitle = data;
    res.send(data)
  })
});

app.get('/rons-words', (req, res) => {
  textapi.getRon((data) => {
    tempSummTitle.ronSays = data;
    //write to db and clear temp
    db.insert(tempSummTitle, () => {
      tempSummTitle = {} 
      db.selectAll((err, collection) => {
        err !== null ? console.log(err) : console.log('DB DATA: ', collection)
      });
    });
    res.send(data);
  });
});

module.exports = app;