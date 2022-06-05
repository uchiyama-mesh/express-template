
const express = require('express')
const app = express()
const port = 3000

// use ejs
app.set('view engine', 'ejs')
// for receive POST body
app.use(express.urlencoded({extended: true}))

// public directory
// ex: http://localhost:3000/sample.txt
app.use(express.static('public'))

// routings
app.use('/', require('./routes/index'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})