
import HotelService from '../services/HotelService'
const CreateNewHotel = async (req, res) => {
    try {
        const mess = await HotelService.CreateNewHotel(req.body)
        return res.status(200).json(mess)
    } catch (e) {
        console.log(e);
    }
}
const UpdateHotel = async (req, res) => {
    try {
        const mess = await HotelService.UpdateHotel(req.body, req.param.id)
        res.status(200).json(mess)
    } catch (e) {
        console.log(e);
    }
}
const DeleteHotel = async (req, res) => {
    try {
        const mess = await HotelService.DeleteHotel(req.id)
        res.status(200).json(mess)
    } catch (e) {
        console.log(e);
    }
}

const GetAllHotels = async (req, res) => {
    try {
        const mess = await HotelService.GetAllHotels()
        res.status(200).json(mess)
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    CreateNewHotel: CreateNewHotel,
    UpdateHotel: UpdateHotel,
    GetAllHotels: GetAllHotels,
    DeleteHotel: DeleteHotel
}