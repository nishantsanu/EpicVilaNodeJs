const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB=require('./config/db');

const app =express();
app.use(morgan('dev'));
app.use(express.json({}));
app.use(express.json({
    extended: true
}));

dotenv.config({
    path: './config/config.env'
});

connectDB();

//https://localhost:3000/api/toso/auth/register

//using router

app.use('/api/todo/auth',require('./routes/technician'));


const PORT = process.env.PORT || 3000;
app.listen(PORT,
    console.log(`Server running on port: ${PORT}`.red.underline.bold)
    );

// var http = require('http');

// http.createServer(function(request,response){
//     //200,400,500
//     response.writeHead(200,{
//         'Content-Type':'text/plain'
//     });
//     response.end("Hello Noder");
// }).listen(3000,console.log("Server is running on port: 3000"));