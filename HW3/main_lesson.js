
var x = prompt("Enter the first number:"); 
var y = prompt("Enter the second number:"); 
var type = prompt("Enter the type of operation (+, -, /, *):"); 
var z;

function add(x,y) {
  z = x + y; 
document.write(z); 
}
function sub (x,y) {
  z = x - y; 
 document.write(z); 
} 
function mult (x,y) { 
 z = x * y; 
document.write(z); 
} 
function division (x,y) {
if ( y === 0) {
	document.write('Division by zero is impossible');
	} else {
	z = x / y; 
	document.write(z); 
	}
}

if (x === null || x === '') {
	document.write('<h1>'+'Enter the correct first number'+'</h1>');
} else {
	x = +x;
}

if (y === null || y === '') {
	document.write('<h1>'+'Enter the correct second number'+'</h1>');
} else {
     y = +y;
}


if (type === "-") {
    sub(x,y);
} else if (type === "+") {
        add(x,y); 
    } else  if (type === "*") {
         mult(x,y);
    } else if (type === "/") {
        division(x,y);
    } else {
	document.write('<h1>'+'Enter the correct type of operation'+'</h1>');
}




