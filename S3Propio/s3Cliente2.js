var zmq = require('zmq');
var rq = zmq.socket('req');
rq.connect('tcp://127.0.0.1:8888',function(err) {
		if (err) throw err;
});
//rq.connect('tcp://127.0.0.1:8889');
rq.send('Soy');
rq.send('un');
//rq.send('cani')
rq.on('message', function(msg) {
console.log('Response: ' + msg);
});

rq.close();