"use strict";
//Первое задание
let Tc = prompt("Введите температуру по Цельсию");
let Tf = (9 / 5) * Tc + 32;
alert(Tf);

// Второе задание
let name = "Василий";
let admin = name;
console.log(admin);

//Четвертое задание
/*
Операнд 108 заключен в двойные ковычки, то будет
происходить конкатенация. 
3.ТАк как один из операндов строка, то Две строки будут склеены в строку 1000108
4.Выводится результат в консоль 1000108
*/
let result1 = 1000 + "108";
console.log(result1);

