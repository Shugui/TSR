var nombre = "Hugo Montoto";
var age = 21;
var isProgrammer = true;
var likeJavaScript = true;

//console.log(isProgrammer === likeJavaScript)
//console.log(nombre);

var tim = {
	name: "Tim Castwell",
	age: 28,
	isProgrammer: true,
	likeJavaScript: true
}

var jack = Object.create(tim);
jack.name = "Jake Castwell"
jack.age = 4;
//console.log(jack.likeJavaScript);
//console.log(jack.name);

function makeClosure(name){
	return function() {
		return name;
	};
}

var description1 = makeClosure("Cloe the closure");
var description2 = makeClosure("Albert the awesome");
//console.log(description2());
//console.log(description1());



var Lane = {
	name: "Lane the lambda",
	description: function(){
		return this.name;
	}
};

var description = Lane.description;

var Fred = {
	description: Lane.description,
	name: "Fred the function"
};

//console.log(Lane.description());
//console.log(Fred.description());
//console.log(description());
//console.log(description.call({
//	name: "Zed the zeda"
//}));


