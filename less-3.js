// Задача 1 +

const arrNumbers = [0, 1, 2, 3, 4, 5, 6 , 7 , 8 , 9 , 10];
for (let i = 0; i <= 10; i++) {
  if (arrNumbers[i] === 0) {
    console.log(`${arrNumbers[i]} - это ноль;`);
  }
  
  if (arrNumbers[i] % 2 === 0 && arrNumbers[i] !== 0) {
    console.log(`${arrNumbers[i]} - это четное число;`);
  }

  if (arrNumbers[i] % 2 !== 0) {
    console.log(`${arrNumbers[i]} - это нечетное число;`);
  }
}


/*// Задача 2  +

// вариант - 1
const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3,2);
console.log(array);


// вариант - 2
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(index => (index !==4 && index !==5)));*/




/*// Задача 3 +

const randomElements = [];

for (let i = 0; i <= 4; i++) {
  randomElements.push(Math.round(Math.random() * 10));
  
}
console.log(randomElements);
console.log(randomElements.map(element => (element ** 2)));*/


/*// Задача 4 +

const array1 = [];
for (let i = 0; i <= 4; i++) {
  array1.push(Math.round(Math.random() * 10));
  
}
console.log(array1.filter(el => (el !== 3)));
console.log(array1.map(number => (number * 1.1).toFixed(1)));*/

// Задача 5

// Вариант -1

/*for (let i = 1; i <= 20; i++) { 
  console.log('x'.repeat(i));
}
*/




/*//  Вариант - 2 Пирамида рандомных чисел массива
const arrRandom = [];
  for (let i = 0; i <= 19; i++) { 
    arrRandom.push(Math.round(Math.random() * 10));
  console.log(arrRandom);
  }*/



