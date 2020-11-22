const readline = require('readline-sync');
prompt = readline.question;
const setTrigFuncs = require('./settup');


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
				description: 'Scientific: My Scientific Calculator is able to calculate just about anything you see on a normal Scientific Calculater.  It can handle all the trig finctions (including the inverses of the trig functions, the hyperbolic trig functions and their inverses).  It can also handle logrithms as well as the natural log.  It can work with Squar Roots, Cube Roots, and all other types of Roots you wish.  It supports the variables PI, TAU, and Euler\'s Number.  It works with Factorials and it can represent a number as a percentage.'
			}
		];
		this.calcName = this.Calculators.map(x => x.name);
		this.calcFuncs = this.Calculators.map(x => x.func);
		this.defaultCalculator = this.Calculators[1];
		this.chosenCalculator;
	}
	intro() {
		console.log(`Hi, my name is ${this.name}.\n\n${this.description}`);
	}
	print(text) {
		console.log(text);
	}
	askName(user) {
		this.print("By the way, by which title may I refer to you as?")
		user.name = prompt("You can call me: ");
	}
	examineMath(mathString) { // Scan math for human errors
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
	determineAction(enteredMath) { // Determin wether Basic or Quadratic
		this.determined = enteredMath.replace(/ /g, '').toLowerCase();
	}
	revealSolution(solution) { // Print out Solution
		console.log(solution);
		return solution;
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
			txt: ['factorial', 'root', 'log', 'ln', 'sqrt', 'cbrt', 'prcnt', 'abs', 'ceil', 'floor', 'round', 'negate', 'trunc'],
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
	backCheck(symbol, func, mthArray, clssArray) {
		while (mthArray.includes(symbol)) {
			var index = mthArray.indexOf(symbol);
			var numIndex = index - 1;
			var prevNum = mthArray[numIndex];
			console.log(prevNum);
			if (clssArray[numIndex] == 'number' || clssArray[numIndex] == 'var') {
				mthArray.splice(numIndex, 2, `${func}(${prevNum})`);
			} else if (prevNum == ')') {
				console.log(true);
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
				console.log(mthArray);
				console.log(clssArray);
				if (clssArray[numIndex] == 'func' || clssArray[numIndex] == 'trig') {
					bgTxt.unshift(prevNum);
				} else {numIndex++;}
				console.log(numIndex);
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
		let str = examinedMath.replace(/\=/g, '').replace(/nthroot/g, 'root').replace(/nth_root/g, 'root');
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
							.replace(/,/g, ' , ');
		var termList = this.vars.txt.concat(this.trig.txt).concat(this.funcs.txt);
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
	configureMath(choppedMath) { // Set up math in a way that solveMath can handle
		let factorialCheck = this.backCheck('!', 'factorial', choppedMath.mathArray, choppedMath.clssArray);
		let percentCheck = this.backCheck('%', 'prcnt', factorialCheck.mathArray, factorialCheck.clssArray);

		/*
		modifier
		array
		function name
		---
		final Array
		*/
		let mathString = percentCheck.mathString;
		let mathArray = percentCheck.mathArray;
		let clssArray = percentCheck.clssArray;
		console.log(factorialCheck);
		console.log(percentCheck);
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
	workMath() {
	}
}
// ---------------------------

// Setting up the three important players in this game
const Felix = new Bot('Felix', 'I\'m Clyde\'s more soffisticated alter-ego.');
const User = new calcUser();
const System = new calcSystem();

// Setting up calculator functionality

// -------------------------
function FelixCalculate() {
	Felix.resetVariables();
	System.resetVariables();
	User.inputMath();
	Felix.determineAction(User.enteredMath);
	Felix.defaultCalculator.func(Felix.determined);
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

function endLine() {
	console.log('-------------------------------------\n\n')
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

/* Felix.intro();
Felix.askName(User);
Felix.print(
	`\nWell hello ${User.name},
It's a Pleasure to meet you.\n
And let me welcome you to Felix's Mega-Calculator!!
The One Calculator You'd Need for Literally ALL of your Math Homework.`); */

Felix.print(
	'The Calculator is on...\n'
);

FelixCalculate();