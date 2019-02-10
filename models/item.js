const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name:  String,
  sn: String,
  owned: Boolean,
});

module.exports = mongoose.model('Item', itemSchema);
