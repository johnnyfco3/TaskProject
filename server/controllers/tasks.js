const express = require("express")
const app = express.Router();

const { requireAuth } = require("../models/auth")

const taskModel = require("../models/task")

const CREATED_STATUS = 201

app
    // GET
    .get('/', requireAuth, (req,res) =>{
        res.send(taskModel.list)
    })
    .get('/:id', requireAuth, (req,res) =>{
        const task = taskModel.get(req.params.id)
        res.send(task)
    })

    // POST
    .post('/', requireAuth, (req,res) =>{
        const task = taskModel.create(req.body)
        res.status(CREATED_STATUS).send(task)
    })

    // DELETE
    .delete('/:id', requireAuth, (req,res) =>{
        const task = taskModel.remove(req.params.id)
        res.send({success: true, errors: [], data: task})
    })

    // PATCH
    .patch('/:id', requireAuth, (req,res) =>{
        const task = taskModel.update(req.params.id, req.body)
        res.send(task)
    })

module.exports = app