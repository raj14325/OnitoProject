const errorHandle = (err,req,res,next) =>
{
    const statusCode = res.statusCode ? res.statusCode : 500;
    
    res.json({title:"not found",message:err.message,stackTrace});
    res.json({title:"validation failed",message:err.message,stackTrace});
};


module.exports = errorHandle;