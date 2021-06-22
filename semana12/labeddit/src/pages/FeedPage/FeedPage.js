import React from 'react';
import Header from '../../components/Header/Header';
import useProtectedPage from '../../hooks/useProtectedPage'

export default function FeedPage() {
    useProtectedPage()
    
    return (
        <div>
            <Header
                title={"feed"}
            />
        </div>
    )
}