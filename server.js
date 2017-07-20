var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use(express.static(__dirname + '/build'));

app.all('*', function(req, res) {
  // res.set('Cache-Control', 'public, max-age=31536000');
  res.sendFile(__dirname + '/build/index.html');
});

server.listen(PORT);
console.log(`Listening on port ${PORT}`);
