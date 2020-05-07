var express = require('express');
var router = express.Router();
var fs = require("fs");
const filePath = "models/users.json";
const fetch = require('node-fetch');
const searchFn = require('../util/search');


router.get('/listUsers', function (req, res) {
    console.log('list users called---');
   fs.readFile( filePath, 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });

   /*fetch('https://jsonplaceholder.typicode.com/users')
   .then(
     function(response) {
       if (response.status !== 200) {
         console.log('Looks like there was a problem. Status Code: ' +
           response.status);
         return;
       }
 
       // Examine the text in the response
       response.json().then(function(data) {
         console.log(data);
         res.end( data );
       });
     }
   )
   .catch(function(err) {
     console.log('Fetch Error :-S', err);
   });*/


});



router.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( filePath, 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users.filter((user) => user.id == req.params.id); 
      console.log( user );
      res.end( JSON.stringify(user));
   });
});


router.get('/search/:keyword', function (req, res) {
  // First read existing users.
  
  fs.readFile( filePath, 'utf8', function (err, data) {
     var users = JSON.parse( data );
     //var user = users.filter((user) => user.id == req.params.id); 
     var searchResults = searchFn(req.params.keyword,users);
     //console.log( searchResults );
     res.end( JSON.stringify(searchResults));
  });
});


router.post('/addUser', function (req, res) {
  fs.readFile(filePath, 'utf8', function (err, data) {
     data = JSON.parse( data );
     data.push(req.body);
     res.end( JSON.stringify(data));
  });
});

router.delete('/deleteUser/:id', function (req, res) {
   // First read existing users.
   fs.readFile( filePath, 'utf8', function (err, data) {
      users = JSON.parse( data );
      let filteredUsers = users.filter((user) => user.id != req.params.id); 
       
      //console.log( filteredUsers );
      res.end( JSON.stringify(filteredUsers));
   });
});




module.exports = router;