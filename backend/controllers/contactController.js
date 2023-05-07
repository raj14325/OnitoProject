//containg all the api functions

const Contact = require('../models/contactModels');
//@desc Get all the contacts
//@route GET /api/contacts
//@access public

const getContact = async (req,res) =>{
    const contact = await Contact.find();
     res.status(200).json({contact});
};

//@desc Create new contacts
//@route POST /api/contacts
//@access public
 
const createContact = async (req,res) =>{
    // console.log(`Got the data ${req.body}`);
    console.log("Got the data ",req.body);
    const {name, age, sex,mob,email,gd,govt,emob,add,state,city,country,pincode,occupation,religion,ms,bg,nationality} = req.body;
    if(!name||!age||!sex)
    {
        res.status(404);
        throw new Error("All the fields are required");
    }
    const contact = await Contact.create({
        name,age,sex,mob,email,gd,govt,emob,add,state,city,country,pincode,occupation,religion,ms,bg,nationality
    });
    res.status(201).json(contact);
};
module.exports = {getContact,createContact}