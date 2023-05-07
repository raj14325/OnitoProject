const mongoose = require('mongoose');
const connectDb = async()=>
{
    try
    {
        const connect = await mongoose.connect(process.env.DB_URI)
        console.log('Database connection established');
    }
    catch(err)
    {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;