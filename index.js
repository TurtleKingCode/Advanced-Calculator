var algebra = require('algebra.js');

var Fraction = algebra.Fraction;
var Expression = algebra.Expression;
var Equation = algebra.Equation;

var expr1 = new Expression("x");
expr1 = expr1.add(2);
expr1 = expr1.multiply(4);

var expr2 = new Expression("x");
expr2 = expr2.multiply("y");
expr2 = expr2.multiply(new Fraction(1, 3));
expr2 = expr2.add(4);

var expr3 = expr1.multiply(expr2);

console.log("(" + expr1.toString() + ")(" + expr2.toString() + ") = " + expr3.toString());
