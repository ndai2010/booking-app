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
const UpdateHotel = async (data) => {
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
module.exports = {
    CreateNewHotel: CreateNewHotel,
    UpdateHotel: UpdateHotel
}