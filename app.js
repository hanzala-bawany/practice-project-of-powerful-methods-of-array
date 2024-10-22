// foreEach   ==> method

// let a = [ 
// { name : "hanzala" , age : "18"},
// { name :  "husnain" , age : "16"},
// { name :  "ali" , age : "20"},
// { name :  "zayan" , age : "16"},
// { name :  "huzaifa" , age : "22"},
// ];

// a.forEach(function(elements){
// console.log(Number(elements.age));
// })



// map ==> method of array

// let a = [ 
//     { name : "hanzala" , age : "18"},
//     { name :  "husnain" , age : "16"},
//     { name :  "ali" , age : "20"},
//     { name :  "zayan" , age : "16"},
//     { name :  "huzaifa" , age : "22"},
//     ];

//  let b =  a.map(function(elements){
//     // console.log(Number(elements.age));
//      if(elements.age>=19) return [elements.name ] ;        //           is me condition use nahi kar te hen
//     })                                                     //==>        lekin is ka benefit ye he ke return ke waqt changes kar sakte hen
//     console.log(b);                                        //           or agar ise kuch return nahi kia to array to lazmi banae ga lekin hamare array ki quantity ke hisab se new array me undefined return karega




//   filter  ==> method

// let a = [ 
//     { name : "hanzala" , age : "18"},
//     { name :  "husnain" , age : "16"},
//     { name :  "ali" , age : "20"},
//     { name :  "zayan" , age : "16"},
//     { name :  "huzaifa" , age : "22"},
//     ];

//  let b =  a.filter(function(elements){
// //  console.log(Number(elements.age));                        //       is me ham condition use kar sakte hen kio ke ye undefined return nahi kar ta jo return karen to bas unhi ka hi new array banae ga 
//      if(elements.age>=19) return elements ;                //       lekin is me return karte waqt changes nahi kar sakte
//     })
//  console.log(b); 




// find  ==> method

// let a = [ 
//     { name : "hanzala" , age : "18"},
//     { name :  "husnain" , age : "16"},
//     { name :  "ali" , age : "22"},
//     { name :  "zayan" , age : "16"},
//     { name :  "huzaifa" , age : "20"},
//     ];

//  let b =  a.find(function(elements){
// //  console.log(Number(elements.age));               //       is me ham condition use kar sakte hen lekin ye array ke start se end tak sab ko check kare ga jo bhi pehle is ke pass aya jis per condition true hui to wo sirf us element koreturn kar de ga 
//       return elements.name=="zayan" ;                //       lekin is me return karte waqt changes nahi kar sakte
//     })
//  console.log(b); 





//  challange 1

// let students = [
// {
//    name : "hanzala bwany",
//    score : 80 ,
//    favSubject : "cs" ,
//    id : 2
// },
// {
//    name : "husnain",
//    score : 70 ,
//    favSubject : "math" ,
//    id : 4
// },
// {
//    name : "ali",
//    score : 85 ,
//    favSubject : "cs" ,
//    id : 12
// },
// { 
//    name : "huzaifa",
//    score : 90 ,
//    favSubject : "urdu" ,
//    id : 6
// }
// ]

// let updatStudents = students.map(function(items){
// items.role = "student";
// return items;
// });
// console.log(updatStudents);





//   challange 2



// let students = [
//    {
//       name : "hanzala bwany",
//       score : 80 ,
//       favSubject : "cs" ,
//       id : 2
//    },
//    {
//       name : "husnain",
//       score : 70 ,
//       favSubject : "math" ,
//       id : 4
//    },
//    {
//       name : "ali",
//       score : 85 ,
//       favSubject : "cs" ,
//       id : 12
//    },
//    { 
//       name : "huzaifa",
//       score : 90 ,
//       favSubject : "urdu" ,
//       id : 6
//    }
//    ]

//    // use of for each method
//   students.forEach(function(items){
//       console.log(items);
//    })


//    // use od map method
//    let updatStudents = students.map(function(items){
//    items.role = "student";
//    return items;
//    });
//    console.log(updatStudents,"                     role update students through map method");


//    // use of filter method
//    let highScoresStudenrts = updatStudents.filter(function(items){
//       if(items.score>=80) {
//          return items
//       };
//    })
//    console.log(highScoresStudenrts,"                 higher score students throughfilter method");


//    // use of find method
//    let specificId = highScoresStudenrts.find(function(items){
//       return items.id == 2;
//    })
//    console.log(specificId,"           get by id through find method");






// let students = [
//    {
//       name : "hanzala bwany",
//       score : 80 ,
//       favSubject : "cs" ,
//       id : 2
//    },
//    {
//       name : "husnain",
//       score : 70 ,
//       favSubject : "math" ,
//       id : 4
//    },
//    {
//       name : "ali",
//       score : 85 ,
//       favSubject : "cs" ,
//       id : 12
//    },
//    { 
//       name : "huzaifa",
//       score : 90 ,
//       favSubject : "urdu" ,  
//       id : 6
//    },
//    { 
//       name : "huzaifa",
//       score : 95 ,
//       favSubject : "urdu" ,  
//       id : 6
//    }

//    ]  
//    let a = students.reduce(function(totalScore,items){  
//       // console.log(totalScore);
//       // console.log(items);
//       // return items.score+=totalScore;
//       return totalScore+=items.score;

//    },0)
//    console.log(a);




const userName = [];
const userPurchase = [];

let stopWhile ;
while (stopWhile !== "yes") {
   let userNameInput = prompt("give your name").toLowerCase().trim();
   userName.push(userNameInput)
   let userPurchaseInput = +prompt('give your purchasing value');
   userPurchase.push(userPurchaseInput);
   
   stopWhile = prompt("want to stop enter yes else no").toLowerCase();
   
}

let i = 0;
let inc = false;

let a = userPurchase.map(function (item) {
   if (inc) {
      i++;
   }
   inc = true;
   return {
      name: userName[i],
      purchasing: item
   }

})
console.log("persons who purche with purchasing price  :",a);

console.log("quatity of customers  :",a.length);

let b = a.filter(function(item){
if(item.purchasing>=2000) return true;
})
console.log("persons who purchasing above 2000 rupees",b);

let max = userPurchase.sort(function(a,b){
   return a-b;
}) 

let c = a.find(function(item){
   if (item.purchasing == max[max.length-1] ) {
      return true;
   }
})
console.log("higher purchase customer",c);



let d = a.reduce(function(total,item){
return total=total+item.purchasing;
},0)
console.log("total purchasing in my shop  :",d);