'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

let users = new Schema({
    name : {
      type     : String,
      match    : /^[a-zA-Z\s]+$/ ,
      maxLength: 25
    },
    email : {
      type     : String,
      match    : /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ ,
      maxLength: 35
    },
    password : String,
    rol: String
});

module.exports = mongoose.model('users', users);
