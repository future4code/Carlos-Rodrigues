import React from 'react';
import Header from '../../components/Header/Header';
import LoginForm from '../../components/LoginForm/LoginForm';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

export default function LoginPage() {
    
    useUnprotectedPage()
    return (
        <div>
            <Header 
                title={"login"}
            />
                <LoginForm/>
        </div>
    )
}