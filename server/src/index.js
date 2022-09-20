import express from "express";
const app = express()
import dotenv from "dotenv"
import bodyParser from 'body-parser'
import WebRoute from './routes/web'
import connectDB from './config/connect'
var cors = require('cors')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

dotenv.config()
app.use(cors())
WebRoute(app)
connectDB()

let PORT = 9999
app.listen(PORT, () => {
    console.log('server started with port: ', PORT);
})