var express = require('express')
var router = express.Router()
var app = express();
var normalobject = require("../data/friends");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var fs = require('fs');
// define the home page route
router.get('/api/allfriends', function (req, res) {
  console.log("apisheetworking");
})
// define the about route
router.post('/api/addfriend', function (req, res) {
    // console.log(req.body);
    let infoinjson = JSON.stringify(req.body);
    // console.log(normalobject);
    console.log(infoinjson);
 

    let finishdata2 = normalobject.arr.push(infoinjson);
    console.log(normalobject);
    
    let newobject = normalobject.arr.push(infoinjson);
    console.log("-----------------");
    console.log(newobject);

     fs.writeFile("./app/data/friends.js", "const arr = [" + finishdata2 + "];  module.exports = { arr };", function(err){
        if (err) throw err;
      console.log('Updated!');
     });
  
})

module.exports = router