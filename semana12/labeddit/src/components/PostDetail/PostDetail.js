import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import GlobalStateContext from '../../global/GlobalStateContext'
import useRequestData from '../../hooks/useRequestData'

export default function PostDetail() {
    const params = useParams()
    const {posts} = useContext(GlobalStateContext)

    return (
        <div>
            {posts.filter((item) => {
            if (params.id === item.id) {
                return true
            } return false
        }).map((post) => {
            return (
                <div key={post.id}>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
            )
        })}
        </div>
    )
}