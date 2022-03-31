require("dotenv").config();
const express = require('express')

const usersController = require("./controllers/users")
const tasksController = require("./controllers/tasks")
const categoriesController = require("./controllers/categories")

const app = express()
const port = process.env.PORT || 3000

app
  .use('/', express.static(__dirname + '/public/'))

  .use(express.json())

  .get('/', (req, res) => {
    res.send('You are on the homepage')
  })
  .use('/api/users', usersController)
  .use('/api/tasks', tasksController)
  .use('/api/categories', categoriesController)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})