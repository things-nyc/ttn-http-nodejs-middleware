var request = require('request');

var mock = {"app_id":"heatseek-r1","dev_id":"test-dan-002","hardware_serial":"00BDAA66A8515B54","port":1,"counter":1,"payload_raw":{"type":"Buffer","data":[250,82,0,0,0,0,0,0,0,100]},"payload_fields":{"error":["none","none","none","none","none","none","none","none","none","none"],"tempC":[10.5,-10,-10,-10,-10,-10,-10,-10,15,-100]},"metadata":{"time":"2017-02-11T19:55:11.244771092Z","frequency":905.1,"modulation":"LORA","data_rate":"SF7BW125","coding_rate":"4/5","gateways":[{"gtw_id":"eui-008000000000a4f1","timestamp":3218478068,"time":"","channel":6,"rssi":-36,"snr":10.8,"rf_chain":1,"latitude":40.71076,"longitude":-74.00596,"altitude":148}]},"payload":{"error":["none","none","none","none","none","none","none","none","none","none"],"tempC":[10.5,-10,-10,-10,-10,-10,-10,-10,15,-100]},"_msgid":"1846b684.63b799"};

function sendRequest () {
  console.log('sendRequest');
  var options = {
    url: 'http://localhost:4000/ttn',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(mock)
  };

  request.post(options, function (error, response, body) {
    if (error) {
      console.log('error', error);
    } else {
      console.log('win!');
    }
  });
}

var interval = setInterval(sendRequest, 3000);

setTimeout(function () { clearInterval(interval); }, 30000);

// sendRequest();

