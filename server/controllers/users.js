const express = require("express")
const app = express.Router()
const userModel = require("../models/user")

app
    .get('/' ,(req,res) =>{
        res.send(userModel.list)
    })

module.exports = app