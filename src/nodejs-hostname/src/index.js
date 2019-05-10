var express = require('express');
var app = express();
var os = require('os');

app.get('/', function (req, res) {
  var host = server.address().address;
  res.send('Hello world from ' + os.hostname() + "\n");
  console.log('Answered request on backend with hostname/ip ' + os.hostname() + '/' + host);
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
