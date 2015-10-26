var zmq = require('zmq')
var socket = zmq.socket( 'sub' )
var endpoint = 'tcp://0.0.0.0:5101';
// Add the event handler before we connect
socket.on('message', function( msg ){
msg = msg.toString().split(':');
var message = msg[0];
var file = msg[1];
var pid = msg[2];
var count = msg[3];
console.log("message `%s` no. %s from %s[%s]", message, count, file, pid);
});
// subscribe too all messages
socket.subscribe('');
// connect
socket.connect( endpoint ); 