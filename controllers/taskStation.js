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
    task.find({status: 'todo'})
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
  
  static getAllDone(req,res){
    task.find({status: 'done'})
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
      status: req.body.status || 'todo'
    }
    task.findOneAndUpdate({
      "_id": req.params.id
    },{
      $set:{
        "task": input.task,
        "description": input.description,
        "status": input.status
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
  
  static setDone(req,res){
    task.findOne({'_id': req.params.id})
    .then((data) => {
      // console.log(data,'ini setdone done');
      data.status = 'done'
      // console.log(data, 'mana donenya?');
      data.save()
      .then((updated) => {
        res.status(200)
        .json({
          msg: 'Show updated task',
          task: updated
        })
      }).catch((err) => {
        res.status(500)
        .json({
          msg: 'Unable to update task',
          error: err
        })
      })
    }).catch((err) => {
      res.status(500)
      .json({
        msg: 'Unable to get task',
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