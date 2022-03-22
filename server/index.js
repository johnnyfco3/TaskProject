const express = require('express')

const usersController = require("./controllers/users")
const tasksController = require("./controllers/tasks")
const categoriesController = require("./controllers/categories")

const app = express()
const port = 3000

app
  .get('/', (req, res) => {
    res.send('You are on the homepage')
  })
  .use('/users', usersController)
  .use('/tasks', tasksController)
  .use('/categories', categoriesController)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})