const mongoose = require('mongoose');

const technicianSchema =new mongoose.Schema({
    mobile:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    address:{
        type:String
    },
    profilepic:{
        type:String
    },
    aadhar:{
        type:String
    }

});

module.exports =mongoose.model('Technician',technicianSchema);