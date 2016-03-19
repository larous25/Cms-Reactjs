'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

let articles = new Schema({
  author: { type: Schema.ObjectId, ref: 'users' },
  title: String,
  text: String,
  create:{ type: Date, default: new Date() },
  comments:[{
    type: Schema.ObjectId, ref: 'comments'
  }],
  _tags: [{
    type: Schema.ObjectId, ref: 'tags'
  }]
});

module.exports = mongoose.model('articles', articles);
