const Product = require('../../../modelos/producto')
const supplier = require('../../../modelos/supplier')

exports.getAllProducts = async(req,res)=>{
    Product.find({},(err,product)=>{
        supplier.populate(product,{path:"supplier"},(err,products)=>{
             res.status(200).send(products)   
        })
   })

}

exports.postCreatProduct= async(req,res)=>{
    let product = new Product() 
    product.name = req.body.name
    product.price = req.body.price
    product.category = req.body.category
    product.description= req.body.description
    product.supplier= req.body.supplier
    product.save((err,productStored)=>{
         if(err)res.status(500).send({message : `Error al salvar en la base de datos: ${err}` })

         res.status(200).send({product: productStored})
    })
}