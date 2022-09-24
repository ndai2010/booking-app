import express from "express";
const app = express()
import dotenv from "dotenv"
import bodyParser from 'body-parser'
import WebRoute from './routes/web'
import connectDB from './config/connect'
import cookieParser from "cookie-parser";
import cors from 'cors';

app.use(cors());
dotenv.config()

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
})
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

WebRoute(app)
connectDB()

let PORT = 9999
app.listen(PORT, () => {
    console.log('server started with port: ', PORT);
})