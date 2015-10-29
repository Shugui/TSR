var promise = require('bluebird');
var fs = require('fs');
var readFileSync = promise.promisify(fs.readFile); //synchonous variant
var f = readFileSync('eventSimple.js','utf-8');
function printFile(data){
	console.log(data);
	return data;
} // aux function

function showLength(data){
	console.log(data.length); 
	return data ;
} // aux function

function showErrors(err){
	console.log('Error reading file ..'+ err );
}

f.then(printFile).then(showLength, showErrors);