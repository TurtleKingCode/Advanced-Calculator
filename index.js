const lst = ['sin', 'cos', 'tan', 'pi']
var str = "cos(pi) + sin(pi) + 10";
str = str.replace('=', '');
str = str.replace(/ /g, '').replace(/\+/g, ',+,').replace(/\-/g, ',-').replace(/\*/g, ',*,').replace(/\//g, ',/,').replace(/\^/g, ',^,').replace(/!/g, ',!,');
for (var thn in lst) {
	thn = lst[thn];
	var re = new RegExp(`${[thn]}`, 'g');
	str = str.replace(re, `,${[thn]},`);
}
str = str.replace(/,,/g, ',').replace(/,/g, ' ');
str = str.trim();
var strlst = str.split(' ');
console.log(strlst);
console.log(str);
/*
YOU HAVE TO FIX THE FACT THAT WE CAN ONLY HANDLE ONE FACTORIAL
*/