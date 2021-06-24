import React from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'

export default function PostDetail() {
    const params = useParams()

    const postComments = useRequestData(`${BASE_URL}/posts/${params.id}/comments`, [])
    console.log("detail", postComments)
    return (
        <div>

        </div>
    )
}