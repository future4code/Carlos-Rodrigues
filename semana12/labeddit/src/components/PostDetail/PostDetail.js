import React from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'

export default function PostDetail() {
    const params = useParams()
    console.log(params)

    const postDetail = useRequestData(`${BASE_URL}/posts/${params.id}/comments`, [])
    console.log("detail", postDetail)
    return (
        <div>

        </div>
    )
}