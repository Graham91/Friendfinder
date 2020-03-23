var express = require('express')
var router = express.Router()


// define the home page route
router.get('/api/allfriends', function (req, res) {
  console.log("apisheetworking");
})
// define the about route
router.post('/api/addfriend', function (req, res) {
  
})

module.exports = router