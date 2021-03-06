'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Product = require('./modelos/producto')
const supplier = require('./modelos/supplier')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use("/api/producto",require("./app/product/routes/route_product"))

app.get('/api/producto/:productId', (req,res) => {
     let productId = req.params.productId

     Product.findById(productId,(err, product) =>{
          if (err) return res.send({message:`error al realizar la peticion${err}`})
          if (!product) return res.send({message:`el producto no existe`})

          res.send({product: Product })
     })
})


app.post('/api/pro', (req,res) => {
     //console.log('POST/api/producto')
     console.log(req.body)

     let pro = new supplier()
     pro.name= req.body.name
     pro.phone =req.body.phone
     pro.address=req.body.address

     pro.save((err,proStored)=>{
          if(err)res.status(500).send({message : `Error al salvar en la base de datos: ${err}` })
 
          res.status(200).send({product: proStored})
     })

     //res.send(200,{message:'el producto se a recibido'})
})


app.put('/api/producto/:productId', (req,res) => {
     
})

app.delete('/api/producto/:productId', (req,res) => {
     
})

mongoose.connect('mongodb://localhost:27017/shop', (err,res)=>{ 
     if (err){
          return console.log('error al conectar a la base de datos ')
     }
          
     console.log('conexion a la base de datos establecida')
     app.get('/', (req, res) => res.send('Hello World!'))
     app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})

