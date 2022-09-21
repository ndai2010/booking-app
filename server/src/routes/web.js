import express from "express";
import HomeController from '../controllers/HomeController'
import UserController from '../controllers/UserController'
import AuthController from '../controllers/AuthController'
import { verifyTAdmin, verifyUser } from '../utils/VerifyToken'
let router = express.Router()

let webRoutes = (app) => {

    router.post('/create-hotel', verifyTAdmin, HomeController.CreateNewHotel)
    router.post('/update-hotel', verifyTAdmin, HomeController.UpdateHotel)
    router.delete('/delete-hotel', verifyTAdmin, HomeController.DeleteHotel)
    router.get('/get-all-hotel', verifyUser, HomeController.GetAllHotels)

    router.post('/create-user', verifyTAdmin, UserController.CreateNewHotel)
    router.post('/update-user', verifyTAdmin, UserController.UpdateHotel)
    router.delete('/delete-user', verifyTAdmin, UserController.DeleteHotel)
    router.get('/get-all-user', verifyTAdmin, UserController.GetAllUser)

    router.post('/register', AuthController.Register)
    router.post('/login', AuthController.Login)
    return app.use("/", router)
}

module.exports = webRoutes