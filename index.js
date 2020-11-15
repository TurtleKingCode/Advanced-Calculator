// var functions = require('./Felix_Stuff/functions');

function print(text) {
	console.log(text)
}

// console.log(Math.E);
// console.log(Math.PI)

Math.factorial = function(num) {
	var s = 1;
	for (n = 1; n < num + 1; n++) {s *= n}
	return s
}

mathArray = ['3.5', '+', '5', '^', '2'];
mathSolve = [];

for (b in mathArray) {
	c = mathArray[b];
	if (c == '!') {
		d = mathSolve.pop();
		c = `Math.factorial(${d})`
	} else if (c == '^') {
		d = mathSolve.pop();
		e = mathArray[mathArray.indexOf(c)+1];
		mathArray.splice(mathArray.indexOf(e), 1);
		console.log(e);
		c = `Math.pow(${d}, ${e})`
	}
	mathSolve.push(c);
}
console.log(mathSolve);
console.log(eval(mathSolve.join('')));