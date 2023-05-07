const express = require('express');
const connectDb = require('./config/dbConnect');
const mongoose = require('mongoose');
const errorHandle = require('./middleware/errorHandle.js');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

connectDb();
//middleware 
app.use(express.json());
app.use(errorHandle)
//path to all the api functions
app.use('/api/contacts',require("./routes/contactRoutes.js"));
//server port
app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
});
