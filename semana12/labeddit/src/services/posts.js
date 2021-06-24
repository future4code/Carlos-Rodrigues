import axios from 'axios';
import {BASE_URL} from '../constants/urls';

const token = localStorage.getItem("token")


export const createPost = (body, clear) => {

    axios.post(`${BASE_URL}/posts`, body, {headers: {Authorization: token}})
    .then(() => {
        alert("Post criado com sucesso!")
        clear()
    })
    .catch((err) => {
        alert(err.response.message)
    })
}