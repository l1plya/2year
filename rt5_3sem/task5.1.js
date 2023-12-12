/* 
1) Предположим, что объект, представляющий человека, имеет свойства для имени и фамилии. 
Напишите функцию сравнения, которая сравнивает фамилии, а в случае совпадения сравнивает имена.
*/

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

function comparePeople(person1, person2) {
    if (person1.lastName === person2.lastName) {
      if (person1.firstName === person2.firstName) {
        return `Фамилии и имена совпадают для ${person1.firstName} ${person1.lastName}`;
      } else {
        return `Фамилии совпадают, но имена различаются для ${person1.firstName} ${person1.lastName} и ${person2.firstName} ${person2.lastName}`;
      }
    } else {
      return `Фамилии различаются для ${person1.firstName} ${person1.lastName} и ${person2.firstName} ${person2.lastName}`;
    }
}

const person1 = new Person("Иван", "Иванов");
const person2 = new Person("Пётр", "Иванов");
const person3 = new Person("Анна", "Иванова");
const person4 = new Person("Аня", "Иванова");

console.log(comparePeople(person1, person2));
console.log(comparePeople(person1, person3));
console.log(comparePeople(person2, person3));
console.log(comparePeople(person3, person4));