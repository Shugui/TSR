var zmq = require('zmq');
var rp = zmq.socket('pub');
rp.bind('tcp://127.0.0.1:8888',
	function(err) {
		if (err) throw err;
});


setInterval( function(){
		console.log( 'sending mesg' );
		rp.send('Publi');
	}, 300 );
