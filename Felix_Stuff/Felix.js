const readline = require('readline-sync');
var setTrigFuncs = require('./ScientificSetup');
var radians = true;
setTrigFuncs(radians);
const algebra = require('algebra.js');
prompt = readline.question;

const Fraction = algebra.Fraction;
const Expression = algebra.Expression;
const Equation = algebra.Equation;

const Linear = require('./Calculators/Linear.js');
const Quadratic = require('./Calculators/Quadratic.js');

class Bot {
	constructor(name, description) {
		this.name = name;
		this.description = description;
		this.examinedMath;
		this.determined;
		this.errors = {
			noNumbers: "Felix_Error (noNumbers): This doesn't look like math to me"
		};
		this.Calculators = [
			{
				name: 'basic',
				func: Basic,
				description: 'Basic: My Basic Calculator is able to calculate the most basic of computations, such as addition, subtraction multiplication and division.  It can also deal with parentheses (no squar or curly brackets allowed, those mess me up).  And it can compute exponents.  (Exponents are denoted with the caret symbol (\'^\') and for those of you who program, two asterisk symbols (\'**\').',
				functionality: 'For those of you who want to know how my Basic Calculator work... I\'ll tell you.  The Basic Calculator uses the replace method to switch the caret symbosl with two asterisks and then trows the string into the eval function... Easy right?',
				operations: '(+) Addition, (-) Subtraction, (*) Multiplication, (/) Division, (^ or **) Exponents [Example: 3**2 and 3^2 are equal to Three Squared].'
			},
			{
				name: 'sci',
				func: Scientific,
				description: 'Scientific: My Scientific Calculator is able to calculate just about anything you see on a normal Scientific Calculator.  It can handle all the trig finctions (including the inverses of the trig functions, the hyperbolic trig functions and their inverses).  It can also handle logrithms as well as the natural log.  It can work with Squar Roots, Cube Roots, and all other types of Roots you wish.  It supports the variables PI, TAU, and Euler\'s Number.  It works with Factorials and it can represent a number as a percentage Ex [3% = 0.03]. Go to my ReadMe Page to see more.'
			},
			{
				name: 'linear',
				func: Linear,
				description: 'Linear: My Linear Calculator is able intake a linear and only a linear expression / equation.  It would then reveal the linear expression in standard form and in y-intercept form.  It would also allow you to input an x value and get the corresponding y value and vice versa.'
			},
			{
				name: 'quad',
				func: Quadratic,
				description: 'Quadratic: My Quadratic Calculator is able to intake a quadratic AND only a quadratic expression / equation in the form ax^2 + bx + c = 0 or a(x - h)^2 + k = 0.  And it would geive you all the information you can imagine to need including the axis of symmetry and vertex and more.  It would also allow you to input an x value and get the corresponding y value and vice versa.'
			},
			{
				name: 'default',
				func: Default,
				description: 'Default: My Default Function allows you to switch the default calculator'
			},
			{
				name: 'angle',
				func: Angle,
				description: 'Angle: My Angle Funciton allows you to swithc the Angle Settings'
			}
		];
		this.calcName = this.Calculators.map(x => x.name);
		this.calcFuncs = this.Calculators.map(x => x.func);
		this.calcDescribe = this.Calculators.map(x => x.description);
		this.defaultCalculator = this.Calculators[1];
		this.chosenCalculator;
	}
	intro() {
		Felix.print(`Hi, my name is ${this.name}.\n\n${this.description}`);
	}
	print(text) {
		console.log(text);
	}
	askName(user) {
		this.print("By the way, by which title may I refer to you as?")
		user.name = prompt("You can call me: ");
	}
	examineMath(mathString) {
		var str = mathString.replace(/ /g, '').toLowerCase();
		var math = false;
		for (var s in str.split('')) {
			s = str[s];
			if (!isNaN(s)) {
				math  = true;
				break;
			}
		}
		for (var nums in System.vars.txt) {
			if (math === true) {break;}
			if (str.includes(System.vars.txt[nums])) {
				math = true;
				break;
			}
		}
		for (var nums in System.trig.txt) {
			if (math === true) {break;}
			if (str.includes(System.trig.txt[nums])) {
				math = true;
				break;
			}
		}
		if (math === false) {
			this.print(this.errors.noNumbers)
			endLine();
			FelixCalculate();
		}

		this.examinedMath = str;
	}
	determineAction(enteredMath) {
		var found = undefined;
		for (var func in this.calcName) {
			func = this.calcName[func];
			if (enteredMath.startsWith(func)) {
				found = func
			} else {
				// this.chosenCalculator = this.defaultCalculator.func;
				// break;
				continue;
			}
		}
		if (found !== undefined) {
			var index = this.calcName.indexOf(found);
				this.chosenCalculator = this.calcFuncs[index];
				var re = new RegExp(`${found}`, 'g');
				enteredMath = enteredMath.replace(re, '');
		} else {
			this.chosenCalculator = this.defaultCalculator.func;
		}
		this.determined = enteredMath.replace(/ /g, '').toLowerCase();
	}
	revealSolution(solution) { 
		this.print("Your Answer is: ");
		console.log(solution);
	}
	resetVariables() {
		this.examinedMath = undefined;
		this.determined = undefined;
	}
}


// User
// ---------------------------
class calcUser{
	constructor() {
		this.name;
		this.enteredMath;
	}
	inputMath() { // Accept math input
		console.log("Input Your Math Here: ")
		this.enteredMath = prompt("");
		return this.entredMath;
	}
	resetVariables() {
		this.enteredMath = undefined;
	}
}
// ---------------------------


// System
// ---------------------------
class calcSystem {
	constructor() {
		this.solution;
		this.configuredMath;
		this.choppedMath;
		this.vars = {
			txt:['pi', 'e', 'tau'],
			func:['Math.PI', 'Math.E', 'Math.PI*2'],
			clss: 'var'
		};
		this.trig = {
			txt: ['sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'sinh', 'cosh', 'tanh', 'asinh', 'acosh', 'atanh'],
			func: ['Math.sin', 'Math.cos', 'Math.tan', 'Math.asin', 'Math.acos', 'Math.atan', 'Math.sinh', 'Math.cosh', 'Math.tanh', 'Math.asinh', 'Math.acosh', 'Math.atanh'],
			clss: 'trig'
		};
		this.operators = {
			txt: ['**', '!', '+', '-', '*', '/', '%', 'mod'],
			funcs: ['factorial', 'Math.pow'],
			clss: 'operator'
		};
		this.numbers = {
			txt: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
			funcs: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
			clss: 'number'
		};
		this.chars = {
			txt: ['(', ')'],
			funcs: undefined,
			clss: 'char'
		};
		this.funcs = {
			txt: ['factorial', 'root', 'log', 'ln', 'sqrt', 'cbrt', 'percent', 'abs', 'ceil', 'floor', 'round', 'negate', 'trunc'],
			funcs: ['Math.factorial', 'Math.nthroot', 'Math.nthroot'],
			clss: 'func'
		};
		this.comma = {
			txt: [','],
			funcs: [','],
			clss: 'comma'
		};
	}
	match = function(array, re) {
		var mtch = [];
		for (var i in array) {
			i = array[i];
			if (i == re) {
				mtch.push(i);
			}
		}
		return mtch;
	}
	hideE = function(str) {
		str = str.replace(/e/g, '\~');
		return str;
	}
	showE = function(str) {
		str = str.replace(/\~/g, 'e');
		return str;
	}
	backCheck(symbol, func, mthArray, clssArray) {
		while (mthArray.includes(symbol)) {
			var index = mthArray.indexOf(symbol);
			var numIndex = index - 1;
			var prevNum = mthArray[numIndex];
			if (clssArray[numIndex] == 'number' || clssArray[numIndex] == 'var') {
				mthArray.splice(numIndex, 2, `${func}(${prevNum})`);
			} else if (prevNum == ')') {
				var parVar = 1;
				var bgTxt = [];
				bgTxt.unshift(prevNum);
				numIndex--;
				prevNum = mthArray[numIndex];
				do {
					if (prevNum == ')') {
						parVar++;
					} else if (prevNum == '(') {
						parVar--;
					}
					bgTxt.unshift(prevNum);
					numIndex--;
					prevNum = mthArray[numIndex];
				} while(parVar > 0);
				var mthStr = mthArray.join('');
				var choppedMath = this.chopMathString(mthStr);
				mthArray = choppedMath.mathArray;
				clssArray = choppedMath.clssArray;
				if (clssArray[numIndex] == 'func' || clssArray[numIndex] == 'trig') {
					bgTxt.unshift(prevNum);
				} else {numIndex++;}
				mthArray.splice(numIndex, bgTxt.length + 1, `${func}(${bgTxt.join('')})`);
			}
			var mthStr = mthArray.join('');
			var choppedMath = this.chopMathString(mthStr);
			mthArray = choppedMath.mathArray;
			clssArray = choppedMath.clssArray;
		}
		var mthStr = mthArray.join('');
		var choppedMath = this.chopMathString(mthStr);
		return choppedMath;
	}
	chopMathString(examinedMath) {
		let str = examinedMath.replace(/\=/g, '').replace(/nthroot/g, 'root').replace(/nth_root/g, 'root').toLowerCase();
		var strList;
		var clssList = [];
		// clssList = Array(clssList);
		str = str.replace(/ /g, '')
							.replace(/\+/g, ' + ')
							.replace(/\-/g, ' - ')
							.replace(/\*/g, ' * ')
							.replace(/\//g, ' / ')
							.replace(/\^/g, ' ** ')
							.replace(/\%/g, ' % ')
							.replace(/!/g, ' ! ')
							.replace(/\(/g, ' ( ')
							.replace(/\)/g, ' ) ')
							.replace(/,/g, ' , ')
							.replace(/\*  \*/g, ' ** ');
		var termList = this.trig.txt.concat(this.funcs.txt);
		for (var thn in termList) {
			thn = termList[thn];
			var re = new RegExp(`${thn}`, 'g');
			str = str.replace(re, ` ${thn} `);
		}
		str = str.replace(/  /g, ' ');
		str = str.trim();
		strList = str.split(" ");
		
		clssList = setClss([this.vars, this.trig, this.operators, this.chars, this.funcs, this.comma], strList, this.numbers.clss);

		this.choppedMath = {mathString: str, mathArray: strList, clssArray: clssList};
		return this.choppedMath;
	}
	configureMath(choppedMath) {
		let factorialCheck = this.backCheck('!', 'factorial', choppedMath.mathArray, choppedMath.clssArray);
		let percentCheck = this.backCheck('%', 'percent', factorialCheck.mathArray, factorialCheck.clssArray);
		let mathString = percentCheck.mathString;
		let mathArray = percentCheck.mathArray;
		let clssArray = percentCheck.clssArray;
		this.configuredMath = mathString;
	}
	solveMath(math = this.configuredMath) { // Actually solve the math
		this.solution = eval(math);
	}
	resetVariables() {
		this.solution = undefined;
		this.configuredMath = undefined;
		this.choppedMath = undefined;
	}
}
// ---------------------------

// Setting up the three important players in this game
const Felix = new Bot('Felix', `I\'m Clyde\'s more sophisticated alter-ego.
Where Clyde is the game playing type, I'm the Math and Smarts type.`);
const User = new calcUser();
const System = new calcSystem();

// Setting up calculator functionality

// -------------------------
function FelixCalculate() {
	Felix.resetVariables();
	System.resetVariables();
	User.inputMath();
	Felix.determineAction(User.enteredMath);
	Felix.chosenCalculator(Felix.determined);
	endLine();
	FelixCalculate();
}

function Basic(basic) {
	basic = basic.replace(/\^/g, '**');
	console.log(eval(basic));
	return eval(basic);
}

function Scientific(science) {
	Felix.examineMath(science);
	System.chopMathString(Felix.examinedMath);
	System.configureMath(System.choppedMath);
	System.solveMath(System.configuredMath);
	Felix.revealSolution(System.solution);
}

function Default(theFault) {
	theFault = theFault.replace(/ /g, '').replace(/=/g, '').toLowerCase();
	var defaultCalculator;
	for (name in Felix.calcName) {
		if (theFault == Felix.calcName[name] && theFault !== 'default') {
			Felix.defaultCalculator = Felix.Calculators[name];
			console.log();
			console.log('The Switch is SuccessFul.');
			console.log();
			return;
		} else {
			continue;
		}
	}
	console.log();
	console.log('The Switch was UnSuccessful.');
	console.log();
	return;
}

function Angle(angle) {
	angle = angle.replace(/ /g, '').replace(/=/g, '').toLowerCase();
	if (angle.includes('degree')) {
		radians = false;
		setTrigFuncs(radians);
		console.log();
		console.log('The AngleSwitch was SuccessFul.');
		console.log();
		return;
	} else if (angle.includes('radian')) {
		radians = true;
		setTrigFuncs(radians);
		console.log();
		console.log('The AngleSwitch was SuccessFul.');
		console.log();
		return;
	} else {
		console.log();
		console.log('The AngleSwitch was UnSuccessFul.');
		console.log();
		return;
	}
}


function endLine() {
	Felix.print('-------------------------------------\n\n')
}

function setClss(arrays, array, numClss) {
	clss = [];
	for (var items in array) {
		items = array[items];
		if (!isNaN(items)) {
			clss.push(numClss);
		} else {
			for (var arr in arrays) {
				arr = arrays[arr];
				if (arr.txt.includes(items)){
					clss.push(arr.clss);
				}
			}
		}
	}
	return clss;
}

// -------------------------

 Felix.intro();
Felix.askName(User);
Felix.print(
	`\nWell, hello ${User.name},
It's a Pleasure to meet you.\n
And let me welcome you to Felix's Mega-Calculator!!
The One Calculator You'd Need for Literally ALL of your Math Homework.\n`); 

Felix.print(
	`Please!!! Check out my ReadMe page before using!!!\nThe Calculator is on...\n`
);

FelixCalculate();