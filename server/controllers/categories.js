const express = require("express")
const app = express.Router()
const categoryModel = require("../models/category")

const CREATED_STATUS = 201

app
    .get('/', (req, res) =>{
        res.send(categoryModel.cList)
    })
    .get('/:id', (req, res) =>{
        res.send(categoryModel.get(req.params.id))
    })
    .post('/', (req, res) =>{
        const category = categoryModel.create(req.body)
        res.status(CREATED_STATUS).send(category)
    })


module.exports = app