test = (4+5)*100 + 50 / (2 * 5)
console.log(test)

function print(text) {
	console.log(text)
}

print('test')

(function() {
    var someThings = ...;

    ...

    module.exports.getSomeThings = function() {
        return someThings();
    }

}());

// main.js

var things = require("someThings");
...
doSomething(things.getSomeThings());