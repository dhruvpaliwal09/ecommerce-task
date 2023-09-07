// 1. Ways to print in javascript
// console.log("Hello World");
// alert("me");
// doucument.write("This is document write")


// 2.JavaScript console API
// console.log("Hello World");
// alert("Hello");
// console.warn("This is warning");
// console.error("This is an error")


// 3. JavaScript Variable
// What are variables -containers to store data value
// var number1 = 10;
// var number2 = 15;
// console.log(number1 + number2)

// 4. Data types in JavaScript
// Numbers
// var num1 = 55;
// var num2 = 55.55;

// String
// var str1 = "This is a string";
// var str2 = "This is also a string";

//  Booleans
// var a = true;
// var b = false;
// console.log(a, b);

// undefined
// var und;
// console.log(und);

// null
// var n = null;
// console.log(n);

// undefined
// var und;
// console.log(und);

// At very high level, there are two types of data types in JavaScript
// 1. Primitive- undefined, null, number, string, boolean, symbol
// 2. Refrence- Arrays and Objects

// Arrays
// var arr = [1, 2, "Varun", 4, 5]
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);


// // Objects
// var marks = {
//     varun: 90,
//     arun: 80,
//     run: 70
// }
// console.log(marks);


//Operators
//1.Arthemetic
// var a = 100;
// var b = 50;
// console.log("The value of a+b is", a + b);
// console.log("The value of a-b is", a - b);
// console.log("The value of a*b is", a * b);
// console.log("The value of a/b is", a / b);

//2.Assignment
// var c = b;
// console.log(c);


//3.Comparision
// var a = 55;
// var b = 40;
// console.log(a == b);
// console.log(a >= b);

// 3.Logical
// Logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Logical not
// console.log(!true);
// console.log(!false);


// function
// function avg(a, b) {
//     return (a + b) / 2;
// }
// var c1 = avg(15, 20);
// var c2 = avg(20, 40);
// console.log(c1, c2);

// function avg(a, b) {
//     return (a + b) / 2;
// }
// var c1 = 10;
// var c2 = 20;
// console.log(avg(c1, c2));


// conditional
// var age = 20;
// Single if SVGPatternElement
// if (age >= 18) {
//     console.log("You can vote");
// }

// // if -else statement

// if (age >= 18) {
//     console.log("You can vote");
// }
// else {
//     console.log("You cannot vote");
// }

// // if else ladder
// if (age >= 18) {
//     console.log("You can vote");
// }
// else if (age >= 25) {
//     console.log("You can drink");
// }
// else {
//     console.log("You are a kid");
// }
// console.log("End of ladder");


// loops
//for loop
// var arr = [10, 20, 30, 40, 50, 60, 70];
// console.log(arr)
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function (element) {
//     console.log(element);
// })

//while
// let j = 0;
// while (j < arr.length) {
//     console.log(arr[j])
//     j++;
// }


//do while
// let j = 0;
// do {
//     console.log(arr[j]);
//     j++
// } while (j < arr.length)


// continue - break
// var arr = [10, 20, 30, 40, 50, 60, 70];
// console.log(arr)
// for (var i = 0; i < arr.length; i++) {
//     if (i == 2) {
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }


// Array methods
// let myarr = ["Dhruv", "Pen", 35, null, true]
// console.log(myarr);
// console.log(myarr.length);
// myarr.pop();
// myarr.push("Paliwal");
// console.log(myarr);
// myarr.shift();
// console.log(myarr);
// myarr.unshift("Hi");
// console.log(myarr)


// String methods
// let mystr = "Today is a sunny day sunny sunny";
// console.log(mystr.length);
// console.log(mystr.indexOf("sunny"));
// console.log(mystr.lastIndexOf("sunny"));
// console.log(mystr.slice(0, 4));
// x = mystr.replace("Today", "Sunday");
// console.log(x)


//Dates
// let mydate = new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getDate());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMinutes());
// console.log(mydate.getSeconds());



// DOM(Document Object Model) manipulation
// let ele = document.getElementById("click");
// console.log(ele);
// document.getElementById('click').style.border = "blue";
// document.getElementById('click').style.border = "2px solid blue";
// let eleClass = document.getElementsByClassName("container");
// console.log(eleClass);
// eleClass[0].style.background = "yellow";
// eleClass[0].classList.add("bg");
// eleClass[0].classList.add("text-success");
// eleClass[0].classList.remove("text-success");
// console.log(eleClass[0].innerHTML);
// console.log(eleClass[0].innerText);
// let tg = document.getElementsByTagName('button');
// console.log(tg)
// let dv = document.getElementsByTagName('div');
// console.log(dv);
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created paragraph";
// dv[0].appendChild(createdElement)
// createdElement2 = document.createElement('p');
// createdElement2.innerText = "This is also a created paragraph";
// dv[1].appendChild(createdElement2)
// dv[0].replaceChild(createdElement2, createdElement)
// console.log(document.URL)
// console.log(document.links)
// console.log(document.scripts)
// console.log(document.forms)
// console.log(document.image)
// console.log(document.domain)

// // Selecting using Query
// let sel = document.querySelector(".container")
// console.log(sel);
// let sel2 = document.querySelectorAll(".container")
// console.log(sel2);


// Events
// function clicked() {
//     console.log("Button was clicked")
// }
// firstContainer.addEventListener("click", function () {
//     console.log("Clicked on container")
// })
// firstContainer.addEventListener("mouseover", function () {
//     console.log("Mouse on container")
// })
// firstContainer.addEventListener("mouseout", function () {
//     console.log("Mouse out of container")
// })


// Arrow Function
// function summ(a, b) {
//     return a + b;
// }
// summ = (a, b) => {
//     return a + b;
// }


// SetTimeout and setInterval
// login = () => {
//     console.log("Loged in");
// }
// clr setTimeout(login, 2000);

// logout = () => {
//     console.log("Loged out");
// }
// clr = setInterval(logout, 2500)
/*(Use clearInterval(clr)/clearTimeout(clr) to cancel SetInterval/setTimeout )*/


// LocalStorage
// localStorage.setItem("name", "Varun");
// localStorage.removeItem("Name");
// localStorage > clearInterval();


// JSON(JavaScript Object Notation)
// obj = { name: "Varun", length: 1, a: { "This": "That" } };
// jso = JSON.stringify(obj);
// console.log(jso);
// console.log(typeof obj);
// console.log(typeof jso);
// parsed = JSON.parse('{ "name": "Varun", "length": 1, "a": { "This": "That" } }');
// console.log(parsed)




//Yahoo Baba

//Conditional Ternary Operator
// var x=5;
// (x>10)?console.log('true'):console.log('false')

// var y=50;
// var z=(y==50)?"true":"false";
// document.write(z);

//Confirm Box
// var a=confirm("Do you like this page?");
// if(a){
//     alert("Thank You")
// }else{
//     alert("Sorry")
// }

//Promise
// let prom = (complete) => {
//     return new Promise(function (resolve, reject) {
//         console.log("Fetching Data,Please wait")
//         setTimeout(() => {
//             if (complete) {
//                 resolve('Success');
//             } else {
//                 reject('Failure');
//             }
//         }, 1000)
//     })

// }
// let onfulfilment = (result) => {
//     console.log(result)
// }
// let onRejection = (error) => {
//     console.log(error)
// }
// prom(false).then(onfulfilment).catch(onRejection)

// let prom = (a,b) => {
//     return new Promise(function (resolve, reject) {
//         console.log("Fetching Data,Please wait")
//         var c=a/b;
//         setTimeout(() => {
//             if (c) {
//                 resolve(`Your answer is ${c}`);
//             } else {
//                 reject('Failed To Calculate');
//             }
//         }, 1000)
//     })
// }
// let onfulfilment = (result) => {
//     console.log(result)
// }
// let onRejection = (error) => {
//     console.log(error)
// }
// prom(5,2).then(onfulfilment).catch(onRejection)


//Promise.all
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("First Promise Resolved")
//         resolve(10)
//     }, 1 * 1000)
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Second Promise Resolved")
//         resolve(20)
//     }, 2 * 1000)
// })
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Third Promise Resolved")
//         resolve(30)
//     }, 3 * 1000)
// })
// var total = 0;
// setTimeout(() => {
//     Promise.all([p1, p2, p3]).then((result) => {
//         for (var i in result) { total += result[i] }
//         console.log(`Results are:${result}`)
//         console.log(`Total=:${total}`)
//     })
// }, 4 * 1000)



//Many Topic outside this folder



// AJAX (Outside this folder)
// let loadData = () => {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.state == 200) {
//             document.getElementById('demo').innerHTML = this.responseText;
//         } else if (this.readyState == 4 & this.state == 404) {
//             document.getElementById('demo').innerHTML = "File not found!";

//         }
//     }
//     xhttp.open('GET', ".content/readme.txt", true)
//     xhttp.send();
// }



//async&await
// async function test() {
//     return (await fetch('./file.txt')).text();
// }
// test().then((res) => {
//     console.log(res)
// }).catch((error) => {
//     console.log(error)
// })