'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const supplierSchema= Schema({
    name:String,
    phone:Number,
    address:String
})
module.exports=mongoose.model('Supplier',supplierSchema)