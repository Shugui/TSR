var zmq = require('zmq');
var rq = zmq.socket('req');
rq.identity= 'Test1';
rq.connect('tcp://127.0.0.1:8888');
//rq.connect('tcp://127.0.0.1:8889');

rq.send(['hola', 'mundo']);

rq.on('message', function(msg) {
console.log('Response: ' + msg);
});


//setTimeout(function(){
//	rq.close();}, 5000
//);