import AuthService from '../services/AuthService'
const Register = async (req, res) => {
    try {
        const mess = await AuthService.Register(req.body)
        return res.cookie("access_token", mess.token, {
            httpOnly: true
        }).status(200).json(mess)
    } catch (e) {
        console.log(e);
    }
}
const Login = async (req, res) => {
    try {
        const mess = await AuthService.Login(req.body)
        return res.cookie("access_token", mess.token, {
            httpOnly: true
        }).status(200).json(mess)
    } catch (e) {
        console.log(e);
    }
}
module.exports = {
    Register: Register,
    Login: Login
}
