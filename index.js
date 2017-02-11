var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();
var url = process.env.RECEIVING_URL;

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
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
  res.send('eh?');
//  request.post(url).form({
//    hub: 'hubID',
//    cell: 'cellName',
//    time: 'timestamp',
//    temp: 'temp',
//    sp: 60
//  });
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});

