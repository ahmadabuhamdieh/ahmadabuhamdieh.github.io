/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(
  "Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10))
);

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}

function isVowel(a) {
  if (a === "a" || a === "e" || a === "u" || a === "o" || a === "i")
    return true;
  else return false;
}

function sum(a) {
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    total += a[i];
  }
  return total;
}

function multiply(a) {
  let total = 1;
  for (let i = 0; i < a.length; i++) {
    total *= a[i];
  }
  return total;
}

function reverse(a) {
  //return a.split("").reverse().join("");
  let reversed = "";
  for (let i = a.length - 1; i >= 0; i--) {
    reversed += a[i];
  }
  return reversed;
}

function findLongestWord(a) {
  let max = 0;
  a.map(function (x) {
    if (max<x.length) max = x.length;
  });

  // let max=0;
  /* for (let i=0;i<a.length;i++)
    {
        if (max<=a[i].length)
         max=a[i].length;
          else
          return max;

    }*/
  return max;
}

function filterLongWords(arr, i) {
  var q = [],
    k = 0;

  arr.map(function (p) {
    if (p.split("").length > i) q[k++] = p;
  });

  return q;
}

const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem) {
  return elem + 10;
});
document.writeln(b.toString() + "<br/>");

const c = a.filter(function (elem) {
  return elem == 3;
});
document.writeln(c.toString() + "<br/>");

const d = a.reduce(function (prevValue, elem) {
  return prevValue * elem;
});
document.writeln(d + "<br/>");

console.log(sum([1, 2, 3, 4]));
console.log(multiply([1, 2, 3, 4]));
console.log(reverse("jag testar"));
console.log(findLongestWord(["ahmad", "laith", "abdullah"]));

var words = ["first", "second", "third", "fourth"],
  int = 5;
x = filterLongWords(words, int);
console.log(x);

console.log(
  "Expected output of isVowel('a') is true  " +
    myFunctionTest(true, isVowel("a"))
);

console.log(
  "Expected output of multiply([1,2,3,4]) is 24  " +
    myFunctionTest(24, multiply([1, 2, 3, 4]))
);

console.log(
  "Expected output of reverse('jag testar') is ratset gaj  " +
    myFunctionTest("ratset gaj", reverse("jag testar"))
);

console.log(
  "Expected output of findLongestWord(['ahmad','laith','abdullah']) is 8  " +
    myFunctionTest(8, findLongestWord(["ahmad", "laith", "abdullah"]))
);

console.log(
  "Expected output of filterLongWords(['first', 'second', 'third', 'fourth'], 5) is ['second', 'fourth']  " +
    myFunctionTest(
      "second,fourth",
      filterLongWords(["first", "second", "third", "fourth"], 5)
    )
);

console.log(
  "Expected output of maxOfThree(5,4,44) is 44  " +
    myFunctionTest(44, maxOfThree(5, 4, 44))
);
console.log(
  "Expected output of maxOfThree(55,4,44) is 55  " +
    myFunctionTest(55, maxOfThree(55, 4, 44))
);

console.log(
  "Expected output of maxOfThree(55,4,44) is 55  " +
    myFunctionTest(4, maxOfThree(55, 4, 44))
);
