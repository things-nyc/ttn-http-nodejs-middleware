var express = require('express');
var request = require('request');

var app = express();
var url = process.env.RECEIVING_URL

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/ttn', function (req, res) {
  console.log('request');
  console.log(req.body);
  var str = '';

  request('', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // send reformatted request to receiving server
      encodeURIComponent(str);
    }
  });
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});

