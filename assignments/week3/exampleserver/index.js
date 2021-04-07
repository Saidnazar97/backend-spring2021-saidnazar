const express = require('express');

// "Run" the Express package.
const app = express();

// Allows our Express Server to understand HTTP requests
const http = require('http').Server(app);

const port = 3000; // Most common "development" port is 8080.

//Provide the port number to listen to for Express.
http.listen(port);

console.log(
  'Running Express Server on ' + port + '. Use CTRL+C to stop Server.'
);

//Set up Express Routes

//Root Route, when someone types "http://localhost:300/"

app.use('/', express.static('public_html/'));

app.use('/secretwebsite', express.static('public_html/secret/'));
