var express = require('express');
var router = express.Router();
// var app = express();
var normalobject = require("../data/friends");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

var fs = require('fs');
// if youve already added a friend api-route allfriends sends normalobject in seperate file. else
// it sends newarray from this file. 
// define the home page route

router.get('/api/allfriends', function (req, res) {

//   json(newarray);
return res.json(newarray);

});

let finishdata2 = normalobject.arr;
let newarray = [];
for(let i = 0; i< finishdata2.length; i++){
    let strinfified = JSON.stringify(finishdata2[i]);
    newarray.push(strinfified);
} 
// define the about route
router.post('/api/addfriend', function (req, res) {
    // console.log(req.body);

    let infoinjson = JSON.stringify(req.body);
    // console.log(normalobject);
    console.log(infoinjson);
 

    console.log(normalobject);

    newarray.push(infoinjson);
    console.log("-----------------");
    console.log(newarray);


     fs.writeFile("./app/data/friends.js", "const arr = [" + newarray + "];  module.exports = { arr };", function(err){
        if (err) throw err;
      console.log('Updated!');
     });
     
});

module.exports = router