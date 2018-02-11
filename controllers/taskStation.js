const task = require('../models/Task');
const ObjectId = require('mongodb').ObjectId;

class Task {
  static createOne(req,res){
    let input = {
      task: req.body.task,
      description: req.body.description
    }
    task.create({
      task: input.task,
      description: input.description
    }).then((data) => {
      res.status(200)
      .json({
        msg: 'New task created',
        task: data
      })
    }).catch((err) => {
      res.status(500)
      .json({
        msg: 'Unable to create task',
        error: err
      })
    })
  }
  
  static getAll(req,res){
    task.find()
    .then((data) => {
      res.status(200)
      .json({
        msg: 'Show all tasks',
        tasks: data
      })
    }).catch((err) => {
      res.status(500)
      .json({
        msg: 'Unable to get all tasks',
        error: err
      })
    })
  }
  
  static getOne(req,res){
    task.findOne({'_id': req.params.id})
    .then((data) => {
      res.status(200)
      .json({
        msg: 'Show task',
        task: data
      })
    }).catch((err) => {
      res.status(500)
      .json({
        msg: 'Unable to get task',
        error: err
      })
    })
  }
  
}

module.exports = Task;