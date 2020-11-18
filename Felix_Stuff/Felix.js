const readline = require('readline-sync');
prompt = readline.question;
const setTrigFuncs = require('./settup');
var strings = []
class Bot {
	constructor(name, description) {
		this.name = name;
		this.description = description;
		this.examinedMath;
		this.determined;
		this.errors = {
			noNumbers: "Felix_Error (noNumbers): This doesn't look like math to me"
		};
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
		let str = mathString.replace(/ /g, '');
		let numList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
		let math = false;
		for (var nums in numList) {
			if (str.includes(numList[nums])) {
				math = true;
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
	determineAction(examinedMath) { // Determin wether Basic or Quadratic
		this.determined = examinedMath;
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
			txt:['pi', 'e'],
			func:['Math.PI', 'Math.E'],
			id: 'var'
		};
		this.trig = {
			txt: ['sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'sinh', 'cosh', 'tanh', 'asinh', 'acosh', 'atanh'],
			func: ['Math.sin', 'Math.cos', 'Math.tan', 'Math.asin', 'Math.acos', 'Math.atan', 'Math.sinh', 'Math.cosh', 'Math.tanh', 'Math.asinh', 'Math.acosh', 'Math.atanh'],
			id: 'trig'
		};
		this.symbols = {
			txt: ['^', '!'],
			funcs: ['factorial', 'Math.pow'],
			id: 'symbol'
		};
		this.numbers = {
			txt: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
			funcs: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
			id: 'number'
		};
		this.chars = {
			txt: ['(', ')'],
			funcs: undefined,
			id: 'char'
		}
	}
	mathFunctions() {
	}
	chopMathString(determinedAction) {
		let str = determinedAction.replace(/\=/g, '');
		var strList;
		var idList;
		str = str.replace(/ /g, '')
							.replace(/\+/g, ',+,')
							.replace(/\-/g, ',-,')
							.replace(/\*/g, ',*,')
							.replace(/\//g, ',/,')
							.replace(/\^/g, ',^,')
							.replace(/!/g, ',!,')
							.replace(/\(/g, ',(,')
							.replace(/\)/g, ',),');
		var termList = this.vars.txt.concat(this.trig.txt);
		for (var thn in termList) {
			thn = termList[thn];
			var re = new RegExp(`${thn}`, 'g');
			str = str.replace(re, `,${thn},`);
		}
		str = str.replace(/,,/g, ',').replace(/,/g, ' ');
		str = str.trim();
		strList = str.split(" ");
		var type;
		for (var term in strList) {
			term = strList[term];
			if(!isNaN(term)) {
				type = this.numbers.id;
				console.log(type);
				break;
			} else if (this.var.txt.includes(term)) {
				type = this.var.id;
				console.log(type);
				break;
			} else if (this.trig.txt.includes(term)) {
				type = this.trig.id;
				console.log(type);
				break;
			} else if (this.symbols.txt.includes(term)) {
				type = this.symbols.id;
				console.log(type);
				break;
			} else if (this.chars.txt.includes(term)) {
				type = this.chars.id;
				console.log(type);
				break;
			}
			idList = idList.push(type);
		}
		console.log(idList);
		console.log(type);
		console.log("This is the str --->" + str);
		this.choppedMath = str;
	}
	configureMath(choppedMath) { // Set up math in a way that solveMath can handle
		this.configuredMath = choppedMath;
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
	Felix.examineMath(User.enteredMath);
	Felix.determineAction(Felix.examinedMath);
	System.chopMathString(Felix.determined);
	System.configureMath(System.choppedMath);
	System.solveMath(System.configuredMath);
	Felix.revealSolution(System.solution);
	endLine();
	FelixCalculate();
}

function endLine() {
	console.log('-------------------------------------\n\n')
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