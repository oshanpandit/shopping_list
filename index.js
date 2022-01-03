const express=require('express');

const path=require('path');

const app=express();

const port=8000;

const connectDb=require('./config/mongoose');

connectDb();

const Shopping=require('./models/shopping');

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());

app.use(express.static('assets'));


app.get('/',function(req,res){

   
    Shopping.find({},function(err,shoppingList){

        if(err){

            console.log("Error while showing the contacts");

            return;
        }

        return res.render('home',{


            shopping_list:shoppingList

        });
    });
});

app.post('/save-item',function(req,res){

    Shopping.create({

        item:req.body.item,

        brand:req.body.brand
    },function(err,newItem){

        if(err){

            console.log("Error in creating an item");

            return;
        }

        console.log("******",newItem);

        return res.redirect('/');

    });
});

app.get('/delete-item',function(req,res){

   let id=req.query.id;

   Shopping.findByIdAndDelete(id,function(err){

     if(err){

        console.log("error ocurred while deleating the item");
     }

     return res.redirect('/');
   });
});



app.listen(port,function(err){

    if(err){

        console.log(`Error while running the server ${err}`);

        return;
    }

    console.log(`The server is up and running on port ${port}`);
});