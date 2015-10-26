var zmq = require('zmq');
var rp = zmq.socket('rep');
rp.bind('tcp://127.0.0.1:8889',
	function(err) {
		if (err) throw err;
});
rp.on('message', function(msg) {
	console.log('Request: ' + msg);
	rp.send('World 2');
});