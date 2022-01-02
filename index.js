const express=require('express');

const app=express();

const port=8000;


app.get('/',function(req,res){

    res.render('home');
});


app.listen(port,function(err){

    if(err){

        console.log(`Error while running the server ${err}`);

        return;
    }

    console.log(`The server is up and running on port ${port}`);
});