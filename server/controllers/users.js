const express = require("express")
const app = express.Router()

const { requireAuth } = require("../models/auth")

const userModel = require("../models/user")

const CREATED_STATUS = 201

app
    // GET
    .get('/', requireAuth, (req,res,next) =>{
        userModel.getList()
        .then(users => {
            res.send(users)
        }).catch(next)
    })
    .get('/:id', requireAuth, (req,res,next)=>{
        userModel.get(req.params.id)
        .then(user => {
            res.send(user)
        }).catch(next)
    })

    // POST
    .post('/', (req,res, next)=>{
        userModel.create(req.body)
        .then(user => {
            res.status(CREATED_STATUS).send(user)
        }).catch(next)
    })
    .post('/:id/:friend', requireAuth, (req,res, next)=>{
        userModel.addFriends(req.params.id, req.params.friend)
        .then(user => {
            res.send({ success: true, errors: [], data: user })
        }).catch(next)
    })
    .post('/login', (req,res, next)=>{
        userModel.login(req.body.email, req.body.password)
        .then(user => {
            res.send(user)
        }).catch(next)
    })
    .post('/seed', (req,res, next)=>{
        userModel.seed()
        .then(x => {
            res.send({ success: true, errors: [], data: x.insertedIds })
        }).catch(next)
    })

    // DELETE
    .delete('/:id', requireAuth, (req,res,next)=>{
        userModel.remove(req.params.id)
        .then(user => {
            res.send({success: true, errors: [], data: user})
        }).catch(next)
    })
    .delete('/:id/:friend', requireAuth, (req,res,next)=>{
        userModel.removeFriends(req.params.id, req.params.friend)
        .then(user => {
            res.send({success: true, errors: [], data: user})
        }).catch(next)
    })

    // PATCH
    .patch('/:id', requireAuth, (req,res, next)=>{
        userModel.update(req.params.id, req.body)
        .then(user => {
            res.send({ success: true, errors: [], data: user })
        }).catch(next)
    })

module.exports = app