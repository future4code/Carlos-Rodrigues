import axios from 'axios';
import {BASE_URL} from '../constants/urls';

const token = localStorage.getItem("token")


export const getPosts = (setPosts) => {
    axios.get(`${BASE_URL}/posts`, {headers: {Authorization: token}})
    .then((res) => {
        setPosts(res.data)
    })
    .catch((err) => {
        alert(err.response.message)
    })

}

export const createPost = (body, clear, setPosts) => {

    axios.post(`${BASE_URL}/posts`, body, {headers: {Authorization: token}})
    .then(() => {
        alert("Post criado com sucesso!")
        clear()
        getPosts(setPosts)
    })
    .catch((err) => {
        alert(err.response.message)
    })
}