var net = require('net');
var IpCliente;
var IpServidor;

if(process.argv.length == 4){
	IpCliente = process.argv[2];
	console.log('Client IP: '+ IpCliente + '\r\n');
	IpServidor = process.argv[3];
}else{
	console.log('Invalid arguments numbers');
	process.exit();
}


var client = net.connect({address:IpServidor , port:8000 }, function(){
	client.write(IpCliente);
});

client.on('data', function(data){
	console.log(data.toString());
	client.end();
});

client.on('end', function(){
	console.log('Client disconnected');
	process.exit();
});