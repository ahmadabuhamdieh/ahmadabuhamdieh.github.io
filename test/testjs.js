
let i;
var j;

console.log(i);
console.log(j);

let  temp= 'studentId';

const obj ={

    firstname :'john',
    lastname : 'smith',
    'my age':20,
    [temp]: 'test'
}




console.log(obj.firstname);
console.log(obj.lastname);
console.log(obj["my age"]);

console.log(obj['firstname']);


console.log(obj.temp);
console.log(obj.studentId);



const ducks = ["Huey", "Dewey", "Louie"];
ducks[0]='ahmad';
ducks.concat('test');


ducks.push("sally");
ducks.pop("sally");
ducks.unshift("LOAI");
ducks.shift("LOAI");
console.log( ducks);
console.log(ducks[0]);
