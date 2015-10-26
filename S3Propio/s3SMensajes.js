var zmq = require('zmq');
var rp = zmq.socket('rep');
rp.bind('tcp://127.0.0.1:8888',
	function(err) {
		if (err) throw err;
});

rp.on('message', function(){
	for (var key in arguments) {
		console.log("Part" + key + ": " + arguments[key]);
	};
	rp.send('World');
});