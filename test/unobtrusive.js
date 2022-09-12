window.onload = function () {
  var okButton = document.getElementById("okClk");

  okButton.onclick = okayClick;
};

function okayClick() {
  alert("hello");

  document.getElementById("okClk").className = "highlighted";
}

function delayMsg() {
  setTimeout(booyah, 5000,'helo');

  document.getElementById("output").innerHTML = "Wait forit...";
}

function booyah(x) {
  // called when the timer goes off
  document.getElementById("output").innerHTML = "BOOYAH!"+x;
}



timer = null;
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