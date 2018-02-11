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
  
  static editOne(req,res){
    let input = {
      task: req.body.task,
      description: req.body.description,
      status: req.body.status || 'todo',
      updated_date: Date.now(),
      show_updated: Date.now()
    }
    task.findOneAndUpdate({
      "_id": req.params.id
    },{
      $set:{
        "task": input.task,
        "description": input.description,
        "status": input.status,
        "updated_date": input.updated_date,
        "show_updated": input.show_updated
      }
    }).then((data) => {
      res.status(200)
      .json({
        msg: 'Task updated',
        task: data
      })
    }).catch((err) => {
      res.status(500)
      .json({
        msg: 'Unable to edit task',
        error: err
      })
    })
  }
  
  static deleteOne(req,res){
    task.remove({"_id": req.params.id})
    .then((data) => {
      res.status(200)
      .json({
        msg: 'Task deleted',
        result: data
      })
    }).catch((err) => {
      res.status(500)
      .json({
        msg: 'Unable to delete task',
        error: err
      })
    })
  }
  
}

module.exports = Task;