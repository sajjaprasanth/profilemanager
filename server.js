var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var userProfileRouter = require('./routes/userProfileRoute.js');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/users',userProfileRouter);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})