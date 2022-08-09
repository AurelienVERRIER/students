const express = require('express')
const app = express()
const students = require('../students')

app.get('/', (req, res) => {
  res.json(students)
})

module.exports = app