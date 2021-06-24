import React from 'react';
import Header from '../../components/Header/Header';
import useProtectedPage from '../../hooks/useProtectedPage';
import PostCard from '../../components/PostCard/PostCard';
import CreatePost from '../../components/CreatePost/CreatePost';
import { FeedContainer } from './styled';

export default function FeedPage() {
    useProtectedPage()
    
    return (
        <div>
            <Header
                title={"feed"}
            />
            <FeedContainer>
                <CreatePost/>
                <PostCard/>
            </FeedContainer>

        </div>
    )
}