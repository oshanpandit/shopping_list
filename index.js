const express=require('express');

const path=require('path');

const app=express();

const port=8000;

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());

app.use(express.static('assets'));


var shoppingList=[

    {

        item:"Chocolate",
        brand:"Cadbury"
    },

    {

        item:"Pendrive",
        brand:"Sandisk"
    },

    {

        item:"Monitor",
        brand:"LG"
    }
];




app.get('/',function(req,res){

    res.render('home',{

        shopping_list:shoppingList
    });
});

app.post('/save-item',function(req,res){

    shoppingList.push(req.body);

    res.redirect('/');
});

app.get('/delete-item',function(req,res){

    console.log(req.query);

    let item=req.query.item;

    let itemIndex=shoppingList.findIndex(listitem => listitem.item==item);

    if(itemIndex!=-1){

        shoppingList.splice(itemIndex,1);

        res.redirect('/');
    }
});



app.listen(port,function(err){

    if(err){

        console.log(`Error while running the server ${err}`);

        return;
    }

    console.log(`The server is up and running on port ${port}`);
});