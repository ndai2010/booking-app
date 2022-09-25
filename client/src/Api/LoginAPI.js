import Axios from '../utils/Axios'


class Login {
    Login = async (body) => {
        try {
            const res = await Axios.post('/login', body,
                {
                    headers: { 'Content-Type': 'application/json' }
                })
            return res.data
        } catch (error) {

        }
    }
    Register = async (body) => {
        try {
            const res = await Axios.post('/register', body,
                {
                    headers: { 'Content-Type': 'application/json' }
                })
            return res.data
        } catch (error) {

        }
    }
}
const loginApi = new Login();

export default loginApi;
