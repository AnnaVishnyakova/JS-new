"use strict";
    
/**
 * @param {namber} a
 * @param {namber} b
 * @returns {namber} 
 * Функция сложения операндов
 */
function sum(a,b){
    return a + b; 
    
}

/**
 * @param {namber} a
 * @param {namber} b
 * @returns {namber} 
 * Функция вычетания операндов
 */
function substruct(a,b){
    return a - b; 
}

/**
 * @param {namber} a
 * @param {namber} b
 * @returns {namber} 
 * Функция умножения операндов
 */
function mul(a,b){
    return a * b; 
}

/**
 * @param {namber} a
 * @param {namber} b
 * @returns {namber} 
 * Функция деления операндов
 */
function div(a,b){
    return a / b; 
}
/**
 * Функция по отбору оператора
 * @param {namber} arg1 
 * @param {namber} arg2 
 * @param {string} operation
 * @returns {namber} 
 */
function mathOperation(arg1,arg2,operation){
    switch(operation){
        case "+":
            return sum(arg1,arg2);
        case "-":
            return substruct(arg1,arg2);
        case "*":
            return mul(arg1,arg2);
        case "/":
            return div(arg1,arg2);
        default:
            throw new Error("операция " + operation + " не возможна");
        }

}
console.log(mathOperation(4,5,"+"));
console.log(mathOperation(10,6,"-"));
console.log(mathOperation(1,2,"*"));
console.log(mathOperation(24,12,"/"));
console.log(mathOperation(24,12,")"));