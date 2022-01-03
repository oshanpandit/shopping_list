const mongoose=require('mongoose');

const shoppingSchema=new mongoose.Schema({

    item:{
        
        type:String,

        require:true
        
    },

    brand:{

        type:String,

        required:true
    }
});

const Shopping= mongoose.model('Shopping',shoppingSchema);

module.exports= Shopping;