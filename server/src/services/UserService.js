import db from "../models"
const CreateNewHotel = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Hotels.Create({
                name: data.name,
                type: data.type,
                city: data.city,
                address: data.address,
                distance: data.distance,
                photos: data.photos,
                description: data.description,
                rating: data.rating,
                rooms: data.rooms,
                cheapestPrice: data.cheapestPrice,
                featured: data.featured
            })
            resolve({
                errCode: 0,
                Message: 'Create success'
            })
        } catch (e) {
            console.log(e);
        }
    })
}
const UpdateHotel = async (data, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Hotels.update({
                name: data.name,
                type: data.type,
                city: data.city,
                address: data.address,
                distance: data.distance,
                photos: data.photos,
                description: data.description,
                rating: data.rating,
                rooms: data.rooms,
                cheapestPrice: data.cheapestPrice,
                featured: data.featured
            },
                {
                    where: {
                        id: id
                    }
                })
            resolve({
                errCode: 0,
                Message: 'Upadate success'
            })
        } catch (e) {
            console.log(e);
        }
    })
}
const DeleteHotel = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Hotels.destroy({
                where: {
                    id: id
                }
            })
            resolve({
                errCode: 0,
                Message: 'Upadate success'
            })
        } catch (e) {
            console.log(e);
        }
    })
}
const GetAllUser = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.Users.findAll()
            resolve({
                errCode: 0,
                Message: 'Get all success',
                data: data
            })
        } catch (e) {
            console.log(e);
        }
    })
}
module.exports = {
    CreateNewHotel: CreateNewHotel,
    UpdateHotel: UpdateHotel,
    DeleteHotel: DeleteHotel,
    GetAllUser: GetAllUser
}