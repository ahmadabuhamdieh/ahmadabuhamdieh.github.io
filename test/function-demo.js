const arr=['Banana','Apple','Strawberry','Cranberry','Raspberry'];

const result= arr.filter(function(elem)
{
    return elem.includes('berry');
}).map(function(elem)
{
    return elem.length;
});

console.log(result);


const grades=[90,88,78,66,55];

const result2= grades.reduce(function(elemt1,elemt2)
{
    return elemt1+elemt2;
},5);

console.log(result2/grades.length);


const sum=function sumf(n1,n2)
{
    return n1+n2;
};


function foo()
{};

const f2 = function(){};

const factorial = function fac(){};
console.log(sum(2,5));
console.log(foo.name);
console.log(f2.name);
console.log(factorial.name);






function ovrld( n1)
{
    console.log(n1);
}

function ovrld( n1,n2=5)
{
    console.log(n1,n2);
}

ovrld(5);

function a() {//K&R style
    return {
   a: 1 
   }
   }

   function b()
   { 
   return 
{
   a: 1 ;
   }
   }
   console.log(a()); //object
console.log(b()); //undefined -- oops