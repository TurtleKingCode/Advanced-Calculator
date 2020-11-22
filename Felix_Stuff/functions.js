var trig = [
	'sin',
	'cos',
	'tan'
];
var arr1 = [
	'3',
	'!'
];
var arr2 = [
	'cos',
	'(',
	'pi',
	')',
	'!'
];
var arr3 = [
	'3',
	'!',
	'+',
	'3',
	'!'
]
function match(array, re) {
	var mtch = [];
	for (var i in array) {
		i = array[i];
		if (i == re) {
			mtch.push(i);
		}
	}
	return mtch;
}


function backCheck(symbol, func, mthArray, clssArray = undefined) {
	while (mthArray.includes(symbol)) {
		// for (var i = 0; i < match(mthArray, symbol).length; i++) {
			var index = mthArray.indexOf(symbol);
			var numIndex = index - 1;
			var prevNum = mthArray[numIndex];
			if (!isNaN(mthArray[numIndex])) {
				var prevNum = mthArray[numIndex];
				mthArray.splice(numIndex, 2, `${func}(${prevNum})`);
			} else if (prevNum == ')') {
				console.log('oranges');
				var parVar = 0;
				var bgTxt = [];
				do {
					// prevNum = mthArray[numIndex];
					if (prevNum == '('){
						parVar--;
					} else if (prevNum == ')') {
						parVar++;
					}
					
					numIndex--;
					bgTxt.unshift(prevNum);
					// numIndex--;
					prevNum = mthArray[numIndex];
				} while (parVar > 0);
				if (trig.includes(prevNum)){
					bgTxt.unshift(prevNum);
				} else {numIndex++}
				mthArray.splice(numIndex, bgTxt.length + 1, `${func}(${bgTxt.join('')})`);
				console.log(numIndex);
			}
			// index = mthArray.indexOf(symbol);
			// numIndex = index - 1;
		// }
	}
	console.log(mthArray);
	return mthArray;
}
var arr5 = ['(', '6!', '-', '3!', ')', '!']
backCheck('!', 'factorial', arr5);