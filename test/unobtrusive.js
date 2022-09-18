'use strict';
window.onload = function () {
  var okButton = document.getElementById("okClk");

  okButton.onclick = okayClick;
};

function okayClick() {
  alert("hello");

  document.getElementById("okClk").className = "highlighted";
}

function delayMsg() {
  setTimeout(booyah, 5000, "helo");

  document.getElementById("output").innerHTML = "Wait forit...";
}

function booyah(x) {
  // called when the timer goes off
  document.getElementById("output").innerHTML = "BOOYAH!" + x;
}

function getAlert(str) {
  return function () {
    //alert(str);
  };
}
const whatsUpAlert = getAlert("What's up!");
whatsUpAlert; // “What’s up!”

console.log(whatsUpAlert());

let timer = null;
function delayMsg2() {
  if (timer === null) {
    timer = setInterval(rudy, 1000);
  } else {
    clearInterval(timer); // cancel the timer
    timer = null;
  }
}
function rudy() {
  // called each time the timer goes off
  document.getElementById("output").innerHTML += " Rudy!";
}

const multiply = (num1, num2) => num1 * num2;

console.log(multiply(5, 5));

const atoms = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const atomsLength = atoms.map(function (elem) {
  return elem.length;
});

const atomsLengthV2 = atoms.map((elem) => elem.length);
const atomsLengthV3 = atoms.map(atomsLengthf);

function atomsLengthf(elem) {
  return elem.length;
}

console.log(atomsLength);
console.log(atomsLengthV2);
console.log(atomsLengthV3);

const findtest = atoms.find((x) => x.length < 5);
console.log(findtest);

var initialValue = 0;

var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (
  accumulator,
  currentValue
) {
  return accumulator + currentValue.x;
},
initialValue);

console.log(sum);

const array1 = [1, 2, 3, 4];

const reducer = array1.reduce((x, y) => x + y, 0);
console.log(reducer);
const arr = ["a", "b", "c"];

const testa = arr.forEach(function (element) {
  element = element + "ha ha ha";
  console.log(element);
});
console.log(testa);

let letters = ["x", "y", "z"];

console.log(letters);

for (let i in letters) console.log(i);

for (let i of letters) console.log(i);

const things = {
  a: 97,
  b: 98,
  c: 99,
};

console.log(things);

for (let i in things) console.log(i + ": " + things[i]);

function f(x) {
  console.log("x: " + x);
}

console.log(f(1, 2, 3, 4));

function findMax() {
  let max = 0;

  console.log(arguments[1]);

  for (let i = 0; i < arguments.length; i++) {
    if (max < arguments[i]) {
      max = arguments[i];
    }
  }

  return max;
}

const max1 = findMax(1, 123, 500, 115, 66, 88);
const max2 = findMax(3, 6, 8);

console.log(max1);
console.log(max2);

function sumV2(x, y, ...more) {
  //"more" is array of all extra passed params
  let total = x + y;
  console.log(more[0]);
  if (more.length > 0) {
    for (let i = 0; i < more.length; i++) {
      total += more[i];
    }
  }
  console.log("Total: " + total);
  return total;
}
sumV2(5, 5, 5);
sumV2(6, 6, 6, 6, 6);

let a, b, c, d, e;
a = [1, 2, 3];
b = "dog";
c = [1, "cat"];

// Using the concat method.
d = a.concat(b, c); // [1, 2, 3, “dog”, 42, “cat”]
// Using the spread operator.
e = [...a, b, ...c]; // [1, 2, 3, “dog”, 42, “cat”]

console.log(d);
console.log(e);

const address = [221, "Baker Street", "London"];

const [x, y] = address;
const [houseNo, , city, ca] = address;
console.log(houseNo, city, ca, x, y); // 221 'London’

const details = { firstName: "Code", lastName: "Burst", age: 22 };
const { firstName, age } = details;
console.log(firstName, age); // Code 22

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const clonedObj = { ...obj1 };

// Object { foo: "bar", x: 42 }
const mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }

console.log(mergedObj);



let emailMatch1 = new RegExp("^[a-zA-Z_\-]+@(([a-zA-Z_\-])+\.)+[a-zA-Z]{2,}$");
let emailMatch2 = /^[a-zA-Z_-]+@(([a-zA-Z_-])+\.)+[a-zA-Z]{2,}$/;


console.log("mzijlstra@miu.edu".match(emailMatch2)) // boolean value
console.log(emailMatch1.test("mzijlstra@miu.edu"))// same boolean value