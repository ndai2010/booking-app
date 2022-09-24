import db from "../models"
import bcrypt from 'bcryptjs'
import Jwt from "jsonwebtoken"
const salt = bcrypt.genSaltSync(10)

const CheckEmail = async (email) => {
    try {
        if (email) {
            let findEmail = await db.Users.findOne({
                where: {
                    email: email
                }
            })
            if (findEmail) {
                console.log('yes');
                return false
            } else {
                console.log('no');
                return true
            }
        } else {
            return false
        }
    } catch (error) {
        return false
    }
}
const Register = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (body) {
                let hash = bcrypt.hashSync(body.password, salt);
                if (CheckEmail(body.email)) {
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
                        message: "Please input all field !"
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
            console.log(body);
            const user = await db.Users.findOne({
                where: {
                    email: body.email
                }
            })

            const isPassword = bcrypt.compareSync(body.password, user.password)


            if (!user) {
                resolve({
                    errCode: 400,
                    message: 'Your email is not found !'
                })
            } else {

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
                        message: 'Login is success !'
                    })
                }
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