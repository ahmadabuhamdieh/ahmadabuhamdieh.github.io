
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

var getNumber = function () {
    readline.question('enter a number or write stop to stop: ', function (answer) {
      if (answer == 'stop') //we need some base case, for recursion
        return readline.close(); //closing RL and returning from function.
     
        getNumber(); //Calling this function again to ask new question
    });
  };
  
  getNumber(); //we have to actually start our recursion somehow

