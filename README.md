# Advanced-Calculator
Biweekly Coding Challenge 3: With the Help of Felix... You can get your math homework done
<br/>
[link to Repl Project!](https://repl.it/@FranklinOguama/Advanced-Calculator#README.md)
<br/><br/>
### Reasons Why Felix and I Deserve 5 Bonus Points:
1. Felix
2. Basic Calculator<br/>
	a. Addition, Subtraction, Multiplication and Division
3. Scientific Calculator<br/>
	a. Trig Functions<br/>
	b. Inverse of Trig Functions<br/>
	c. Hyperbolic Trig Functions<br/>
	d. Inverse of Hyperbolic Trig Functions<br/>
	e. Pi and Euler's Number<br/>
	f. Log and Natural Lot<br/>
	g. Factorial<br/>
	h. Absolute Value<br/>
	i. Negation<br/>
	j. Floor and Ceiling<br/>
	k. Rounding
4. Linear Calculator<br/>
	a. Accepting linear equations/expressions<br/>
	b. Outputing Standard Form and Y-intercept Form<br/>
	c. Outputing Slope and y-intercept<br/>
	d. Accepting X values and outputting Y values<br/>
	e. Accepting Y values and outputting X values
5. Quadratic Calculator<br/>
	a. Accepting Quadratic expressions<br/>
	b. Outputting Standard Form and Vertex Form<br/>
	c. Outputting Axis of Symetry<br/>
	d. Outputting Vertex, Determinant, and Min or Max values<br/>
	e. Accepting X values and outputting Y values

# How to Use my Calculator
My Advance Calculater has 4 Different Calculators in it and I know this is rushed, but this is where you understand how to use them all.
## Tags
My Advance Calculator has 4 Different types of Calculators inside of it...
1. Basic
2. Scientific
3. Linear
4. Quadratic<br/>
In order to be able to use each of them, you need to know their tags...<br/>
The tag is the string you put infront of your math to tell Felix what Calculator to use<br/>
If you have ever used Discord Bots, you sort of understand where I'm coming from.<br/>
Now... Here are the Tags:
1. Basic: `basic`<br/>
	a. `Example: basic (8 - 4) * 10`<br/>
	b. `Example: basic 3 + 3 * 10`
2. Scientific: `sci`<br/>
	a. `Example: sci cos(pi) + sin(tau)`<br/>
	b. `Example: sci (8 + 4)/10`<br/>
	c. `Example: sci root(4, 256) --> This means the Fourth Root of 256
3. Linear: `linear`<br/>
	a. `Example: linear 3x + 2y = 10`<br/>
	b. `Example: linear y = 10x - 30`<br/>
	c. `Example: linear 0.5y - 10x`
4. Quadratic: `quad`<br/>
	a. `Example: quad 3x^2 + 10x - 15 = 0`<br/>
	b. `Example: quad 3(x - 19)^2 - 10`<br/>

Now, the Scientific Calculater is the default setting so if you want to use that one, you actually don't need a tag infront of it... But for the rest, you do.<br/><br/>
However, If you want to change the default calculator... What you do is use the tag `default` and then type the tag of the calculator you want to switch default to.<br/>
`Example: default quad`<br/>
`Example: default linear`<br/>
`Example: default basic`<br/>
## Keep in Mind
Keep in mind that you have to be very careful how you input your Tags and your Math so that Felix can read it.  Felix already has a lot in his hads reading your math and helping you with your Math homework.  The least you could do is be considerate and make it easier on him to read.<br/>
1. **Basic Calculator**: Make sure what you give it is what you would give a basic calculator...  This calculator also accepts the use of parentheses and exponents.  But beyond that it's still a Basic Calculator.<br/>
2. **Linear Calculator**: Make sure what you give it is a linear equation.  Meaning It has the variables y and x and that none of them are raised to some obscure number.  If I graph what you give it, it should result in a stright line.  Also **don't try subtracting a negative number**.  (Example: `y - -x`).  Symplify that or else you mess up Felix's innocent self.  Once you start using the Calculator, the instructions I placed inside there should suffice as guidence.
3. **Quadratic Calculator**: Make sure what you give is a quadratic equation.  Unlike the Linear Calculator, I only accept the variable x.  I don't want to see y anywhere.  **Don't even act cool and use `f(x)`.**  Because that isn't cool when you get an error report.  All the other rules above for the Linear Calculator also apply.  Here is what my Quadratic Calculator accepts as input.<br/>
	a. `x^2`
	b. `x^2 + 3x = 0`
	c. `x^2 + 3x + 4`
	d. `x^2 + 3x + 4 = 10`
	e. `3x^2 + 3x + 10x - 4 = 50 - 2x^2 + x`
	(Notice how there is no `y` in there... That's literally all I want... No other variables)
## Scientific Calculator
My Scientific Calculator is my most Advanced and Complex of all the Calculators I built here.<br/>
While all of the others took no more than a day and a half to build... This one took a whole 7 days... And as such deserves a deeper description thatn the others...<br/><br/>
### Trig Functions
My Scientific Calculator has 12 Trigonometric Functions.  Those include:
1. The Three main `sin`, `cos`, `tan`
2. Their inverses `asin`, `acos`, `atan`
3. The Hyperbolics `sinh`, `cosh`, `tanh`
4. And Their inverses `asinh`, `acosh`, `atanh`
### Using Trig Functions
The syntax for these trig functions is as such:</br>
Example: `cos(pi)`</br>
Example: `sin(tau)`</br>
Example: `tan(10 + 10 - 20)`</br>
### Degrees or Radians
My Scientific Calculator accepts Degrees and Radians... But you have to set it up youself.</br>
The Default Angle Setting is Radians.  You can change that using the `angle` tag and following up with the name of the angle setting.</br>
This is very very similar to the how you use the `default` tag.</br>
Example: `angle degrees`</br>
Example: `angle radians`</br>
### Constants
I have a few Constants in use in my Scientific Calculator... Those include
`pi`, `e`, `tau`</br>
As for how to use them... It's super easy...</br>
Example: `pi + tau - e^2 - cos(pi)`
### Operators
My Calculator accepts 8 operators... Those being `+`, `-`, `*`, `/`.</br>
It also Accepts factorial `!`, percentage `%`, and exponents in two forms `^` and `**` (for those of us programmers).</br>
Now, for the Sake of You programmers out there... I know y'all are sad to see me use the `%` for percentage... Don't worry, You can still acces modules.  All you've got to do is use `mod`.</br>
Example: `3 mod 2` --> **NO PARENTHESES.**  `mod` is an operator not a function.  Treat it like you would the plus and minus sign.
### Functions
I'm really really sorry that this ended up being supper long and tedius.  However, I take this very seriously and I would want to make sure you understand exactly how to use this Calcualator<br/>
I promice you this is the last one...<br/>
I have several Functions in my Scientific Calculator.  Those include<br/>
One parameter: `ln`, `sqrt`, `cbrt`, `abs`, `percent`, `factorial` `ceil`, `floor`, `negate`, `trunc`<br/>
Two parameters: `root`, `log`, `round`<br/><br/>
All of these functions work very similarly to the Trigonometric Functions above.<br/><br/>
Now, I will more deeply explain these...<br/><br/><br/>
`abs`: returns the absolute value of the number ->`abs(-10)`<br/>
`percent`: assumes the number is a percentage and returns the decimal version (Example `percent(3)` is 0.03) (This is actually the function I used to operate the `%` operator<br/>
`factorial`: returns the factorial of a number (This was actually the function I used to operate the `!` operator<br/>
`ln`: returns the natural log of the number `ln(100)`<br/>
`sqrt` and `cbrt`: returns the square root and cube root respectively<br/>
`ceil` and `floor`: returns the ceiling and the floor of a number<br/>
`negate`: returns the opposite of a number (Example: `negate(3)` results in -3 while `negate(-3)` results in 3)<br/>
`trunc`: removes everything after the decimal point (Example: `trunc(3.121)` results in just 3)<br/>
<br/>
`root`: if given two arguments, returns the nth root of the second value (Example: `root(4, 1024)` is the fourth root of 1024 or 5 since 4 to the fifth power is 1024).  If given one argument, return the square root.<br/>
`log`: if given two arguments, returns the log of the second argument with a base of the first (Example: `log(2, 1024)` is 10 because 2 is the base and 1024 is the value in question.  If given one argument, returns the logritim with default base 10.<br/>
`round`: if given tow arguments, returns the first argument rounded to the second number's place.  (Example: `round(3.141592, 3)` is 3.141.  If given one argument, returns the number rounded to the nearest whole number.
<br/><br/><br/>
# 🎉Thanks🎉
**Thank you Very Much for reading this far into my ReadMe file.  Or Skimming, or Skipping.  However, it doesn't matter.  I hope you found this helpful and I really hope you enjoyed Felix and I's Advanced Calculatro.**
