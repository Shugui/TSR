var zmq = require('zmq');
var rq = zmq.socket('sub');
rq.identity= 'Test1';

//rq.connect('tcp://127.0.0.1:8889');

rq.on('message', function(msg) {
console.log('Pull2 escucha: ' + msg);
});


rq.subscribe('');
rq.connect('tcp://127.0.0.1:8888');


//setTimeout(function(){
//	rq.close();}, 5000
//);