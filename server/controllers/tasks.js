const express = require("express")
const app = express.Router();
const taskModel = require("../models/task")

app
    .get('/', (req,res) =>{
        res.send(taskModel.tList)
    })

module.exports = app