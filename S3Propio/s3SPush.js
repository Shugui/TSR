var zmq = require('zmq');
var rp = zmq.socket('push');
rp.bind('tcp://127.0.0.1:8888',
	function(err) {
		if (err) throw err;
});
rp.send("Push");