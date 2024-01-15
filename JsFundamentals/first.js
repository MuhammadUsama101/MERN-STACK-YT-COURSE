
// ---- implementation of for loop 

// for(let i=0; i<1000;i++){
//     console.log(i);
// }



// ---- implementation of while loop 

// let i=0;
// while(i<0){
//     console.log(i);
//     i++;
// }



// ---- implementation of do-while loop 

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<0);



// ---- We are going to write a table of 5

// let num=prompt('Enter a number of table');

// for(let i=1;i<=10;i++){
//     console.log(num*i);
// }



// ---- even numbers print , odd numbers print --HomeWork
 



// ---- Guess my favColor

// const favColor='blue';

// let guess=prompt('Enter the color');

// while(guess != favColor && guess != 'quit'){
//     guess=prompt('Please try again');
// }

// if(guess==favColor){
//     console.log('You won');
// }else{
//     console.log('You quit');
// }


//  ---- nested conditional statements 

// let a=10,b=20,c=50;

// if(a>=b){

//     if(a>=c){
//         console.log('a is greater');
//     }else{  // a<=c
//         console.log('C is greater');
//     }
// }else{  // a<=b
//     if(b>=c){
//         console.log('b is greater');
//     }else{ // b<=c
//         console.log('c is greater');
//     }
// }

// ---- Nested for loop

// for(let i=0;i<3;i++){
//     console.log('Outer loop');
//     for(let j=0;j<3;j++){
//         console.log(j);
//     }
// }


//  ---- Arrays

// let cars=['BMW','cultus','mehran'];

// cars.push('Thar');
// cars.pop();
// cars.unshift('Thar');
// cars.shift();

// console.log(cars)


//  ---- Todo App 


// let todo=[];

// let request=prompt('add,remove,list');

// while(request != 'quit'){
//     if(request=='add'){
//         let task=prompt('Enter the task');
//         todo.push(task);
//     }else if(request=='list'){
//         console.log('--------')
//         for(let i=0;i<todo.length;i++){
//             console.log(i,todo[i]);
//         }
//         console.log('--------')
//     }else if(request=='remove'){
//         let index=prompt('Enter the index');
//         todo.splice(index,1);
//     }
//     request=prompt('add,remove,list');
// }


// --- functions 

// let sum=(a,b)=>{
//     let sum=a+b;
//     console.log(`The sum is ${sum}`);
// }


// let a=3,b=2;
// let x=5,y=5;
// let w=60,k=10;
// sum(a,b);
// sum(x,y);
// sum(w,k);

// console.log(sum(a,b));


/*

forEach -- asal array ma changing krta ha 
map -- asal array ko change nnai krta 
filter -- filtring ka lia use hota ha 
reduce -- pichli values ko store krta ha 
some -- true ya false ma value deta ha 
find -- direct value deta ha ,first 

*/

// let arr=[1,5,3,7,5];
// console.log(arr)


// arr.forEach((value,i)=>{
//     arr[i]=value*value;
// });

// let arr1=arr.map((value)=>{
//     return value*value;
// })

// console.log(arr1)
// console.log(arr)

// let arr1=arr.filter((value)=>{
//     return value != 3;
// })

// console.log(arr1);

// let arr1 = arr.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log(arr1);

// let arr1=arr.some((value)=>{
//     return value%2==0;
// })

// console.log(arr1);

// let arr1=arr.find((value)=>{
//     return value%2==0;
// })

// console.log(arr1);

// let person={
//     firstName:{
//         oneName:'one',
//         twoName:'two',
//         threeName:'three'
//     },
//     lastName:'Arshad',
//     ph_no:12345,
//     image:['one','two','three']
// };

// console.log(person.firstName.threeName);

// Array of inspirational quotes
// const quotes = [
//   "The only way to do great work is to love what you do. - Steve Jobs",
//   "Believe you can and you're halfway there. - Theodore Roosevelt",
//   "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
//   "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
//   "Don't watch the clock; do what it does. Keep going. - Sam Levenson"
// ];

// function quoteGenerator(){
//   let index=Math.floor(Math.random()*quotes.length);
//   console.log(index)
//   return quotes[index];
// }

// console.log(quoteGenerator())

// let date=new Date()
// console.log(date.toDateString())

// console.log(this)

// let obj={
//   age:19,
//   get:function(){
//     console.log(this)
//   },
//   get1:()=>{
//     console.log(this)
//   }
// }
// obj.get();
// obj.get1();




// --> hoisting

// console.log(a)
// let a=5;
// console.log(a)

// --> premitive types

// let a=null;
// console.log(a)
// NaN
// let z=0/0;
// console.log(z)
// console.log(typeof(z)) 

// --> truthy,falsy
// --> undefined,NaN,null,0,-0,empty String

// let x=0;
// let str='';
// if(-10){
//   console.log('it has true value')
// }else{
//   console.log('it has false value')
// }

// --> immutable and mutable

// let str='usama';
// console.log(str[0]='o')
// str='mango'
// console.log(str)

// let arr=['one','two','three'];
// console.log(arr)
// arr[0]='four';
// console.log(arr)


// --> a<A false how ? 0061,0041
// let a='a',A='A';

// --> global,function,block,lexical


// function outerfunction(){
//   let x=3,y=2;
//   console.log(sum)
//   function innerFunction(){
//     let sum=x+y;
//     console.log(sum)
//   }
//   innerFunction()
// }
// outerfunction()
// --> closure



// console.log('usama1')
// console.log('usama2')
// console.log('usama3')
// console.log('usama4')
// console.log('usama5')
// try{
//     console.log(num)
// }catch(err){
//     console.log('the error is ',err)
// }
// console.log('usama6')
// console.log('usama7')
// console.log('usama8')
// console.log('usama9')
// console.log('usama10')

// console.log('hello');
// let id=setInterval(()=>{
//     console.log('usama')
// },2000)
// let id2=setInterval(()=>{
//     console.log('arshad')
// },2000)
// console.log('i am');
// console.log(id)
// console.log(id2)



// function storingData(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*20);
//     if(internetSpeed>=10){
//         success();
//     }else{
//         failure();
//     }
// }


// storingData('stu 1',()=>{
//     console.log('1 done');
//     storingData('stu 2',()=>{
//         console.log('2 done');
//         storingData('stu 3',()=>{
//             console.log('3 done')
//             storingData('stu 4',()=>{
//                 console.log('4 done')
//                 storingData('5 stu',()=>{
//                     console.log('5 done')
//                 },()=>{
//                     console.log('5 fail')
//                 })
//             },()=>{
//                 console.log('4 fail')
//             })
//         },()=>{
//             console.log('3 fail')
//         })
//     },()=>{
//         console.log('2 fail')
//     })
// },()=>{
//     console.log('1 fail');
// });




// function storingData(data,success,failure){
//     return new Promise((success,failure)=>{
//         let internetSpeed=Math.floor(Math.random()*20);
//         if(internetSpeed>=10){
//             success();
//         }else{
//             failure();
//         }
//     })
// }

// storingData('stu 1').then(()=>{
//     console.log('1 done')
//     return storingData('stu 2')
// }).then(()=>{
//     console.log('2 done')
//     return storingData('stu 3')
// }).then(()=>{
//     console.log('3 done')
//     return storingData('stu 4')
// }).then(()=>{
//     console.log('4 done')
//     return storingData('stu 5')
// }).then(()=>{
//     console.log('5 done')
// })
// .catch(()=>{
//     console.log('Network error')
// })



function storingData(data,success,failure){
    return new Promise((success,failure)=>{
        let internetSpeed=Math.floor(Math.random()*20);
        if(internetSpeed>=10){
            success();
        }else{
            failure();
        }
    })
}


async function processData(){
    try{
        await storingData('stu 1');
        console.log('1 done');
        await storingData('stu 2');
        console.log('2 done')
        await storingData('stu 3')
        console.log('3 done');
        await storingData('stu 4');
        console.log('4 done')
        await storingData('stu 5')
        console.log('5 done')
    }catch{
        console.log('Network Error')
    }

}

processData()