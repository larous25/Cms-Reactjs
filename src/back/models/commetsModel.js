'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


var commets = new Schema({
    user: { type:Schema.ObjectId, ref: 'users' },
    responses: [{
      user: { type:Schema.ObjectId, ref: 'users' },
      text:String,
      create: { type: Date, dafault: new Date() },
    }],
    text:String,
    create: { type: Date, dafault: new Date() }
});

module.exports = mongoose.model('commets', commets);
