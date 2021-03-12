'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Product = require('./modelos/producto')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/api/producto', (req,res) => {
     res.send(200,{products:[]})
})
app.get('/api/producto/:productId', (req,res) => {
     let productId = req.params.productId

     Product.findById(productId,(err, product) {
          if (err) {
               return res.status(500).send
          }
     })
})


app.post('/api/producto', (req,res) => {
     console.log('POST/api/producto')
     console.log(req.body)

     let product = new Product()
     product.name = req.body.name
    // product.id= req.body.id
     product.price = req.body.price
     product.category = req.body.category
     product.description= req.body.description

     product.save((err,productStored)=>{
          if(err)res.status(500).send({message : `Error al salvar en la base de datos: ${err}` })
 
          res.status(200).send({product: productStored})
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

