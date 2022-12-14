import express from "express";
const app = express()
import dotenv from "dotenv"
import bodyParser from 'body-parser'
import WebRoute from './routes/web'
import connectDB from './config/connect'
import cookieParser from "cookie-parser";
import cors from 'cors';
app.use(cors())
dotenv.config()
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

WebRoute(app)

connectDB()

let PORT = 8088
app.listen(PORT, () => {
    console.log('server started with port: ', PORT);
})