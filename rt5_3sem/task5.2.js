/*
2) Напишите функцию, которая возвращает все позиции заданного значения в массиве. 
Например, indexOf(arr, 0) возвращает все такие индексы i, что arr[i] равно нулю. 
Воспользуйтесь методами map и filter.
*/

function findIndexes(arr, value) {
    let indexes = arr.map((element, index) => element === value ? index : -1);
    let validIndexes = indexes.filter(index => index !== -1);
    return validIndexes;
}

let arr = [0, 1, 2, 0, 3, 0, 4, 1];
let value = 1;
let result = findIndexes(arr, value);
console.log(result);
