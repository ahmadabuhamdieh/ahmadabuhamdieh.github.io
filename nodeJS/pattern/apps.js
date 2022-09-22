//let personObj=require('./person.js');
let Person=require('./person.js');

//console.log(personObj);

let personObj= new Person('Ahmad');
console.log(personObj);
personObj.firstname='ali';
console.log(personObj);

require('./cashed.js');