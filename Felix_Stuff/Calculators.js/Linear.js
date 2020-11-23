function Linear(linear) {
	var string = linear.replace(/ /g, '');
	//If it has an equal sighn, shift everything to the left side of the array
	var array = string.includes('=') ? 
	[string.split('=')[0]+'-'+'('+string.split('=')[1]+')', '0'] :
	[string, '0'];

	var side = {
		left: algebra.parse(array[0]).simplify(),
		right: algebra.parse(array[1]).simplify()
	}
	var equation = new Equation(side.left, side.right);
	var variables = side.left.terms.map(x => x.variables[0].variable);
	var coefficients = equation.lhs.terms.map(x => x.coefficients.toString());
	var A = coefficients[0];
	var B = coefficients[1];
	var C = side.left.constants[0] * -1;
	var x = variables[0];
	var y = variables[1];
	var m = (A * -1) / B;
	var b = C/B;
	var times = A < 0 ? -1 : 1;
	var standard = equation;
	standard.lhs = equation.lhs.add(C).multiply(times);
	standard.rhs = equation.rhs.add(C).multiply(times);
	var intercept = 'y = ' + equation.solveFor('y');
	
	var form = {
		standard: standard.toString(),
		intercept: intercept.toString()
	}
	function solve(value, m, b) {
		var yValue = m*value + b;
		return 'Your y value is ' + yValue + '\n' + 'The point is (' + value + ', ' + yValue + ')' ;
	}
	Felix.print();
	Felix.print('Standard Form: ' + form.standard);
	Felix.print('Y-intercept From: ' + form.intercept);
	Felix.print('Slope: ' + m);
	Felix.print('Y-intercept: ' + `(0, ${b})`);
	Felix.print();
	Felix.print('If you want to leave type "done".');
	Felix.print('Otherwhise, if you want to find the value of y given x, supply me a value for x.');
	Felix.print();
	function asking(){ 
		statement = prompt('x = ');
		if (statement.toLowerCase() == 'done') {
			endLine();
			FelixCalculate();
		} else {
			Felix.print(solve(statement, m, b));
			Felix.print();
			asking();
		}
	}
	asking();
}