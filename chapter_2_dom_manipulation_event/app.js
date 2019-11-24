let val;

// // val = document;
// // val = document.all;
// // val = document.all[2];
// // val = document.all.length;
// // val = document.head;
// // val = document.body;
// // val = document.doctype;
// // val = document.domain;
// // val = document.URL;
// // val = document.characterSet;
// // val = document.contentType;

// // val = document.forms;
// // val = document.forms[0];
// // val = document.forms[0].id;
// // val = document.forms[0].method;
// // val = document.forms[0].action;

// // val = document.links;
// // val = document.links[0];
// // val = document.links[0].id;
// // val = document.links[0].className;
// // val = document.links[0].classList;
// // val = document.links[0].classList[0];

// // val = document.images;

// // val = document.scripts;
// // val = document.scripts[2];
// // val = document.scripts[2].getAttribute('src');

// // let scripts = document.scripts;
// // let scriptsArray = Array.from(scripts);

// // scriptsArray.forEach(function(script){
// //   console.log(script.getAttribute('src'));
// // });

// // // document.getElementById()
// // val = document.getElementById('task-title');

// // // get things from element
// // val = document.getElementById('task-title').id;
// // val = document.getElementById('task-title').className;

// // // change styling
// // document.getElementById('task-title').style.background = '#333';
// // document.getElementById('task-title').style.color = '#fff';
// // document.getElementById('task-title').style.padding = '5px';

// // // document.getElementById('task-title).style.display = 'none';

// // // change content
// // document.getElementById('task-title').textContent = 'Task List';
// // document.getElementById('task-title').innerText = 'My Task';
// // document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';

// // // document.querySelector()
// // val = document.querySelector('#task-title');
// // val = document.querySelector('.card-title');
// // val = document.querySelector('h5');

// // document.querySelector('li').style.color ='red';
// // document.querySelector('ul li').style.color = 'blue';

// // document.querySelector('li:last-child').style.color = 'red';
// // document.querySelector('li:nth-child(3)').style.color = 'yellow';
// // document.querySelector('li:nth-child(odd)').style.background = '#ccc';

// // document.getElementsByClassName()
// val = document.getElementsByClassName('collection-item');

// val[0].style.color = 'red';
// val[3].textContent = 'Hello';

// val = document.querySelector('ul').getElementsByClassName('collection-item');

// // document.getElementbyTagName
// val = document.getElementsByTagName('li');

// val = Array.from(val);
// val.reverse();
// val.forEach(function(li,index){
//   console.log(li.className);
//   li.textContent = `${index}:hello`;
// })

// // document.querySelectorAll()
// val = document.querySelectorAll('ul.collection li.collection-item');

// val.forEach(function(item, index){
//   item.textContent = `${index}:hello`;
// })

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(item, index){
//   item.style.background = '#ccc';
// })

// for(let i=0; i < liEven.length; i++){
//   liEven[i].style.background = '#f4f4f4';
// }


// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;

// // get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;


// // get children element nodes
// val = list.children;
// val = list.children[0];
// list.children[1].textContent = 'hello';
// val = list.children[3].children[0];

// // first child
// val = list.firstChild;
// val = list.firstElementChild;

// // last child 
// val = list.lastChild;
// val = list.lastElementChild;

// val = list.childElementCount;

// // get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // get next siblings
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// // get previous siblings
// val  = listItem.previousSibling;
// val = listItem.previousElementSibling;

// // create element
// const li = document.createElement('li');

// // add class
// li.className = 'collection-item';

// // add id
// li.id = 'new-item';

// // add attributes
// li.setAttribute('title','New Item');

// // create text node and append
// li.appendChild(document.createTextNode('Hello world'));

// // append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// // create a new link element
// const link = document.createElement('a');

// // add classes
// link.className = 'delete-item secondary-content';

// // add icon html
// link.innerHTML = '<li class = "fa fa-remove"></li>';

// // append  link into li
// li.appendChild(link);

// console.log(li);


// // replace element

// // create element
// const newHeading = document.createElement('h2');

// // add id
// newHeading.id = 'task-title';
// // new text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // get the old heading
// const oldHeading = document.getElementById('task-title');
// // parent
// const cardAction = document.querySelector('.card-action');

// // replace
// cardAction.replaceChild(newHeading,oldHeading);

// // remove element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // remove list item
// lis[0].remove();
// list.removeChild(lis[3]);

// // classes and attributes
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let v;
// v = link.className;
// v = link.classList;
// v = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// v = link;


// // attribute
// v = link.getAttribute('href');
// v = link.setAttribute('href','http://google.com');
// link.setAttribute('title','Google');
// v = link.hasAttribute('title');
// link.removeAttribute('title');

// console.log(v);

// console.log(newHeading);

// event listeners
// anonymous function
// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//   console.log('Hello world');
//   e.preventDefault();
// });

// document.querySelector('.clear-tasks').addEventListener('click',onclick);

// function onclick(e){
//   // console.log('clicked');
//   let val;
  
//   val = e;

//   // event targe elements
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;

//   e.target.innerHTML = 'hello';

//   // event type
//   val = e.type;

//   // time stamp
//   val = e.timeStamp;

//   // coords event relative to the window
//   val = e.clientY;
//   val = e.clientX;

//   // coords event relative to the element
//   val = e.offsetY;
//   val = e.offsetX;

//   console.log(val);

//   e.preventDefault();
// }

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');


// clearBtn.addEventListener('click', runEvent);
// clearBtn.addEventListener('dblclick', runEvent);
// clearBtn.addEventListener('mousedown', runEvent);
// clearBtn.addEventListener('mouseup', runEvent);
// card.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseleave', runEvent);
// card.addEventListener('mouseover', runEvent);
// card.addEventListener('mouseout', runEvent);
// card.addEventListener('mousemove', runEvent);
// // event handler
// function runEvent(e){
//   console.log(`Event type: ${e.type}`);
//   heading.textContent = `MouseX:${e.offsetX} MouseY: ${e.offsetY}`;
//   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX+e.offsetY})`;
//   e.preventDefault();
// }

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');

// // clear input
// taskInput.value = '';

// // form.addEventListener('submit', runEvent);
// form.addEventListener('keydown', runEvent);

// // also have keyup, keypress, focus, blur, cut, copy, paste, input, change in selection, 

// function runEvent(e){
//   console.log(e.type);

//   // get input value
//   // console.log(taskInput.value);
//   // e.preventDefault();
// }

// event bubbling

// document.querySelector('.card-title').addEventListener('click',function(){
//   console.log('card-title');
// });

// document.querySelector('.card-content').addEventListener('click',function(){
//   console.log('card-content');
// });

// document.querySelector('.card').addEventListener('click',function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click',function(){
//   console.log('col');
// });

// event delegation

// val = document.querySelector('.delete-item');

// val.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e){
//   // if(e.target.parentElement.className === 'delete-item secondary-content'){
//   //   console.log('delete item');
//   // }
//   if(e.target.parentElement.classList.contains('delete-item')){
//     console.log('delete item');
//     e.target.parentElement.parentElement.remove();
//   }
// }

// Local storage and session storage
// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');
// localStorage.setItem('nick', 'gugly');


// // set session storage
// sessionStorage.setItem('name','John');

// // remove from storage
// // localStorage.removeItem('name');

// // get from storage
// val = localStorage.getItem('name');
// age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();
// console.log(val, age);

// document.querySelector('form').addEventListener('submit', function(e){
//   const task = document.getElementById('task').value;

//   let tasks;

//   if(localStorage.getItem('tasks') === null){
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));

//   }
//   tasks.push(task);
//   localStorage.setItem('tasks', JSON.stringify(tasks));
//   alert('Task saved');

//   e.preventDefault();
// });