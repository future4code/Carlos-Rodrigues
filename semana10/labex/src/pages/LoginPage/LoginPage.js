import React from 'react';
import { goToAdminHome, goToHome } from '../../routes/coordinator';
import { useHistory } from 'react-router';


export default function LoginPage() {
    const history = useHistory()

    return (
        <div>
            <h1>LoginPage</h1>
            <input type="email" placeholder="E-mail"/>
            <input type="password" placeholder="Senha"/>
            <button onClick={() => goToAdminHome(history)}>Entrar</button>
            <button onClick={() => goToHome(history)}>Home</button>
            <hr/>
        </div>
    )
}