const express = require('express')
const app = express()

app.use(express.static(__dirname + '/build'));

app.all('*', function(req, res) {
  // failed to decode para %....% in index.html
  res.set('Cache-Control', 'public, max-age=31536000');
  res.sendFile(__dirname + '/build/index.html');
});

var server = require('http').Server(app);
server.listen(3000)