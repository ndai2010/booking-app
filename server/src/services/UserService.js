import db from "../models"
import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10)

const CreatUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (data && data.email) {
                const user = await db.Users.findOne({
                    where: {
                        email: data.email
                    }
                })
                if (!user) {
                    let hash = bcrypt.hashSync(data.password, salt);
                    await db.Users.create({
                        username: data.username,
                        email: data.email,
                        country: data.country,
                        img: data.avatar,
                        city: data.city,
                        phone: data.phone,
                        password: hash,
                        isAdmin: data.isAdmin,
                    })
                    resolve({
                        errCode: 0,
                        message: "Create user is success!"
                    })
                } else {
                    resolve({
                        errCode: 400,
                        message: "Your email is exist!"
                    })
                }
            } else {
                resolve({
                    errCode: 400,
                    message: 'Please input all field!'
                })
            }
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
    CreatUser: CreatUser,
    UpdateHotel: UpdateHotel,
    DeleteHotel: DeleteHotel,
    GetAllUser: GetAllUser
}