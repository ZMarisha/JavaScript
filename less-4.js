// Задача 1 

 const numbers = {
   keyin1: 1,
   keyin2: 2,
   keyin3: 3,
   keyin4: 4,
   keyin5: 5,
   keyin6: 6,
   keyin7: 7,
   }

   for (let values in numbers) {
     if (numbers[values] >= 3) {
       console.log(numbers[values]);
     }
   }



  // Задача 2 

  // const post = {
  //   author: "John", // вывести этот текст
  //   postId: 23,
  //   comments: [
  //     {
  //       userId: 10,
  //       userName: "Alex",
  //       text: "lorem ipsum",
  //       rating: {
  //         likes: 10,
  //         dislikes: 2, // вывести это число
  //       },
  //     },
  //     {
  //       userId: 5, // вывести это число
  //       userName: "Jane",
  //       text: "lorem ipsum 2", // вывести этот текст
  //       rating: {
  //         likes: 3,
  //         dislikes: 1,
  //       },
  //     },
  //   ],
  // };

  // console.log(post.author);
  // console.log(post.comments[0].rating.dislikes);
  // console.log(post.comments[1].userId);
  // console.log(post.comments[1].text);



  //Задача 3 

  // const products = [
  //   {
  //     id: 3,
  //     price: 200,
  //   },
  //   {
  //     id: 4,
  //     price: 900,
  //   },
  //   {
  //     id: 1,
  //     price: 1000,
  //   },
  // ];

  // products.forEach(element => {
  //   console.log(element.price);  // было 
  //   element.price = element.price - (element.price * 15 / 100);   
  //   console.log(element.price);  // стало
  // });




  // Задача 4 

  // const products = [
  //   {
  //     id: 3,
  //     price: 127,
  //     photos: [
  //       "1.jpg",
  //       "2.jpg",
  //     ],
  //   },
  //   {
  //     id: 5,
  //     price: 499,
  //     photos: [],
  //   },
  //   {
  //     id: 10,
  //     price: 26,
  //     photos: [
  //       "3.jpg",
  //     ],
  //   },
  //   {
  //     id: 8,
  //     price: 78,
  //   },
  // ];
  


  // let Newproducts = products.filter(element => element.photos != null && element.photos != 0);  
  // console.log(Newproducts);
  
  // let Newproducts1 = products.sort((el1, el2) => el1.price - el2.price);
  // console.log(Newproducts1);

  // Задача 5 +

  // const en = ["mon",  "tue",  "wed",  "thu",  "fri",  "sat",  "sun"];
  // const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

  // const together = {};
  

   // 1-й вариант

  // for (let i = 0; i < en.length; i++) {
  //   together[en[i]] = ru[i];
  // }


  // 2-й вариант  

  //  en.forEach((key, value) => {
  //    together[key] = ru[value]
  //  });
  // console.log(together);



  
// Задача 6 

  // const numbers = {
  //   key1: {
  //   keyin1: 1,
  //   keyin2: 2,
  //   keyin3: 3,
  //   },
  //   key2: {
  //   keyin1: 4,
  //   keyin2: 5,
  //   keyin3: 6,
  //   },
  //   }

  //   const array1 = Object.values(numbers.key1);
  //   const array2 = Object.values(numbers.key2);
  //   var res = array1.concat(array2);

  //   console.log(res.reduce((a, b) => a + b));
    
     
  

    
  
  
