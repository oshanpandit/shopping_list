const express=require('express');

const path=require('path');

const app=express();

const port=8000;

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));


app.get('/',function(req,res){

    res.render('home');
});

app.get('/profile',function(req,res){

    res.end(<h1>This is the profile section</h1>)
});


app.listen(port,function(err){

    if(err){

        console.log(`Error while running the server ${err}`);

        return;
    }

    console.log(`The server is up and running on port ${port}`);
});