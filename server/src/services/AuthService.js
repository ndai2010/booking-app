import db from "../models"
import bcrypt from 'bcryptjs'
import Jwt from "jsonwebtoken"
const salt = bcrypt.genSaltSync(10)
const Register = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (body && body.email) {
                const user = await db.Users.findOne({
                    where: {
                        email: body.email
                    }
                })
                let hash = bcrypt.hashSync(body.password, salt);
                if (!user) {
                    await db.Users.create({
                        username: body.username,
                        email: body.email,
                        country: body.country,
                        img: body.avatar,
                        city: body.city,
                        phone: body.phone,
                        password: hash,
                        isAdmin: false,
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
const Login = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (body.email && body.password) {
                const user = await db.Users.findOne({
                    where: {
                        email: body.email
                    }
                })
                if (!user) {
                    resolve({
                        errCode: 400,
                        message: 'Your email is not found !'
                    })
                } else {
                    const isPassword = bcrypt.compareSync(body.password, user.password)
                    if (!isPassword) {
                        resolve({
                            errCode: 400,
                            message: 'Wrong password!'
                        })
                    } else {
                        const token = Jwt.sign({
                            id: user.id, isAdmin: user.isAdmin
                        }, process.env.JWT)
                        resolve({
                            token: token,
                            errCode: 0,
                            isAdmin: user.isAdmin,
                            message: 'Login is success !'
                        })
                    }
                }
            } else {
                resolve({
                    errCode: 400,
                    message: 'Please input all field !'
                })
            }
        } catch (e) {
            console.log(e);
        }
    })
}
module.exports = {
    Register: Register,
    Login: Login
}