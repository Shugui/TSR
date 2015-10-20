function Point(x,y){
	this.x = x; this.y=y;
}

function Segment(p1,p2){
	this.p1=p1 ; this.p2 = p2;
}

function distance(a,b){
	var dx = b.x-a.x, dy = b.y-a.y
	return Math.sqrt(dx*dx + dy*dy)
}

Segment.prototype.length = function(){
	return distance(this.p1, this.p2);
}

var p1 = new Point(10,0), p2 = new Point(5,5), p3 = new Point(3,6)
var se1 = new Segment(p1,p2), se2 = new Segment(p2,p3)

//console.log("Longitud de se1 es "+ se1.length())
//console.log("longitud de se2 es "+ se2.length())

function fibo(n){
	return (n<2)? 1 : fibo(n-2) + fibo(n-1)
}

console.log("iniciando ejecucion");

setTimeout(function(){
	console.log("M1 quiero escribir esto...")}, 10
);

var j = fibo(40);
function otroMensaje(m,u){
	console.log( m + "El resultado es: "+ u)
}

setTimeout(function(){
	otroMensaje("M3",j)
},1)