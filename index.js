const express = require('express')
const app = express('cors')
const cors = require('cors')
const axios = require('axios')
const port = 5000
const studentsRoutes = require('./students')


app.listen(port, () => {
  console.log(`server is running... on port${port}!`)
})

app.use(cors())
app.use(express.json())

app.use('/students, studentsRoutes')