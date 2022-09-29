//this is controller
// it shouls return the requested methods

const express=require('express')
const student = require('../models/student')
const router= new express.Router()
//route
const student1 = require('../models/student')
router.get('/',async(req,res)=>{    //always callback function return asynchronous
    try{
        const s1=await student.findById(req.params.id)
        res.json(s1)
    }catch(err){ //
    res.send(':)...its okay to have errors' +err)
    }
})
//to post new students data
router.post('/',async(req,res)=>{
    const Student1=new student1({
        rollno:req.body.rollno,
        name:req.body.name,
        scholarship:req.body.scholarship
    })
    try{
        const s2 =await student.save()
        res.json(s2)
    }
    catch(err){
        res.send('error'+err)
    }
})
//we can also use patch to update the content


module.exports =router