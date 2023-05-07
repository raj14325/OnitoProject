const mongoose = require('mongoose');
const { Schema } = require('yup');
const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add the name"],
    },
    age:{
        type:String,
        required:[true,"Please add the age"],
    },
    sex:{
        type:String,
        required:[true,"Please add the sex"],
    },
    email:{
        type:String,
    },
    gd:
    {
        type:String,    
    },
    emob:{
        type:String,
        maxLength:10
    },
    govt:{
        type:String,
        maxLength:12
    },
    add:{
        type:String,
    },
    state:{
        type:String,
    },
    city:{
        type:String,
    },
    country:{
        type:String,
    },
    pincode:{
        type:String,
    },
    occupation:{
        type:String,
    },
    religion:{
        type:String,
    },
    ms:{
        type:String,
    },
    bg:{
        type:String,
    },
    nationality:{
        type:String,
    },
},
{
    timestamps:true,
}
);
module.exports = mongoose.model("Contact",contactSchema);