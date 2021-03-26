const mongoose = require('mongoose')

const flowSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  width: Number,
  height: Number,
  pathURL: String,
  credit: String,
  linkURL: String,
  creditURL: String
})

module.exports = mongoose.model('Flower', flowSchema)