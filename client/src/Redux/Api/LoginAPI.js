import Axios from '../../utils/Axios'
export const Login = async (body) => {
    try {
        const res = await Axios.post('/login', body,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        if (res && res.data) {
            return res.data
        } else {
            return []
        }
    } catch (error) {
        console.log(error);
    }
}
export const Register = async (body) => {
    try {
        const res = await Axios.post('/register', body,
            {
                headers: { 'Content-Type': 'application/json' }
            })
        return res.data
    } catch (error) {

    }
}