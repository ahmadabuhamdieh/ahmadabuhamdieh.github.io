const express = require('express');
const app = express();
const path = require('path');

 app.use(express.json());
 app.use(express.urlencoded({extended: false}));

 
app.set('view engine', 'ejs');
let productList =[];
let product = {
    name : "Alienware M15",
    price : "$2300",
    description: "Best Gaming laptop in 2022",
    id: "ALI-M15R5",
    imageUrl : "https://www.notebookcheck.net/fileadmin/Notebooks/Alienware/m15_R5_Ryzen_Edition/Alienware_m15_R5.jpg"
}

app.get('/', (req,res,next) =>{
    res.render('product',{
        pageTitle:"Product",
        product: product
    });
})

app.post('/addToCart', (req, res, next) =>{
    productList.push(product);
    res.render('shoppingcart', {
        pageTitle:"Product",
        product:productList
    })
})

app.listen(3000);