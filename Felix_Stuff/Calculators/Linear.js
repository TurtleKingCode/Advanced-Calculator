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

function Linear(linear) {
	var string = linear.replace(/ /g, '');
	var array = string.includes('=') ? [string.split('=')[0]+'-'+'('+string.split('=')[1]+')', '0'] : [string, '0'];
	console.log(array);
	var side = {
		left: algebra.parse(array[0]).simplify(),
		right: algebra.parse(array[1]).simplify()
	}
	console.log(side.left.toString());
	var equation = new Equation(side.left, side.right);
	var variables = side.left.terms.map(x => x.variables[0].variable);
	var coefficients = equation.lhs.terms.map(x => x.coefficients.toString());
	var x = variables[0] == 'x' ? variables[0] : variables[1];
	var y = variables[1] == 'y' ? variables[1] : variables[0];
	var A = variables[0] == 'x' ? coefficients[0] : coefficients[1];
	var B = variables[1] == 'y' ? coefficients[1] : coefficients[0];
	var C = side.left.constants.length == 0 ? '0' : side.left.constants[0] * -1;
	var m = (A * -1) / B;
	var b = C/B;
	var times = A < 0 ? -1 : 1;
	var standard = equation;
	standard.lhs = equation.lhs.add(C).multiply(times);
	standard.rhs = equation.rhs.add(C).multiply(times);
	var intercept = 'y = ' + equation.solveFor(y);
	var xVal = true;
	if (C == '0') {standard.lhs = standard.lhs.subtract(C);}
	var form = {
		standard: standard.toString(),
		intercept: intercept.toString()
	}
	function solve(value, m, b, takeX) {
		var yValue = m*value + b;
		var xValue = (value - b) / m;
		var vvv = takeX == true ? 'y' : 'x';
		var point = takeX == true ? `(${value}, ${yValue})` : `(${xValue}, ${value})`
		var val = takeX == true ? yValue : xValue;
		return 'Your ' + vvv + ' value is ' + val + '\n' + 'The point is ' + point + '.'
	}
	print('');
	print('Standard Form: ' + form.standard);
	print('Y-intercept From: ' + form.intercept);
	print('Slope: ' + round2(m));
	print('Y-intercept: ' + `(0, ${round2(b)})`);
	print('X-intercept: ' + `(${round2(-b/m)}, 0)`)
	print('');
	print('If you want to leave type "done".');
	print('Otherwise, if you want to toggle between inputting an x value or a y value, type \'no\'.')
	print('With your inputed value for x or y, I will give you the corresponding value and point.');
	print('');
	function asking(){ 
		var question = xVal == true ? prompt('x = ') : prompt('y = ');
		if (question.toLowerCase() == 'done') {
			return;
		} else if (question.toLowerCase() == 'no') {
			xVal = !xVal;
			var vvv = !xVal == true ? 'x' : 'y';
			print(`I see you want to find the ${vvv} value.`)
			asking();
		} else {
			print(solve(question, m, b, xVal));
			print('');
			asking();
		}
	}
	asking();
}

module.exports = Linear;