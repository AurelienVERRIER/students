const express = require('express')
const app = express('cors')
const cors = require('cors')
const axios = require('axios')
const port = 5000
const studentsRoutes = require('./routes/students')
const students = require('./students')


app.use(cors())
app.use(express.json())

app.use('/students', studentsRoutes)

app.listen(port, () => {
  console.log(`server is running... on port${port}!`)
})

app.get('/students', (req, res) => {
  res.send(students.json)
})

app.post('/students', (req, res) => {
  students.push
})