// const { promises } = require("nodemailer/lib/xoauth2")

module.exports = (theFunc) =>(req,res,next)=>{
    Promises.resolve(theFunc(req,res,next)).catch(next);
};