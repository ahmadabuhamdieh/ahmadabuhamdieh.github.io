


let emailMatch1 = new RegExp("^[a-zA-Z_\-]+@(([a-zA-Z_\-])+\.)+[a-zA-Z]{2,}$");
let emailMatch2 = /^[a-zA-Z_-]+@(([a-zA-Z_-])+\.)+[a-zA-Z]{2,}$/;


console.log("mzijlstra@miu.edu".match(emailMatch1)); // boolean value
console.log(emailMatch1.test("mzijlstra@miu.edu"));// same boolean value



let emailMatch3 = new RegExp("^e+$");



console.log(emailMatch3.test("the")); // boolean value

