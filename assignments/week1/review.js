// Variabless are used to hold data
var myFirstVariable = 'Hello World!';
let myFirstVariable = null;
const myFirstVariable = null;

// const varaiable that does not change once you have assigned a value
const myFirstVariable;
myFirstVariable = 10;

Infinity;

// Arrays and Objects
// Arrays are objects, BUT objectts are not arrays!
let myArray = [1, 2, 3, 4];
let myArray = new Array(10);

myArray[0] = 'Hello';
myArray[1000] = 'Goodbye';

let myObject = {};
let myObject = new Object();

// Comparison Operators
// == compares and coerces value if different datatypes.
// === compares values AND datatypes.
// < or <=
// > or >=
// != or !==
// +, -, /, *, %

// If statements
if (false) {
}

if (false) {
} else {
}

// The else if will only run  if the PREVIOUS condition was false
if (false) {
} else if (false) {
}

// both if statements will run regardless of each others condition.
if (false) { }
if (false) { }


if (false) { } else if (false) { } else { }


// Loops

// Similar as an if statements, but once done runs it again if the condition is true.
whilee(false) { };

do { } while (false);

for (let i = 0; i < 10; i++) { };

//Functions

let actualPINumber = math.PI;

let myFunction() {

}

myFunction();

let a = 100;
let b = a;
let c = b;
let d = c;

var z = myFunction;
var y = z;
var x = y;