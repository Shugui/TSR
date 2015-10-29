var ev = require('events');
var emitter = new ev.EventEmitter;
var e1="print", e2="read"; // name of events
var num1=0, num2=0;
// auxiliary vars
// register listener functions on the event emitter
emitter.on(e1, function(){ 
	console.log('event '+ e1 +' has happened '+ num1 +' times')}
);

emitter.on(e2, function(){
	console.log('event '+ e2 +' has happened '+ num2 +' times')}
);

emitter.on(e1, function(){
	console.log('something has been printed!')}
);

// generate the events periodically
setInterval(function(){
	emitter.emit(e1);},// generates e1
2000);// every 2 seconds

setInterval( function(){
	emitter.emit(e2);}, // generates e2
8000);// every 8 seconds