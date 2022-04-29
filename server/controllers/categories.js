const express = require("express")
const app = express.Router()

const categoryModel = require("../models/category")

app
    // GET
    .get('/', (req, res, next) =>{
        categoryModel.getList()
        .then(categories => {
            res.send({ success: true, errors: [], data: categories })
        }).catch(next)
    })
    .get('/:id', (req, res, next) =>{
        categoryModel.get(req.params.id)
        .then(category => {
            res.send({ success: true, errors: [], data: category })
        }).catch(next)
    })
    .get('/user/:email', (req, res, next) =>{
        categoryModel.getByUser(req.params.email)
        .then(categories => {
            res.send({ success: true, errors: [], data: categories })
        }).catch(next)
    })

    // POST
    .post('/', (req, res, next) =>{
        categoryModel.create(req.body)
        .then(category => {
            res.send({ success: true, errors: [], data: category })
        }).catch(next)
    })
    .post('/seed', (req, res, next) =>{
        categoryModel.seed()
        .then(() => {
            res.send({ success: true, errors: [], data: [] })
        }).catch(next)
    })
    
    // DELETE
    .delete('/:id', (req, res, next) =>{
        categoryModel.remove(req.params.id)
        .then(category => {
            res.send({ success: true, errors: [], data: category })
        }).catch(next)
    })

    // PATCH
    .patch('/:id', (req, res, next) =>{
        categoryModel.update(req.params.id, req.body)
        .then(category => {
            res.send({ success: true, errors: [], data: category })
        }).catch(next)
    })


module.exports = app