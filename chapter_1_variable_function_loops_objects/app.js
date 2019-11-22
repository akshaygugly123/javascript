const num1 = 100;
const num2 = 50;
let val;

// simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// math oject
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.1);
val = Math.floor(2.9);
val = Math.sqrt(64);
val = Math.abs(-43);
val = Math.pow(3,4);
val = Math.min(2,3,2,33,-2);
val = Math.max(-1,2,34,34,-9);
val = Math.random();
val = Math.floor(Math.random()*20+1);

console.log(val);

// String
const firstName = 'William';
const lastName = 'Johnson';
const age = 33;
let str;

// concate
str = firstName + lastName;
str = firstName + ' ' + lastName;

// append
str = 'Brad ';
str +='Traversy';

str = 'Hello, my name is ' + firstName + ' and I am '+ age;

// escaping
str = 'That\'s awesome, I can\'t wait';

// concat
str = firstName.concat(' ',lastName);

//  change case
str = firstName.toUpperCase();
str = lastName.toLowerCase();

// length of string
str = firstName.length;

// indexOf()
str = firstName.charAt(0);
str = firstName[0];

str = firstName.indexOf('i');
str = firstName.lastIndexOf('i');

// get last character
str = firstName.charAt(firstName.length - 1);

// substring
str = firstName.substring(0,4);

// slice 
str = firstName.slice(0,4);
str = firstName.slice(-4);

// split()
str = (firstName + ' ' + lastName).split(' ');

// replace() on array
// includes() on array
console.log(str);

const name = 'John';
const job = 'Web developer';
const city = 'Miami';
let html;

// without template string (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

function hello(){
  return 'hello';
}
// template strings or tempate literals (es6)
html = `
  <ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>
  <li>${hello()}</li>
  <li>${age > 30 ? 'Over 30':'Under 30'}</li>
  </ul>
    `;
document.body.innerHTML += html;

// arrays and mutating array
const numbers = [23,25,23,5,3,253,23,5];
const numbers2 = new Array(22,34,3,4,55,34,23,43);
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mixed = [22, 'hello', true, undefined, null, {a:1,b:1}, new Date()]

val = numbers.length;
val = Array.isArray(numbers);

// push pop indexof insertinto etc..

console.log(val)

// objects or dictionary
const person ={
  firstName: 'steve',
  lastName: 'smith',
  age: 30,
  email: 'aksasegr@gmail.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2019 - this.age;
  }
}

console.log(person);

// if else
// if(something){
//   do something;
// } else {
//   do something
// }

//  operator ==, !=, ===,!==, >, >= ,<=, <, &&, ||, 

// switch

// switch(something){
//   case something1: do something;
//                 break;
//   case something2: do something;
//                 break;
//   default: do something;
// }

//  function declarations
function greet(firstName='john', lastName='doe'){
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('akshay', 'kumar'));

// function expressions
const square = function(x=3){
  return x*x;
};

console.log(square());

// immidiately invokable function expressions iifes
(function(name){
  console.log('Hello ' + name);
})('Brad');

// loops
// for(let i = 0; i < 10; i++){
//   if(i == 2){
//     console.log('2 is my favourite number');
//     continue;
//   }
//   if(i == 5){
//     console.log('stop loop');
//     break;
//   }
//   console.log('number ' + i);
// }

// while loop
let i = 0;
while(i < 10){
  i++;
  if(i == 2){
    console.log('2 is my favourite number');
    continue;
  }
  if(i == 5){
    console.log('stop loop');
    break;
  }
  console.log('number ' + i);
  i++;
}

// window method / objects / properties

window.console.log(123);

// alert
// alert('Hello world')

// prompt
// const input = prompt();
// alert(input);

// confirm
// if(confirm('Are you sure')){
//   console.log('yes');
// } else {
//   console.log('No');
// }

// outer height and width
val = window.outerHeight;
val = window.outerWidth;

// inner height and width
val = window.innerHeight;
val = window.innerWidth;

// scroll points
val = window.scrollY;
val = window.scrollX;

// location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// redirect
// window.location.href = 'http://google.com';
// reload
// window.location.reload();

// history
// window.history.go();
// window.history.length;

// navigator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.userAgent;
val = window.navigator.userAgent;
val = window.navigator.language;

// scope of variable

// global scope
var a = 1;
let b = 2;
const c = 3;

function test(){
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Local scope :', a, b, c);
}
test();

{
  var a = 7;
  let b = 8;
  const c = 9;
  console.log('Block scope: ', a, b, c);
}
console.log('global scope: ', a, b, c);


console.log(val);