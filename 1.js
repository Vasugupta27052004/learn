// function exampleFunction(){
//     if (true){
//       var functionscopedVar="I am function-scoped";
//       let blockScopedLet="I am blocked-scoped";
//       const blockedScopedConst="I an the function-scoped";
      
//     }
//     console.log(functionscopedVar);
//     console.log(blockScopedLet);
//     console.log(blockedScopedConst)
    
//   }
// //     exampleFunction();
// var shadowedVar ="I am global";
// function exampleFunction(){}
//     var shadowedVar ="I am local";
//     console.log(shadowedVar);

// // console.log(shadowedVar);
// console.log(x);
// let x=5;
// console.log(x);


// console.log(x);
// var x=5;
// console.log(x);
// hello();
// function hello(){
// // console.log("hello,world");}
// let examplevar=null;
// // console.log(typeof(examplevar));
// let person={
//     Name :"alice",
//     age :19,
//     isStudent:false
// };
// console.log(person.Name);
// let fruits =[1,"banana","orange"];
// console.log(fruits[1]);
// function add(a,b){
//     return a+b;
// }
// var a=(2,8);
// console.log(a)
// let x =5;
// let y=8;
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x>y);
// console.log(x<y);
// console.log(x===y);
// console.log(x!==y);
// let p= true;
// let q=false;
// console.log(p&&q);
// console.log(q||p)
// console.log(!p)
// for(let i=0;i<5;i++){
//     console.log(i);
// }
// let count =0;
// while(count<5){
//     console.log(count);
//     count++;
// }
// let count =0;
// do {
//     console.log(count);
//     count++;

// }while (count<5);
// let person ={name: "john",age: 39,occupation:"devloper"};
// for (let key in person){
//     console.log(key+":"+person[key]);
// }
// let car ={
//     make:"toyota",
//     model:"camry",
//     year:2022,
//     isElectricity: false,
//     start: function(){
//         console.log("Engine started !");
//     }

// };
// car.start();
// function book (title,author,year){
//     this.title=title;
//     this.author=author;
//     this.year=year;
// }
// let book1= new book("the catcher in the rye", "J.d.salinger",1951);
// let book2= new book("to kill", "J.d",1950);
// console.log(book1.title);
// console.log(book1.author);
// // console.log(book1.year);
// let fruits =["apple","banana","orange","grape"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// fruits.push("kiwi");
// fruits.unshift("mango")
// console.log(fruits);
// let removelast=fruits.pop();
// console.log(fruits);
// let indexOforange=fruits.indexOf("orange");
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }
// let citrus=fruits.slice(1,3);
// console.log(citrus);
// let removed=fruits.splice(1,2,"pear","melon");
// console.log(fruits);
// let moreFruits=["grapefruit","pineapple"];
// let allfruits=fruits.concat(moreFruits);
// // console.log(allfruits);
// const multiply=function(a,b){
//     return a*b;

//     };
//     const product=multiply(4,400000);
//     console.log('function Expression-product',product);
// const sub=(a,b)=>a-b;
// const diffrence =sub(78,9);
// console.log(diffrence);
// try{
//     throw new Error("an error");

// }catch(error){
//     console.error(error.message);
// }finally{
//     console.log("clean code");
// }
// const delayFunction =()=>{
//     console.log('delay function executed');

// }
// setTimeout(delayFunction,2000);
// const repeatedFunction =()=>{
//     console.log('repeated function executed');

// // };
// function repeatedFunction(){
//     console.log('executeing repeating');
// }
// const intervalId= setInterval(repeatedFunction,1000);
// const interval=setInterval(repeatedFunction,1000);
// setTimeout(()=>{
//     clearInterval(intervalId);
//     console.log('Interval stop')

// // },2000);
// function parentFuntioin(name,callback){
//     callback();
//     console.log("hey"+name);

// }
// function randomFuntion(){
//     console.log("hey i am a clall back funtion")
// }
// parentFuntioin("random string",randomFuntion)
// function parentFunction( name, callback){
//     setTimeout(callback,1000);
//     console.log("hey"+name);

// }
// function randomFunction(){
//     console.log("hey i am a call back function");

// }
// parentFunction("Random string",randomFunction)
const parentFunction=(name,callback)=>{
    setTimeout(callback,1000);
    console.log("hey"+name);

}
parentFunction("Random String",function(){
    console.log("hey i am a callback function");
});