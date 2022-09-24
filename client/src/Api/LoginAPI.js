import Axios from '../utils/Axios'


class Login {
    Login = async (body) => {
        try {
            const res = await Axios.post('/login', body,
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                })
            console.log(res);
        } catch (error) {

        }
    }
}
const loginApi = new Login();

export default loginApi;
