const mongoose = require('./connect.js')

const dbSeed = require(`./data/flowers.json`)

const Flower = require(`./models/flower.js`)

Flower.insertMany(dbSeed, function (error, flower) {
  console.log('Data import completed.')
  mongoose.connection.close()
})