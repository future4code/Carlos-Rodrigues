import React from 'react';
import { CardActionArea } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls';

export default function PostCard() {
const postList = useRequestData(`${BASE_URL}/posts`, [])

console.log(postList)

const posts = postList.map((post) => {
    console.log(post)
    console.log(post.id)
    return (
        <div>
            <p>{post.title}</p>
        </div>
    )
})
    return (
        <div>
            <CardActionArea>
                {/* <CardMedia/>   */}
                <Typography>

                </Typography>
                {posts}
            </CardActionArea>
        </div>
    )
}