const express = require('express')
const app = express('cors')
const cors = require('cors')
const axios = require('axios')
port = 5000

app.listen(port, () => {
  console.log(`server is running... on ${port}!`)
})

app.use(cors())