
import HotelService from '../services/HotelService'
const CreateNewHotel = async (req, res) => {
    try {
        const mess = await HotelService.CreateNewHotel(req.body)
        res.status(200).json(mess)
    } catch (e) {
        console.log(e);
    }
}
const UpdateHotel = async (req, res) => {
    try {
        const mess = await HotelService.UpdateHotel(req.body)
        res.status(200).json(mess)
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    CreateNewHotel: CreateNewHotel,
    UpdateHotel: UpdateHotel

}