'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProducSchema= Schema({
    
    name:String,
    //id:String,
    price:{type:Number, default:0},
    category:{type:String, enum:['computers','phones','accesories']},
    description:String

})
 
module.exports=mongoose.model('Producto',ProducSchema)