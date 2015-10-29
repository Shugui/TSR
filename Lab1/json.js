function PoligonoRegular(lados, longitud){ // constructor de la clase
	this.numLados=lados;
	this.longitudLado = longitud;
}


PoligonoRegular.prototype.perimetro = function(){ // metodo de la clase
	return this.numLados * this.longitudLado;
}

function Cuadrado (longitud){ // constructor de la clase
	this.numLados= 4;
	this.longitudLado = longitud;
}

Cuadrado.prototype = Object.create(PoligonoRegular.prototype); // herencia
Cuadrado.prototype.constructor = Cuadrado ;
var c = new Cuadrado(6); // creacion instancia
Cuadrado.prototype.superficie = function() { // metodo de la clase
return this.longitudLado * this.longitudLado ;
}
console.log ('el perimetro de un cuadrado de lado 6 es '+ c.perimetro());
console.log ('y su superficie es '+ c.superficie());
console.log ( JSON.stringify(c)); // estado del objeto c como string