const fs=require("fs");
const path=require("path");

console.log("start");
console.log(__dirname,__filename);
console.log("end");
const file=fs.readFileSync(path.join(__dirname,'HelloGreeting.txt'),'utf-8');
console.log(file);