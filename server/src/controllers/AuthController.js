import AuthService from '../services/AuthService'
const Register = async (req, res) => {
    try {
        const mess = await AuthService.Register(req.body)
        return res.status(200).json(mess)
    } catch (e) {
        console.log(e);
    }
}
module.exports = {
    Register: Register
}
