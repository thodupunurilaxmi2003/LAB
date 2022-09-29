const express = require('express')
const mongoose = require('mongoose')
//student schema --schema name
const Stuschema=mongoose.Schema({
     rollno:{
        type:String,
        required:true
     },
     name:{
        type:String,
        required:true
     },
     scholarship:{
        type:Boolean,
        required:true,
        default:false
     }
     //roll no, name, scholarship for columns

})

module.exports=mongoose.model('student1',Stuschema)