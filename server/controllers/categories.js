const express = require("express")
const app = express.Router()

const { requireAuth } = require("../models/auth")

const categoryModel = require("../models/category")

const CREATED_STATUS = 201

app
    // GET
    .get('/', /*requireAuth,*/ (req, res, next) =>{
        categoryModel.getList()
        .then(categories => {
            res.send({ success: true, errors: [], data: categories })
        }).catch(next)
    })
    .get('/:id', /*requireAuth,*/ (req, res, next) =>{
        categoryModel.get(req.params.id)
        .then(category => {
            res.send({ success: true, errors: [], data: category })
        }).catch(next)
    })
    .get('/user/:email', /*requireAuth,*/ (req, res, next) =>{
        categoryModel.getByUser(req.params.email)
        .then(categories => {
            res.send({ success: true, errors: [], data: categories })
        }).catch(next)
    })

    // POST
    .post('/', /*requireAuth,*/ (req, res, next) =>{
        categoryModel.create(req.body)
        .then(category => {
            res.status(CREATED_STATUS).send({ success: true, errors: [], data: category })
        }).catch(next)
    })
    .post('/seed', (req, res, next) =>{
        categoryModel.seed()
        .then(() => {
            res.send({ success: true, errors: [], data: [] })
        }).catch(next)
    })
    
    // DELETE
    .delete('/:id', /*requireAuth,*/ (req, res, next) =>{
        categoryModel.remove(req.params.id)
        .then(category => {
            res.send({ success: true, errors: [], data: category })
        }).catch(next)
    })

    // PATCH
    .patch('/:id', /*requireAuth,*/ (req, res, next) =>{
        categoryModel.update(req.params.id, req.body)
        .then(category => {
            res.send({ success: true, errors: [], data: category })
        }).catch(next)
    })


module.exports = app