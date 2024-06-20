// Create web server
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

// Create server
var server = app.listen(8080, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server started at http://localhost:8080");
});