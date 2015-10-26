var zmq = require('zmq')
var socket = zmq.socket( 'pub' )
var endpoint = 'tcp://0.0.0.0:5101';
var count = 0;
// binding is async
socket.bind(endpoint, function( err ){
// send a periodic message
setInterval( function(){
console.log( 'sending %s', ++count )
socket.send('hello world:pub_a.js:'+process.pid + ':' + (count))
}, 300 )
})