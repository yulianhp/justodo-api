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
    default: 'todo',
    enum: ['todo','done']
  }
},{
  timestamps: true
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;