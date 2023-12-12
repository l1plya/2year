/*
Напишите функцию, которая возвращает все позиции, в которых заданная функция принимает значение true. 
Например, indexOf(arr, x => x > 0) возвращает все такие индексы i, что arr[i] положительно. 
*/

function indexOf(arr, condition) {
    const indexes = [];
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            indexes.push(i);
        }
    }
    return indexes;
} 
  

const numbers = [1, -2, 3, -4, 5, -6];
const positiveIndexes = indexOf(numbers, x => x > 0);
console.log(positiveIndexes); 
