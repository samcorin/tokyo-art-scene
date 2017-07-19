const express = require('express')
const app = express()

app.use(express.static('build'))

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.listen(3000, '127.0.0.1')