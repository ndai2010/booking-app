import express from "express";
const app = express()
import dotenv from "dotenv"
import bodyParser from 'body-parser'
import WebRoute from './routes/web'
import connectDB from './config/connect'
dotenv.config()


WebRoute(app)
connectDB()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



let PORT = 8080
app.listen(PORT, () => {
    console.log('server started with port: ', PORT);
})