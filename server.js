var path = require('path');
var express = require('express');
var app = require('./app/app.js');

app.use(express.static(path.join(__dirname, '/public')));
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
