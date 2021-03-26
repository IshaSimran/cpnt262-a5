const mongoose = require('../../../connect.js')
const express = require('express')
const Flower = require('../../../models/flower.js')

const router = express.Router();

router.get('/api/v0/gallery', function (req, res) {
  Flower.find(function (err, flowers) {
    if (err) {
      res.status(404)
      res.sendFile(__dirname + '/public/404.html')
    }
    res.json(flowers)
  })
})

module.exports = router
