function fib(n){
	return(n<2)?1:fib(n-2)+fib(n-1);
}

function otherMsg(m,u){
	console.log(m + ': El resultado es '+u);
}



console.log('Iniciando ejecución...');

setTimeout(function(){
	console.log('M1: Quiero escribir esto...');},
90000);

setTimeout(function(){
	console.log('M5: Quiero escribir esto...');},
100000);

var j = fib(40);


otherMsg('M2', j);

setTimeout(function(){
	otherMsg('M3',j);
}, 1);