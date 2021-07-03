import React from 'react';
import Header from '../../components/Header/Header';
import useProtectedPage from '../../hooks/useProtectedPage';
import PostDetail from '../../components/PostDetail/PostDetail';
import PostComments from '../../components/PostDetail/PostComments'
import { DetailsContainer } from './styled';

export default function PostPage() {
    
    useProtectedPage()

    return (
        <div>
            <Header
                title={"post"}
            />
            <DetailsContainer>
                <PostDetail/>
                <PostComments/>
            </DetailsContainer>
        </div>
    )
}