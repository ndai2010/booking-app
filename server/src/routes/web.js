import express from "express";
import HomeController from '../controllers/HomeController'
import AuthController from '../controllers/AuthController'
let router = express.Router()

let webRoutes = (app) => {

    router.post('/create-hotel', HomeController.CreateNewHotel)
    router.post('/update-hotel', HomeController.UpdateHotel)
    router.delete('/delete-hotel', HomeController.DeleteHotel)
    router.get('/get-all-hotel', HomeController.GetAllHotels)

    router.post('/register', AuthController.Register)
    return app.use("/", router)
}

module.exports = webRoutes