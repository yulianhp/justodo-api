const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const taskSchema = new Schema({
  task: {
    type: String,
    required: [true, "Don't you want to do something?!"]
  },
  description: String,
  status: {
    type: String,
    default: 'todo'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  },
  show_updated: {
    type: Date,
    default: Date.now
  }
  
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;