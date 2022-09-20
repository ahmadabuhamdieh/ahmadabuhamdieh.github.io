"use strict";

function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let arr = [1, 2, 3, 4];
const sum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

const multiply = arr.reduce(
  (accumulator, currentValue) => accumulator * currentValue
);

let words = ["first", "second", "third", "fourth"];

function filterLongWords(wordsArr, i) {
  const newArr = wordsArr.filter((x) => x.length > i);
  return newArr;
}

console.log(sum);
console.log(multiply);
console.log(filterLongWords(words, 5));

const getNewArray = function (str) {
  return str.filter((x) => x.length >= 3 && !x.includes("a"));
};

console.log(getNewArray(["ahmad", "ali", "samieh"]));

console.log("ahmad samieh".indexOf(" ") >= 0);

var a = 5;
var b = 10;
var c = function (a, b, c) {
  console.log(x);
  console.log(a);
  var f = function (a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b);
  var x = 10;
};

c(8, 9, 10);
console.log("b" + b);

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}
// usage
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1)),
];
articles.sort(Article.compare);
alert(articles[1].title); // CSS

/*
class User {
  constructor(name = "Anonymous") {
    this.name = name;
  }
  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}
let fred = new User();
console.log(fred);
console.log(fred.__proto__);
console.log(User.prototype);
fred.sayHi();
let bob = new User("Bob");
console.log(bob);
bob.sayHi();
*/

