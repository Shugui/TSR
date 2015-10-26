var zmq = require('zmq');
var rp = zmq.socket('router');
rp.bind('tcp://127.0.0.1:8888',
	function(err) {
		if (err) throw err;
});

rp.on('message', function(){
	var id = "";
	for (var key in arguments) {
		console.log("Part" + key + ": " + arguments[key]);
		if(key == 0){
			id = arguments[key];
		}
	};
	rp.send([id,'','Router']);
});