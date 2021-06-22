import axios from 'axios';
import {BASE_URL} from '../constants/urls';

export const login = (body, clear, history) => {
    
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        history.push("/feed")
    })
    .catch((err) => {
        alert(err.response.data.message)
        clear()
    })
}