const express = require('express');
const path = require('path');
const app = express();

const date = new Date();
const hour = date.getHours();

if( hour > 6 && hour < 18){
    console.log(path.join(__dirname, 'css'));
    app.use('/nightstyle',express.static(path.join(__dirname, 'css')));
   
}
if(hour >18 && hour < 6){
    console.log(path.join(__dirname, 'css'));
    app.use('/daystyle',express.static(path.join(__dirname, 'css')));
}
    
app.use(
    express.urlencoded({
      extended: false,
    })
  );

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'form.html'));
});

app.post('/result', (req, res)=>{
    let n = req.body.Name;
    let a = req.body.Age;
    console.log(n);
    console.log(a);
    
    res.send(`welcome = ${n} / ${a}`);
});


app.listen(3000);
