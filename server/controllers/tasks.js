const express = require("express")
const app = express.Router();

const taskModel = require("../models/task")

app
    // GET
    .get('/', (req,res,next) =>{
        taskModel.getList()
        .then(tasks => {
            res.send({success: true, errors: [], data: tasks})
        }).catch(next)
    })
    .get('/:id', (req,res,next) =>{
        taskModel.get(req.params.id)
        .then(task => {
            res.send({success: true, errors: [], data: task})
        }).catch(next)
    })
    .get('/user/:userID', (req,res,next) =>{
        taskModel.getByUser(req.params.userID)
        .then(tasks => {
            res.send({success: true, errors: [], data: tasks})
        }).catch(next)
    })

    // POST
    .post('/', (req,res,next) =>{
        taskModel.create(req.body)
        .then(task => {
            res.send({success: true, errors: [], data: task})
        }).catch(next)
    })
    .post('/sort', (req,res,next) =>{
        taskModel.sortByDate()
        .then(tasks => {
            res.send({success: true, errors: [], data: tasks})
        }).catch(next)
    })

    // DELETE
    .delete('/:id', (req,res,next) =>{
        taskModel.remove(req.params.id)
        .then(task => {
            res.send({success: true, errors: [], data: task})
        }).catch(next)
    })
    .delete('/user/:user', (req,res,next) =>{
        taskModel.removeByUser(req.params.user)
        .then(task => {
            res.send({success: true, errors: [], data: task})
        }).catch(next)
    })

    // PATCH
    .patch('/:id', (req,res,next) =>{
        taskModel.update(req.params.id, req.body)
        .then(task => {
            res.send({success: true, errors: [], data: task})
        }).catch(next)
    })

module.exports = app