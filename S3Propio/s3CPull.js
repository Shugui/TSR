var zmq = require('zmq');
var rq = zmq.socket('pull');
rq.identity= 'Test1';
rq.connect('tcp://127.0.0.1:8888');
//rq.connect('tcp://127.0.0.1:8889');

rq.on('message', function(msg) {
console.log('Pull1 escucha: ' + msg);
});


//setTimeout(function(){
//	rq.close();}, 5000
//);