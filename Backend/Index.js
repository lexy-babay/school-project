const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const path = require('path')
const bodyParser = require('body-parser')
const port = process.env.PORT
const app = express()

const connectDB = require("./dbconnect/dbconfig")
connectDB()

app.use(express.urlencoded({ extended: true }));




app.listen(port,()=>( console.log("Server Started at port"+port)))