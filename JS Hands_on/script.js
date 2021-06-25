// const backbag={
//     color:"red",
//     strips:{
//         leftstrip_length:20,
//         rightstrip_length:30
//     },
//      BottleHolder:1,
//      zipstatus:false,
//      bagstatus:function(zip){
//          this.zipstatus=zip;
//      }
   

// };
// var query='BottleHolder';
// console.log(backbag);
// console.log(backbag.color);
// console.log(backbag['strips']['leftstrip_length']);
// console.log(backbag[query]);
// console.log(backbag.zipstatus);
// console.log(backbag.strips.rightstrip_length);

import Back_Bag from './backbag.js'
import book from './book.js'

const backbag=new Back_Bag(
    "red",
    20,
    30,
    "Two",
    "Open",
    "December 5, 2018 15:00:00 PST"

);
console.log(backbag);
console.log(backbag.striplength.left);
console.log(backbag.zipstatus);
console.log(backbag.bagstatus("close"));
console.log(backbag.newstriplength(23,45));
console.log(backbag.zipstatus);
console.log(backbag.striplength.left);
console.log(backbag.date);
console.log(backbag.age());

const best=new book(
    "Book1",
    "author1",
    1996,
    200,
    196,
    "Reading"
 );
 console.log(best);
 const Book2=new book(
    "Book2",
    "author2",
    1999,
    200,
    196,
    "Reading"
 );
const content= `<h1 >${backbag.color}</h1>
                <h1>${backbag.striplength.left}</h1>
                <h1>${backbag.striplength.right}</h1>
              `
const listItems=`  <li>List1</li>
                    <li>List2</li>
                    <li>List3</li>`
                const content1=document.querySelector('.maincontainer');
    content1.innerHTML=content
    const navigation=document.createElement('nav');
    navigation.classList.add('navClass');
   const unorder=document.createElement('ul');
    unorder.classList.add('Unorder')
    navigation.append(unorder);
    unorder.innerHTML=listItems;
   document.querySelector('.maincontainer').append(navigation);




 console.log(Book2);
