const express = require('express');
const router = express.Router();
const Technician = require('../models/Technician');
const bcryptjs=require('bcrypt');

router.post('/signup',(req,res,next)=>{
    console.log("inside signup dialog");
    const newUser={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        mobile:req.body.mobile
    }

    const query = {mobile:newUser.mobile}
    Technician.findOne(query,(err,result)=>{
        if(result==null){
            Technician.create(
                {name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                mobile:req.body.mobile
                },(err,user)=>{
                    if(err){
                        res.status(400).send();
                    }else{
                        res.status(200).send();
                    }
                });
               
            // Technician.insertOne(newUser,(err,res)=>{
            //     res.status(200).send();
            // })
        }else{
            res.status(400).send()
        }
    })
});
//Authentication and Authorisation
//login route

router.post('/login',(req,res)=>{
    console.log("inside login dialog");
    Technician.findOne({mobile:req.body.mobile},(err,user)=>{
        if(user !=null){
            if(user.password==req.body.password){
                const objToSend={
                    name: user.name,
                    email:user.email,
                    mobile:user.mobile
                }
    
                res.status(200).send(JSON.stringify(objToSend));
            }else{
                //incorrect password code 404
                res.status(404).send()
            }
        }else{
            //user dont exist code 444
            res.status(444).send()
        }
    })
    // const query={
    //     email:req.body.email,
    //     password:req.body.password
    // }
    // Technician.findOne(query,(err,result)=>{
    //     if(result != null){
    //         const objToSend={
    //             name: result.name,
    //             email:result.email
    //         }

    //         res.status(200).send(JSON.stringify(objToSend))
    //     }else{
    //         res.status(404).send()
    //     }
    // });
});


module.exports = router;