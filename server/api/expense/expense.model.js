'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ExpenseSchema = new Schema({
  date:  { type: Date, default: Date.now },
  value: String,
  title: String,
  category: String,
  location: String,
  active: Boolean,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Expense', ExpenseSchema);