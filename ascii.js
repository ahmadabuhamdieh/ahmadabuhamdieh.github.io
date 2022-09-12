/*jslint devel: true, browser: true, white: true */
let timer = 0;
let animationlst;
let args;
let speed = 250;
let i;

window.onload = function () {
  animationlst = document.getElementById("animation");
  animationlst.onchange = animationf;

  let startbtn = document.getElementById("start");
  startbtn.onclick = startf;

  let fontlst = document.getElementById("fontsize");
  fontlst.onchange = fontSizef;

  let stopbtn = document.getElementById("stop");
  stopbtn.onclick = stopf;


  let turbochk= document.getElementById("turbo");
  turbochk.onchange = turbof;
};

function animationf() {
  document.getElementById("text-area").value = ANIMATIONS[animationlst.value];
}

function startf() {
  let content = document.getElementById("text-area").value;

  document.getElementById("stop").disabled = false;
  document.getElementById("start").disabled = true;
  document.getElementById("animation").disabled = true;
  let scenerio = document.getElementById("animation");
   args = ANIMATIONS[animationlst.value].split("=====");
  let argsLength = args.length;
  i = 0;
  let start = Date.now();
  timer = setInterval(function () {
    let timePassed = Date.now() - start;
    console.log(timePassed);
    if (i === argsLength) i = 0;
    draw(timePassed, args[i]);
    i++;
  }, speed);
  console.log(argsLength);
  console.log(start);
}

function draw(time, draft) {
    document.getElementById("text-area").value = draft;
}

function turbof () {
    clearInterval(timer);
    speed = document.getElementById("turbo").checked == true ?  50 : 2500;
    let start = Date.now(); 
    timer = setInterval(function() {
        let timePassed = Date.now() - start;
        let argsLength = args.length;
        if (i === argsLength ) i = 0;
        draw(timePassed, args[i]); i++;
      }, speed );
}

function fontSizef() {
  let font = document.getElementById("fontsize").value;
  document.getElementById("text-area").style.fontSize = font;
  /*
  if (font === "Tiny") {
    document.getElementById("text-area").style.fontSize = "7pt";
  } else if (font === "Small") {
    document.getElementById("text-area").style.fontSize = "10pt";
  } else if (font === "Medium") {
    document.getElementById("text-area").style.fontSize = "12pt";
  } else if (font === "Large") {
    document.getElementById("text-area").style.fontSize = "16pt";
  } else if (font === "Extra Large") {
    document.getElementById("text-area").style.fontSize = "24pt";
  } else if (font === "XXL") {
    document.getElementById("text-area").style.fontSize = "32pt";
  }*/
}

function stopf() {
  clearInterval(timer);

  document.getElementById("text-area").value = ANIMATIONS[animationlst.value];

  document.getElementById("stop").disabled = true;
  document.getElementById("start").disabled = false;
  document.getElementById("animation").disabled = false;
}
