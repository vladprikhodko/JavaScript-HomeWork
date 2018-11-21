
/*ДЗ №1*/
/*
var memory = prompt('Какая память телефона ? 64/128/256');
if (memory === null) {
        console.log('Введите значение');
    } else {
        memory = +memory;
    if (memory === 64) {
         console.log('Цена 25000 грн');
     } else if (memory === 128) {
         console.log('Цена 27000 грн');
     } else if (memory === 256) {
         console.log('Цена 29000 грн');
     } else {
        console.log('Такого объема памяти нет! Введите правильное число!');
     }
}
*/

 /*ДЗ №2*/
 
var img1 = 'Silver.png';
var img2 = 'Gold.png';
var img3 = 'Black.png';
var img4 = 'Default.png';
var color = prompt('Какой цвет телефона?  Silver/Gold/Black');
if (color === '') {
        document.write('<img src="./img/' + img4 + '" alt="">')
    }  else {
       if (color === 'Silver') {
        document.write('<img src="./img/' + img1 + '" alt="">')
        var memory = prompt('Какая память телефона ? 64/128/256');
    if (memory === null) {
        console.log('Введите значение');
    } else {
        memory = +memory;
    if (memory === 64) {
         console.log('Цена 25000 грн');
     } else if (memory === 128) {
         console.log('Цена 27000 грн');
     } else if (memory === 256) {
         console.log('Цена 29000 грн');
     } else {
        console.log('Такого объема памяти нет! Введите правильное число!');
     }
}
     } else if (color === 'Gold') {
        document.write('<img src="./img/' + img2 + '" alt="">')
        var memory = prompt('Какая память телефона ? 64/128/256');
    if (memory === null) {
        console.log('Введите значение');
    } else {
        memory = +memory;
    if (memory === 64) {
         console.log('Цена 25000 грн');
     } else if (memory === 128) {
         console.log('Цена 27000 грн');
     } else if (memory === 256) {
         console.log('Цена 29000 грн');
     } else {
        console.log('Такого объема памяти нет! Введите правильное число!');
     }
}
     } else if (color === 'Black') {
        document.write('<img src="./img/' + img3 + '" alt="">')
        var memory = prompt('Какая память телефона ? 64/128/256');
    if (memory === null) {
        console.log('Введите значение');
    } else {
        memory = +memory;
    if (memory === 64) {
         console.log('Цена 25000 грн');
     } else if (memory === 128) {
         console.log('Цена 27000 грн');
     } else if (memory === 256) {
         console.log('Цена 29000 грн');
     } else {
        console.log('Такого объема памяти нет! Введите правильное число!');
     }
}
     }
 }
 

