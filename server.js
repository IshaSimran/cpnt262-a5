const path = require('path')

const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')

const route_three = require('./routes/api/v0/v0.js')
const route_two = require('./routes/index.js')
const route_four = require('./routes/image.js')

const app = express()

app.set('view engine', 'ejs');

app.use(cors())

app.use(function (req, res, next) {
  res.locals = {
    siteHeading: "CPNT262 - A5",
    subHeading: "JSON Routes and MongoDB Atlas",
    copyright: "Isha Simran"
  }
  next()
})

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', route_two)
app.use('/', route_three)
app.use('/', route_four)

app.use(function (req, res) {
  res.status(404)
  res.sendFile(__dirname + '/public/404.html')
})

const port = process.env.PORT || 3000

app.listen(port, function () {
  console.log(`Listening on port: ${port}`)
})

