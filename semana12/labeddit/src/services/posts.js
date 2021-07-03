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
        if (err.response.data.message === "Erro ao validar os seguintes parâmetros: ") {
            alert("Preencha todos os campos para criar um post.")
        } else {
            alert(err.response.data.message)
        }
    })
}

export const createComment = (body, id, clear, getData) => {

    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {headers: {Authorization: token}})
    .then(() => {
        clear()
        getData()
    })
    .catch((err) => {
        alert(err.response.data.message)
    }) 
}

export const createVotePost = (direction, id, setPosts) => {
    const body = {
        direction: direction,
    }
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {headers: {Authorization: token}})
    .then(() => {
        getPosts(setPosts)
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}
export const changeVotePost = (direction, id, setPosts) => {
    const body = {
        direction: direction,
    }
    axios.put(`${BASE_URL}/posts/${id}/votes`, body, {headers: {Authorization: token}})
    .then(() => {
        getPosts(setPosts)
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}

export const deleteVotePost = (id, setPosts) => {

    axios.delete(`${BASE_URL}/posts/${id}/votes`, {headers: {Authorization: token}})
    .then(() => {
        getPosts(setPosts)
    })
    .catch((err) => {
        alert(err.response.data)
    })
}

export const createVoteComment = (direction, id, getData) => {
    const body = {
        direction: direction,
    }
    axios.post(`${BASE_URL}/comments/${id}/votes`, body, {headers: {Authorization: token}})
    .then(() => {
        getData()
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}

export const changeVoteComment = (direction, id, getData) => {
    const body = {
        direction: direction,
    }
    axios.put(`${BASE_URL}/comments/${id}/votes`, body, {headers: {Authorization: token}})
    .then(() => {
        getData()
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}

export const deleteVoteComment = (id, getData) => {

    axios.delete(`${BASE_URL}/comments/${id}/votes`, {headers: {Authorization: token}})
    .then(() => {
        getData()
    })
    .catch((err) => {
        alert(err.response.data)
    })

}