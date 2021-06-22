import React from 'react';
import Header from '../../components/Header/Header';
import useProtectedPage from '../../hooks/useProtectedPage';

export default function PostPage() {
    
    useProtectedPage()

    return (
        <div>
            <Header
                title={"post"}
            />
        </div>
    )
}