//HOISTING---> hoisting is a javascript functionality with the help of this we can extract variables and functions without initializing it.
//console.log(a);
//let a = 10; due to hoisting we get TDZ
//ReferenceError: Cannot access 'a' before initialization this is due to temporary dead zone

//console.log(b);
// var b = 20;
//undefined this is due to hoisting

//const a = 10;
//a =100;
//TypeError: Assignment to constant variable. This is due to the fact that a is a constant and cannot be reassigned

//const a;
//a=10;
//SyntaxError: Missing initializer in const declaration. This is due to the fact that a is a constant and must be initialized at the time of declaration

//a();
//function a(){
//  let k = 10;
//  console.log(k);
//}
// This is showing that function declarations are hoisted, meaning they can be called before they are defined in the code.

//var a = 20;
//console.log(a); // 20
//console.log(window.a); // 20
//console.log(this.a); // 20
// This shows that variables declared with var are hoisted to the top of the function or global scope, and are accessible through the window object in a browser environment.


//Closure--> function is bundled with its lexical environment
//function a(){
//  let t =10;
//  function b(){
//    console.log(t);
//  }
//  b();
//}
//a();

// This shows that the inner function b has access to the variable t defined in the outer function a, demonstrating closure.

//closure2
function a() {
  let t = 10;
  function b() {
    console.log(t);
  }
  return b; // Return the inner function
}

var c = a(); // Call a() to get the inner function b
c(); // Call the inner function b, which has access to t
// This shows that the inner function b retains access to the variable t even after the outer function a has finished executing, demonstrating closure.
//closure3
function k() {
  let t = 10;
  return function b() {
    console.log(t);
  };
}
var y = k(); // Call a() to get the inner function b
y(); // Call the inner function b, which has access to t
// This is similar to the previous example, showing that the inner function b retains access to the variable t even after the outer function a has finished executing, demonstrating closure.


function z(){
  var b = 100;
  function a(){
    var k = 10;
    function c(){
      console.log(k, b);
    }
    c();
  }
  a();
}
z();
// This shows that the inner function c has access to both the variable k defined in function a and the variable b defined in function z, demonstrating closure across multiple levels of nested functions.
//closure4
function outerFunction() {
  let outerVariable = 'I am from outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction; // Return the inner function
}
const myInnerFunction = outerFunction(); // Call outerFunction to get the inner function
myInnerFunction(); // Call the inner function, which has access to outerVariable
// This shows that the inner function retains access to the variable outerVariable even after the outer function has finished executing, demonstrating closure.

//setTimeout+closures
function ab(){
  var k = 111;

  setTimeout(function(){
    console.log(k);
  }, 2000)
}
ab();

function abc(){
  for(var i = 1; i<=5; i++){
    setTimeout( function (){
      console.log(i);
    }, i*2000)
  }
}
abc();
// here the output will be 6, 6, 6, 6, 6 because var is function scoped and the value of i is 6 after the loop completes. To fix this, we can use let instead of var.

// we can use let to fix the above issue

function abcd(){
  for(let i =1; i<=5; i++){
    setTimeout(function (){
      console.log(i);
    }, i*1000)
  }
}
abcd();

//Another way we can form the closure is by using an IIFE (Immediately Invoked Function Expression)

function abcde(){
  for(var i = 1; i<= 5; i++){
    function close(x){
      setTimeout(function(){
        console.log(x);
      }, x*2000);
    }
    close(i);
  }
}
abcde();


// function currying

const calculateTotalPrice = (taxRate) => (price) =>
price + price * (taxRate / 100);
const calculateSalesTax = calculateTotalPrice(8); // 8% sales tax
const totalPrice = calculateSalesTax(100); // Price with tax
console.log(totalPrice); // 108
console.log(calculateSalesTax);

// function currying
function curry (a){
  return function (b){
    return function (c){
      return a+b+c;
    }
  }
}
curry(2)(2)(26);

// function declaration/statement--> we can call the function before it is defined
function greet() {
  console.log("Hello, World!");
}
greet(); // This will work because function declarations are hoisted
// function expression--> we cannot call the function before it is defined
const greetExpression = function() {
  console.log("Hello, World from expression!");
};
greetExpression(); // This will work because the function is defined before it is called


//callback function--> when function passed as the parameters in another functions and these parameters are called inside the function as callback function
function x(ky){
  console.log("x");
  ky();
}
x(function ky(){
  console.log("ky")
}
);


//Call, Apply and bind methods

const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};
// Using call
person.greet.call({ name: "Jane", age: 25 }); // Hello, my name is Jane and I am 25 years old.
// Using apply
person.greet.apply({ name: "Alice", age: 28 }); // Hello, my name is Alice and I am 28 years old.
// Using bind
const greetAlice = person.greet.bind({ name: "Alice", age: 28 });
greetAlice(); // Hello, my name is Alice and I am 28 years old.
// Using bind to create a new function with a specific context


//map, filter, reduce
const num = [1, 2, 3, 4, 5];
// Using map to create a new array with each element squared
const tri =()=>{
  num.map((n)=>{
    console.log(n *3) ;
  })
}
tri(); // [3, 6, 9, 12, 15]

// Using filter to create a new array with only even numbers
const morethan3 =()=>{
  console.log(num.filter((n)=>n >3));
}
morethan3(); // [4, 5]
// Using reduce to calculate the sum of all elements
const sum =()=>{
  console.log(num.reduce((acc, curr)=>{
    acc = acc+curr;
    return acc;
  },0));
}
sum();
