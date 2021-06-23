import React from 'react';
import Header from '../../components/Header/Header';
import useProtectedPage from '../../hooks/useProtectedPage'
import PostCard from '../../components/PostCard/PostCard'

export default function FeedPage() {
    useProtectedPage()
    
    return (
        <div>
            <Header
                title={"feed"}
            />

            <PostCard/>

        </div>
    )
}