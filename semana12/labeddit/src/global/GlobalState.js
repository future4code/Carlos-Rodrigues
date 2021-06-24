import React, {useEffect, useState} from 'react';
import { getPosts } from '../services/posts';
import GlobalStateContext from './GlobalStateContext';

export default function GlobalState(props) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts(setPosts)
    }, [])

    const data = {posts, setPosts}
    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
