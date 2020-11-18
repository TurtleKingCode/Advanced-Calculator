function print(text) {
	console.log(text);
}

// console.log(Math.E);
// console.log(Math.PI)

Math.factorial = function(num) {
	var s = 1;
	for (n = 1; n < num + 1; n++) {s *= n}
	return s
}

Math.mod = function (divisor, dividend) {
	return divisor % dividend;
}

var pos = {
	func: ['Math.abs', 'Math.acos', 'Math.acosh', 'Math.asin', 'Math.asinh', 'Math.atan', 'Math.atanh', 'Math.cbrt', 'Math.ceil', 'Math.cos', 'Math.cosh', 'Math.exp', 'Math.expm1', 'Math.floor', 'Math.log', 'Math.log10', 'Math.log2', 'Math.pow', 'Math.random', 'Math.round', 'Math.sign', 'Math.sin', 'Math.sinh', 'Math.sqrt', 'Math.tan', 'Math.tanh', 'Math.conv', 'Math.PI', 'Math.E', 'Math.G'],
	txt: ['abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'cbrt', 'ceil', 'cos', 'cosh', 'exp', 'expm1', 'floor', 'log', 'pow', 'random', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'conv', 'pi', 'e', 'G']
	letters: [
		'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
	]
}


mathArray = ['5', 'mod', '2'];
mathText = '5 mod 2'
mathSolve = [];


function txtTolst(txt) {
	txt = txt.replace(/ /g, '');
	txt = txt.split('');
	for (x in txt) {

	}
}

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
	} else if (c == '%' || c == 'mod') {
		c = '%';
	}
	mathSolve.push(c);
}
console.log(mathSolve);
console.log(eval(mathSolve.join('')));