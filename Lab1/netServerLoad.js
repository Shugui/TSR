var net = require('net');
var fs = require ('fs');

function getLoad (){
data = fs.readFileSync("/proc/loadavg");
var tokens = data.toString().split(' ');
var min1 = parseFloat(tokens[0])+0.01;
var min5 = parseFloat(tokens[1])+0.01;
var min15 = parseFloat(tokens[2])+0.01;
return min1 *10+ min5 *2+ min15 ;
};

var IpServer;
var socket = net.createConnection(80, 'www.google.com');
  	
socket.on('connect', function() {
	console.log('Server IP '+ socket.address().address);
	IpServer = socket.address().address;
    socket.end();
});

var server = net.createServer(function(c){
	console.log('Client connected');
	c.on('end', function(){
		console.log('Client disconnected');
	});

	c.on('data', function(data){
		var carga = getLoad();

		c.write('La carga de trabajo es: ' + carga);
		c.write('La IP del servidor es ' +IpServer);
		c.end();
	});
});


server.listen(8000, function(){
	console.log('Server bound');

});