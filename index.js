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
  res.status(200).json(students)  
})

app.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const student = students.find(student => student.id === id)
  res.status(200).json(student)
})

app.post('/parkings', (req, res) => {
  students.push(req.body)
  res.status(200).json(students)
})