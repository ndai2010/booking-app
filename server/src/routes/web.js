import express from "express";
import HomeController from '../controllers/HomeController'
let router = express.Router()

let webRoutes = (app) => {
    router.post('/create-hotel', HomeController.CreateNewHotel)
    router.post('/update-hotel', HomeController.UpdateHotel)
    return app.use("/", router)
}

module.exports = webRoutes