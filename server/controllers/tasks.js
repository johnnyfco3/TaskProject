const express = require("express")
const app = express.Router();

const { requireAuth } = require("../models/auth")

const taskModel = require("../models/task")

const CREATED_STATUS = 201

app
    // GET
    .get('/', requireAuth, (req,res,next) =>{
        taskModel.getList()
        .then(tasks => {
            res.send(tasks)
        }).catch(next)
    })
    .get('/:id', requireAuth, (req,res,next) =>{
        taskModel.get(req.params.id)
        .then(task => {
            res.send(task)
        }).catch(next)
    })
    .get('/user/:userID', requireAuth, (req,res,next) =>{
        taskModel.getByUser(req.params.userID)
        .then(tasks => {
            res.send(tasks)
        }).catch(next)
    })

    // POST
    .post('/', requireAuth, (req,res,next) =>{
        taskModel.create(req.body)
        .then(task => {
            res.status(CREATED_STATUS).send(task)
        }).catch(next)
    })
    .post('/seed', (req,res,next) =>{
        taskModel.seed()
        .then(x => {
            res.send({ success: true, errors: [], data: x.insertedIds })
        }).catch(next)
    })

    // DELETE
    .delete('/:id', requireAuth, (req,res,next) =>{
        taskModel.remove(req.params.id)
        .then(task => {
            res.send({success: true, errors: [], data: task})
        }).catch(next)
    })

    // PATCH
    .patch('/:id', requireAuth, (req,res,next) =>{
        taskModel.update(req.params.id, req.body)
        .then(task => {
            res.send({success: true, errors: [], data: task})
        }).catch(next)
    })

module.exports = app