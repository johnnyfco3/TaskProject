const express = require("express")
const app = express.Router()

const { requireAuth } = require("../models/auth")

const userModel = require("../models/user")

const CREATED_STATUS = 201

app
    // GET
    .get('/', requireAuth, (req,res) =>{
        res.send(userModel.list)
    })
    .get('/:id', requireAuth, (req,res)=>{
        const user = userModel.get(req.params.id)
        res.send(user)
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
        res.send({ success: true, errors: [], data: user })
        
    })
    .post('/login', (req,res, next)=>{
        userModel.login(req.body.email, req.body.password)
        .then(user => {
            res.send(user)
        }).catch(next)
    })

    // DELETE
    .delete('/:id', requireAuth, (req,res)=>{
        const user = userModel.remove(req.params.id)
        res.send({ success: true, errors: [], data: user })
    })
    .delete('/:id/:friend', requireAuth, (req,res)=>{
        const user = userModel.removeFriends(req.params.id, req.params.friend)
        res.send({ success: true, errors: [], data: user })
    })

    // PATCH
    .patch('/:id', requireAuth, (req,res, next)=>{
        userModel.update(req.params.id, req.body)
        .then(user => {
            res.send({ success: true, errors: [], data: user })
        }).catch(next)
    })

module.exports = app