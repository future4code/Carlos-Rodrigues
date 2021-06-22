import React from 'react';
import Header from '../../components/Header/Header';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

export default function SignUpPage() {
    useUnprotectedPage()
    
    return (
        <div>
            <Header 
                title={"signup"}
            />
            <SignUpForm/>
        </div>
    )
}