// var setup = require('./settup.js');
var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (n > 0)
    return f[n];
  return n = factorial(n-1) * n;
}

rFact = function(num)
{
    if (num === 0 || num === 1)
      { return 1; }
    else
      { return num * rFact( num - 1 ); }
}
function log(base, val = undefined) {
	if (val == undefined) {
		return Math.log(base);
	} else {
		return Math.log(val) / Math.log(base);
	}
}

		vars = {
			txt:['pi', 'e'],
			funcs:['Math.PI', 'Math.E'],
			clss: 'var'
		};
		trig = {
			txt: ['sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'sinh', 'cosh', 'tanh', 'asinh', 'acosh', 'atanh'],
			funcs: ['Math.sin', 'Math.cos', 'Math.tan', 'Math.asin', 'Math.acos', 'Math.atan', 'Math.sinh', 'Math.cosh', 'Math.tanh', 'Math.asinh', 'Math.acosh', 'Math.atanh'],
			clss: 'trig'
		};
		operators = {
			txt: ['**', '!', '+', '-', '*', '/', '%'],
			funcs: ['factorial', 'Math.pow'],
			clss: 'operator'
		};
		numbers = {
			txt: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
			funcs: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
			clss: 'number'
		};
		chars = {
			txt: ['(', ')'],
			funcs: undefined,
			clss: 'char'
		};
		funcs = {
			txt: ['factorial', 'nth_root', 'nthroot'],
			funcs: ['Math.factorial', 'Math.nthroot', 'Math.nthroot'],
			clss: 'func'
		}

function chop(text) {
	let str = text.replace(/\=/g, '');
	var strList;
	str = str.replace(/ /g, '')
						.replace(/\+/g, ',+,')
						.replace(/\-/g, ',-,')
						.replace(/\*/g, ',*,')
						.replace(/\//g, ',/,')
						.replace(/\^/g, ',**,')
						.replace(/\%/g, ',%,')
						.replace(/!/g, ',!,')
						.replace(/\(/g, ',(,')
						.replace(/\)/g, ',),');
	var termList = vars.txt.concat(trig.txt);
	for (var thn in termList) {
		thn = termList[thn];
		var re = new RegExp(`${thn}`, 'g');
		str = str.replace(re, `,${thn},`);
	}
	str = str.replace(/,,/g, ',').replace(/,/g, ' ');
	str = str.trim();
	strList = str.split(" ");
	return strList;
}

function config(arr) {
	if(arr.includes('!')) {
		let index = arr.indexOf('!');
		let numIndex = index - 1;
		if (arr[numIndex] !== ')') {
			let num = arr[numIndex];
			arr.splice(numIndex, 2, `factorial(${num})`);
		} else {
			let parVar = 0;
			let newIndex = index - 1;
			let bgTxt = [];
			do {
				let newPlc = arr[newIndex];
				if (newPlc == ')') {
					parVar++;
				} else if (newPlc == '(') {
					parVar--;
				}
				// parVar = num == ')' ? parVar + 1 : num == '(' ? parVar - 1 : parVar;
				bgTxt.unshift(newPlc);
				newIndex--;
			} while (parVar > 0)
			let posFunc = funcs.txt.concat(trig.txt);
			if (posFunc.includes(arr[newIndex])) {
				bgTxt.unshift(arr[newIndex]);
			}
			bgTxt = bgTxt.join('');
			arr.splice(newIndex + 1, index - newIndex + 1, `factorial(${bgTxt})`);
		}
	}
	return arr;
}



// console.log(Math.pow(16, 1/2));

Math.root = function(base, val) {
	return Math.pow(val, 1/(base));
}
nth_root = Math.root;

// console.log(nth_root(10, 10000));
Array.prototype.match = function (re) {
	var mtch = [];
	for (var i in this) {
		i = this[i];
		if (i == re) {
			mtch.push(i);
		}
	}
	return mtch;
}

var arr = [1, 2, 3, 4, 10, 2, 1, 6, 4, 3, 2, 2, 4, 3, 6, 8, 45, 54, 1];
// console.log(arr.match(2));
Calculators = [
			{
				name: 'basic',
				func: 'Basic'
			},
			{
				name: 'sci',
				func: 'Scientific'
			}
		];

names = Calculators.map(x => x.func);
console.log(names);