const mongoose = require('../connect.js')
const express = require('express')
const Flower = require('../models/flower.js')

const router = express.Router()

router.get('/images/:id', function (req, res) {
  Flower.findOne({ id: req.params.id }, function (err, item) {

    if (err || !item) {
      res.status(404)
      res.sendFile(__dirname + '/public/404.html')
    }

    res.render('pages/single-item.ejs', {
      pageTitle: 'CPNT262-A5',
      flower: item
    })
  })
})

module.exports = route