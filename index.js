const express =require('express')
const mongoose = require('mongoose')
//require is to  import
const index=express()
const url='mongodb://localhost/stuDB' 

mongoose.connect(url,{useNewUrlParser:true})

const con=mongoose.connection  //connecting mongoose
con.on('open',function(){   //inorder to know whether the database is opened or not we are using on event by instance of connection
  //  to check if mongoose is connected or not
    console.log("connected to database")
})
index.use(express.json())
const stuRouter = require('./routes/students')
// routes folder--->students.js file
index.use('/stud',stuRouter)

index.listen(9000,()=>{ // because the function has no name we can make it as arrow function
    console.log("successfully")
    console.log("server started")
})

