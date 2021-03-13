exports.validationCreateProduct = async(req,res,next)=>{
    let status = true;
    if (status) {
        next();
    }else{
        res.status(400).send("datos invalidos");
    }
}