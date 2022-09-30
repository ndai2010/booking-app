import Axios from "../../utils/Axios";

export const GetAllUser = async () => {
    try {
        const res = await Axios.get('/get-all-user',
            {
                headers: {
                    Authorization: 'Bearer' + localStorage.getItem('accessToken')
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