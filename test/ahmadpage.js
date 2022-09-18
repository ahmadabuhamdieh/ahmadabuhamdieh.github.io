
function myFunction()
{
    
  
    var changed= document.getElementById("icon1");
    console.log(changed);

    changed.src="sad.jpg";
    var outputchange= document.getElementById("output");
    outputchange.value("replace you");
}


let emailMatch1 = new RegExp("^[a-zA-Z_\-]+@(([a-zA-Z_\-])+\.)+[a-zA-Z]{2,}$");
let emailMatch2 = /^[a-zA-Z_-]+@(([a-zA-Z_-])+\.)+[a-zA-Z]{2,}$/;


console.log("mzijlstra@miu.edu".match(emailMatch2)) // boolean value
console.log(emailMatch1.test("mzijlstra@miu.edu"))// same boolean value
      
