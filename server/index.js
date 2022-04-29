require("dotenv").config();
const express = require('express')

const userModel = require('./models/user')
const usersController = require("./controllers/users")
const tasksController = require("./controllers/tasks")
const categoriesController = require("./controllers/categories")

const { requireAuth } = require("./models/auth")

const app = express()
const port = process.env.PORT || 3000

app
  .use('/', express.static(__dirname + '/public/'))
  .use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS");
    next();
})

  .use(express.json())
  .use((req, res, next) => {
    const auth = req.headers.Authorization
    if (auth) {
      const token = auth.split(' ')[1]
      userModel.fromToken(token)
        .then(user => {
          req.user = user
          next()
          }).catch(next)
    } 
    else {
      next()
    }
  })

  .get('/api/', (req, res) => {
    res.send('You are on the homepage')
  })
  .use('/api/users', usersController)
  .use('/api/tasks', /*requireAuth,*/ tasksController)
  .use('/api/categories', /*requireAuth,*/  categoriesController)

  .use((err, req, res, next) => {
    console.error(err)
    res .status(err.statusCode || 500)
        .send({errors: [ err.message ?? 'Internal server error' ]})
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})