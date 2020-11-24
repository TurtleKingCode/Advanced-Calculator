const readline = require('readline-sync');
var algebra = require('algebra.js');
prompt = readline.question;

var Fraction = algebra.Fraction;
var Expression = algebra.Expression;
var Equation = algebra.Equation;

function round2(val) {
	return Math.round(val * 100) / 100; 
}

function print(val) {
	console.log(val);
}

function Quadratic(quadratic) {
	var string = quadratic.replace(/ /g, '');
	var array = string.includes('=') ? [string.split('=')[0]+'-'+'('+string.split('=')[1]+')', '0'] : [string, '0'];
	var side = {
		left: algebra.parse(array[0]).simplify(),
		right: algebra.parse(array[1]).simplify()
	}
	var equation = new Equation(side.left, side.right);
	var variables = side.left.terms.map(x => x.variables[0].variable);
	var degrees = side.left.terms.map(x => x.variables[0].degree)
	var coefficients = equation.lhs.terms.map(x => x.coefficients.toString());
	var xx = degrees[0] == 2 ? variables[0] : variables[1];
	var x = degrees[1] == 1 ? variables[1] : variables[0];
	var a = degrees[0] == 2 ? coefficients[0] : coefficients[1];
	var b = degrees[1] == 1 ? coefficients[1] : coefficients[0];
	var c = side.left.constants.length == 0 ? '0' : side.left.constants[0];

	const aos = -b / (2 * a);
	const vertexy = (c - ((b ** 2) / (4 * a)));
	const vertex = [aos, vertexy];
	const disc = (b ** 2) - (4 * a * c);
	const hiInt = ((((b ** 2) - (4 * a * c)) ** 0.5) - b) / (2 * a);
	const loInt = (-(((b ** 2) - (4 * a * c)) ** 0.5) - b) / (2 * a);


var v1Sign = vertex[0] < 0 ? '+' : '-';
var verVer = Math.abs(vertex[0])
var v2Sign = vertex[1] < 0 ? '' : '+';
var minMaxText = a < 0 ? 'Maximum' : 'Minimum';
var tipValue = a < 0 ? hiInt : loInt;

var intercept = algebra.parse((a + '*((x ' + v1Sign + ' ' + verVer + ')^2) ' +v2Sign + vertex[1]).replace(/ /g, ''));
var aa = a == 1 ? '' : a;

	var standard = equation;
	var xVal = true;
	if (c == '0') {standard.lhs = standard.lhs.subtract(c);}
	var form = {
		standard: standard.toString(),
		intercept: (aa + '((x ' + v1Sign + verVer + ')^2) ' + v2Sign + vertex[1]).replace(/ /g, '')
	}
	function solve(value, a, b, c) {
		var yValue = a*(value**2) + b*value + c;
		var point = `(${value}, ${yValue})`
		return 'Your y value is ' + yValue + '\n' + 'The point is ' + point + '.'
	}
	print('');
	print('Standard Form: ' + form.standard);
	print('Vertex From: f(x) = ' + form.intercept);
	print('A value: ' + a);
	print('B value: ' + b);
	print('C value: ' + c);
	print('Y-intercpet: ' + `(0, ${round2(c)})`)
	print('Axis of Symmetry: ' + round2(aos));
	print(minMaxText + ' value: ' + round2(tipValue));
	print('Discriminant: ' + round2(disc));
	print('Vertex: (' + round2(vertex[0]) + ', ' + round2(vertex[1]) + '),');
	if (disc > 0) {
		print('Roots: ' + round2(hiInt) + ' & ' + round2(loInt));
	} else if (disc == 0) {
		print('Root: 0');
	} else if (disc < 0) {
		print('Roots: No Real Roots');
	}
	print('');
	print('If you want to leave type "done".');
	print('With your inputed value for x or y, I will give you the corresponding value and point.');
	
	print('');
	function asking(){ 
		var question = prompt('x = ');
		if (question.toLowerCase() == 'done') {
			return;
		} else if (question.toLowerCase() == 'no') {
			print('please read the instructions right, I cannot calculate the x value for a given y... At least not yet.\n If you want to check out a Quadratic Calculater Created by Franklin that does do that... use this URL...');
			print('https://repl.it/@FranklinOguama/Quadratice-Calculator#index.js');
			print('');
			asking();
		} else {
			print(solve(question, a, b, c));
			print('');
			asking();
		}
	}
	asking();
}

module.exports = Quadratic;