// Ä/Ç ¹1

/*
area.addEventListener('click', function (e) {
  var target = this;
  var figure = document.createElement('div');
  figure.className = 'figure';
  figure.style.left = e.layerX + 'px';
  figure.style.top = e.layerY + 'px';
  target.appendChild(figure);
})
*/


// Ä/Ç ¹2

/*
var characters = [
    { 'name': 'Jack', 'age': 30, 'email': 'jack@gmail.com' },
    { 'name': 'Jon', 'age': 38, 'email': 'jon@gmail.com'  }
    ];

    
function pluck(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}


console.log(pluck(characters, 'name'));
console.log(pluck(characters, 'age'));
console.log(pluck(characters, 'email'));

*/

// Ä/Ç ¹3

/*
var array = [3, 6, 8, 90, 56];
var foo = function (x) {
return x * 2;
}
var map = function (fn, arr) {
var output = [];
    for (var i=0; i < arr.length ; ++i)
        output.push(fn(arr[i]));
    return output;
}
console.log(map(foo, array)); 
*/

// Ä/Ç ¹4


function fun1() {
    var rad = document.getElementsByName('figure');
    for (var i=0;i<rad.length; i++) {
        if (rad[0].checked) {
	area.addEventListener('click', function (e) {
	var target = this;
	var figure1 = document.createElement('div');
	figure1.className = 'figure1';
	figure1.style.left = e.layerX + 'px';
	figure1.style.top = e.layerY + 'px';
	target.appendChild(figure1);
})
}
	if (rad[1].checked) {
	area.addEventListener('click', function (e) {
	var target = this;
	var figure2 = document.createElement('div');
	figure2.className = 'figure2';
	figure2.style.left = e.layerX + 'px';
	figure2.style.top = e.layerY + 'px';
	target.appendChild(figure2);
})
}
}
}