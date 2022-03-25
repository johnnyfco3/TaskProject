const express = require("express")
const app = express.Router();
const taskModel = require("../models/task")

const CREATED_STATUS = 201

app
    .get('/', (req,res) =>{
        res.send(taskModel.tList)
    })
    .get('/:id', (req,res) =>{
        const task = taskModel.get(req.params.id)
        res.send(task)
    })
    .post('/', (req,res) =>{
        const task = taskModel.create(req.body)
        res.status(CREATED_STATUS).send(task)
    })

module.exports = app