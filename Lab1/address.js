var net = require('net');

var server = net.createServer(function (socket) {
  socket.end("goodbye\n");
});

// grab a random port.
server.listen(function() {
  address = server.address().address;
  console.log("opened server on %s", address);
});