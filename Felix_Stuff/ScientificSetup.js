function setup(radians) {
	pi = Math.PI;
	tau = Math.PI * 2;
	e = Math.E;
	sqrt = Math.sqrt;
	cbrt = Math.cbrt;
	nthroot = Math.root;
	factorial = Math.factorial;
	percent = function(num) {
		return (num/100);
	}
	abs = Math.abs;
	mod = function() {return '%'};
	ceil = Math.ceil;
	floor = Math.floor;
	round = function(val, places = 0) {
		var times = 10**places;
		return Math.round(val * times) / times;
	}
	negate = function(x) {return -x};
	trunc = Math.trunc; 
	log = function (base, val = undefined) {
		if (val == undefined) {
			return Math.log(base) / Math.log(10);
			} else {
				return Math.log(val) / Math.log(base);
			}
	}
	ln = Math.log;
	if (radians === true) {
		sin = Math.sin;
		cos = Math.cos;
		tan = Math.tan;
		asin = Math.asin;
		acos = Math.acos;
		atan = Math.atan;
		sinh = Math.sinh;
		cosh = Math.cosh;
		tanh = Math.tanh;
		asinh = Math.asin;
		acosh = Math.acosh;
		atanh = Math.atanh;
	} else {
		sin = degMath.sin;
		cos = degMath.cos;
		tan = degMath.tan;
		asin = degMath.asin;
		acos = degMath.acos;
		atan = degMath.atan;
		sinh = degMath.sinh;
		cosh = degMath.cosh;
		tanh = degMath.tanh;
		asinh = degMath.asin;
		acosh = degMath.acosh;
		atanh = degMath.atanh;
	}
}
var degMath = {
	sin: function(x) {
		return Math.sin((x*Math.PI)/180);
	},
	cos: function(x) {
		return Math.cos((x*Math.PI)/180);
	},
	tan: function(x) {
		return Math.tan((x*Math.PI)/180);
	},
	asin: function(x) {
		return Math.asin((x*Math.PI)/180);
	},
	acos: function(x) {
		return Math.acos((x*Math.PI)/180);
	},
	atan: function(x) {
		return Math.atan((x*Math.PI)/180);
	},
	sinh: function(x) {
		return Math.sinh((x*Math.PI)/180);
	},
	cosh: function(x) {
		return Math.cosh((x*Math.PI)/180);
	},
	tanh: function(x) {
		return Math.tanh((x*Math.PI)/180);
	},
	asinh: function(x) {
		return Math.asinh((x*Math.PI)/180);
	},
	acosh: function(x) {
		return Math.acosh((x*Math.PI)/180);
	},
	atanh: function(x) {
		return Math.atanh((x*Math.PI)/180);
	},

}

Math.factorial = function(x) {
	var y = 1;
	for (var z = 1; z <= x; z++) {
		y *= z;
	}
	return y;
}

Math.root = function(base, val) {
	return Math.pow(val, 1/(base));
}
module.exports = setup;
