/*//Задача 1

let a = 1, b = 1, c, d;

c = ++a;           //переменная a увеличивается на 1, затем выводится в консоль;
console.log(c);   //ответ: 2;

d = b++;          //переменная b сначала выводится в консоль, затем увеличивается на 1;
console.log(d);   // ответ: 1;

c = 2 + ++a;     //переменная a была 2 и увеличивается на 1 == 3, затем складывается с 2;
console.log(c);  // ответ: 5;

d = 2 + b++;     // переменная b была равна 1 и увеличивается на 1, затем складывается с 2;
console.log(d);  //ответ: 4;

console.log(a);  //ответ: 3; потому, что a == 3 с предыдущего шага, если бы вывод в консоль был console.log(++a), тогда а бы увеличилась;
console.log(b);  //ответ: 3; в предыдущем шаге b == 2 вывелась в консоль и увеличилась на 1, следовательно b == 3;*/



/*// Задача 2 

let y = 2;
let x = 1 + (y *= 2);

console.log(x); // ответ: 5, считаем по формуле;
console.log(y); // ответ:4, т.к. мы переопределили y *= 2;*/



/*// Задача 3

const a = Number(prompt('Введите число'));
const b = Number(prompt('Введите число'));

if (a > 0 && b > 0) {
  console.log(`Разность чисел a и b: ${(a - b)}`);
} else if (a < 0 && b < 0) {
  console.log(`Произведение чисел a и b: ${a * b}`);
} else if (a > 0 && b < 0 || a < 0 && b > 0) {
  console.log(`Сумма чисел a и b: ${a + b}`);
} else {
  console.log();
}*/



// Задача 4 

//const numUser = Number(prompt('Введите число'));
//const otherNumUser = Number(prompt('Введите число'));
 

/*const addition = (numUser, otherNumUser) => {
    return numUser + otherNumUser;
}
console.log(addition(numUser, otherNumUser));*/



/*function subtraction(numUser, otherNumUser) {
  if (numUser > otherNumUser) {
    console.log(numUser - otherNumUser);
  } else if (numUser < otherNumUser) {
    const sub2 = otherNumUser - numUser;
    console.log(sub2);
  }
  else if (numUser === otherNumUser) {
    console.log(0);
  }
}
subtraction(numUser, otherNumUser);*/



/*const multiplication = (numUser, otherNumUser) => {
    return numUser * otherNumUser;
}
console.log(multiplication(numUser, otherNumUser));*/



/*const division = (numUser, otherNumUser) => {
    return numUser / otherNumUser;
  }
console.log(division(numUser, otherNumUser));*/



/*//Задача 5

const number = Number(prompt('Введите число'));
const array = ['яблоко', 'яблока', 'яблок'];

const sklonenie = (number, array, cases = [2, 0, 1, 1, 1, 2]) => array[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
console.log(`Мы купили ${number} ${sklonenie(number, array)}.`);*/

