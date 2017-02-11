var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();
var url = process.env.RECEIVING_URL;

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// for parsing application/json
app.use(bodyParser.json());

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

  var data = {
    hub: req.body.hardware_serial,
    cell: 'Test0000cell0003',
    time: req.body.metadata.time,
    temp: req.body.payload.tempC[0],
    sp: 60
  };

  console.log('data');
  console.log(data);

  request.post(url).form({
    hub: 'hubID',
    cell: 'cellName',
    time: 'timestamp',
    temp: 'temp',
    sp: 60
  });

  res.send('Success');
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});

