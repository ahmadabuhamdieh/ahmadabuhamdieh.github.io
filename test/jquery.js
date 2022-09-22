/*window.onload = function () {
  var str = document.getElementById("square");
  str.onclick = strf;
};

function strf() {
  alert("helloooo");
}
*/

//$(document).ready(function () {
  //alert("Hello World");
//});

$(function() { alert("Hello World") });

/*$(document).ready(function () {
  const elems = $("#square,#textbox");
  console.log(elems);
  $("#square").click(strf);

  $("#textbox").on("mouseout", sayHi); // bound to text box here
  $("#submitBtn").on("click", sayHi); // bound to submit button here
  $(":radio").on("click", processDucks);

  $("#exampleform").on("click", checkData);
  $("body, div, p, em").click(hello);
  $("div > p").click(anotherHandler);


  

});

function strf() {
    $("div>p").prepend( $("<p>", { "id": "myid", "class": "special", "text": "My paragraph is awesome!" }));
  alert("helloooo");
 
}

function sayHi() {
  this.value = "sayHi" + this.id;
}

function processDucks() {
  alert(this.value + " is checked!");
}

function checkData(evt) {
  if ($("#firstname").val() == "" || $("#lastname").val().length != 2) {
    alert("Error, invalid firstname/lastname.");
    evt.preventDefault();
  }
}


function hello() {
  alert("You clicked on the " + $(this)[0].tagName);
  return false;

}


/*
function hello(evt) {
  alert("You clicked on the " + this.nodeName);
  evt.stopPropagation(); //try it
}
*/

/*
function anotherHandler() {
  alert("You clicked on the inner P tag");
}


console.log("Before delay");
  
function delayBySeconds(sec) {
   let start = now = Date.now()
   while(now-start < (sec*1000)) {
     now = Date.now();
   }
}
  
delayBySeconds(5);
  
// Executes after delay of 5 seconds
console.log("After delay");
*/
