import React from 'react';
import Header from '../../components/Header/Header';
import useProtectedPage from '../../hooks/useProtectedPage';
import PostDetail from '../../components/PostDetail/PostDetail'

export default function PostPage() {
    
    useProtectedPage()

    return (
        <div>
            <Header
                title={"post"}
            />
            <PostDetail/>
        </div>
    )
}