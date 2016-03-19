'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

let tags = new Schema({
    name : String
});

module.exports = mongoose.model('tags', tags);
