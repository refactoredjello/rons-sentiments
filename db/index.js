var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/data');
var db = mongoose.connection;

db.on('error', () => console.log('db connection error'));
db.once('open', () => console.log('db connected successfully'));

var itemSchema = mongoose.Schema({
  url: String,
  title: String, 
  ronSays: String
})

var Item = mongoose.model('Item', itemSchema);

var selectAll = (cb) => {
  Item.find({}, (err, items) => {
    err ? cb(err, null) : cb(null, items);
  })
}

var insert = ({url, title, ronSays}, cb) => {
  let newItem = new Item({url: url, title: title, ronSays: ronSays})
  newItem.save((err) => err ? console.log(err): console.log(newItem.title, ' saved'))
}
module.exports.selectAll = selectAll;