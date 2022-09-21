
import UserService from '../services/UserService'
const CreateNewHotel = async (req, res) => {
    try {
        const mess = await UserService.CreateNewHotel(req.body)
        return res.status(200).json(mess)
    } catch (e) {
        console.log(e);
    }
}
const UpdateHotel = async (req, res) => {
    try {
        const mess = await UserService.UpdateHotel(req.body, req.param.id)
        res.status(200).json(mess)
    } catch (e) {
        console.log(e);
    }
}
const DeleteHotel = async (req, res) => {
    try {
        const mess = await UserService.DeleteHotel(req.id)
        res.status(200).json(mess)
    } catch (e) {
        console.log(e);
    }
}

const GetAllUser = async (req, res, next) => {
    try {
        const mess = await UserService.GetAllUser()
        return res.status(200).json(mess)
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    CreateNewHotel: CreateNewHotel,
    UpdateHotel: UpdateHotel,
    GetAllUser: GetAllUser,
    DeleteHotel: DeleteHotel
}