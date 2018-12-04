
//1-й Вариант решения задачи.

/*
const man = {name: 'Bob', age: 20, email: 'man@gmail.com'};
const {email, ...man2 } = man;
console.log(man2);
*/

//2-й Вариант решения задачи.

var man = {
  name: 'Bob',
  age: 20,
  email: 'man@gmail.com',
};


var cuttedObj = function(obj, names) {
  var resObj = {...obj};
  names.forEach(function(i) {
  delete resObj[i];
  })
return resObj;
}
var man2 = cuttedObj(man, ['name', 'email']);

console.log(man2);