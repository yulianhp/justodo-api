const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Don't you have a name?"],
    unique: [true, "Do you have a doppleganger?"]
  },
  facebook_id: String,
  password: {
    type: String,
    required: [true, "Better safe than sorry, right?"]
  },
  join_date: {
    type: Date,
    default: Date.now
  }
  
});

var User = mongoose.model('User', userSchema);

module.exports = User;