const express = require("express")
const app = express.Router()

const { requireAuth } = require("../models/auth")

const categoryModel = require("../models/category")

const CREATED_STATUS = 201

app
    // GET
    .get('/', requireAuth, (req, res) =>{
        res.send(categoryModel.cList)
    })
    .get('/:id', requireAuth, (req, res) =>{
        const category = categoryModel.get(req.params.id)
        res.send(category)
    })
    .get('/user/:email', requireAuth, (req, res) =>{
        const category = categoryModel.getByUser(req.params.email)
        res.send(category)
    })

    // POST
    .post('/', requireAuth, (req, res) =>{
        const category = categoryModel.create(req.body)
        res.status(CREATED_STATUS).send(category)
    })

    // DELETE
    .delete('/:id', requireAuth, (req, res) =>{
        const category = categoryModel.remove(req.params.id)
        res.send({ success: true, errors: [], data: category })
    })

    // PATCH
    .patch('/:id', requireAuth, (req, res) =>{
        const category = categoryModel.update(req.params.id, req.body)
        res.send(category)
    })


module.exports = app