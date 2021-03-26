const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(
  process.env.MONGODB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
)
  .then(function () {
    console.log('Connected to DB...')
  })
  .catch(function (err) {
    console.log(err)

    res.status(500)
    res.sendFile(__dirname + '/public/500.html')

  });

module.exports = mongoose;