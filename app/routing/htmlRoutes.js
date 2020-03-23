var express = require('express')
var router = express.Router()


// define the home page route
router.get('/', function (req, res) {
  res.sendfile('app/public/home.html')
})
// define the about route
router.get('/survey', function (req, res) {
  res.sendfile('app/public/survey.html')
})

module.exports = router