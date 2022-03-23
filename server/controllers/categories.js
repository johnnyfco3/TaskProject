const express = require("express")
const app = express.Router()
const categoryModel = require("../models/category")

app
    .get('/', (req, res) =>{
        res.send(categoryModel.cList)
    })

module.exports = app