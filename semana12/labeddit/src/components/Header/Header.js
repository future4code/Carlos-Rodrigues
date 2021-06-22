import React from 'react';
import { useHistory } from 'react-router';
import { goToSignUp, goToLogin, goBack, goToHome} from '../../routes/coordinator';

export default function Header({title}) {
    const history = useHistory()

    const showHeader = () => {
        if (title === "home") {
            return (
                <div>
                    <h2>LabEddit</h2>
                    <button onClick={() => goToSignUp(history)}>Cadastre-se</button>
                    <button onClick={() => goToLogin(history)}>Login</button>
                </div>    
            )    
        } else if (title === "login" || title === "signup") {
            return (
                <div>
                    <button onClick={() => goBack(history)}>Voltar</button>
                </div>
            )
        } else if (title === "feed" || title === "post") {
            return (
                <div>
                    Nome do usuário
                    <button onClick={() => goToHome(history)}>Logout</button>
                </div>
            )
        }
    }
    return (
        <div>
            {showHeader()}
        </div>
    )
}