import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToLogin, goToSignUp } from '../../routes/coordinator'

export default function HomePage() {
const history = useHistory()

    return (
        <div>
            <div>
                <h2>LabEddit</h2>
                <button onClick={() => goToSignUp(history)}>Cadastre-se</button>
                <button onClick={() => goToLogin(history)}>Login</button>
            </div> 

            <div>
                <p>Conteúdo</p>
            </div>
        </div>
    )
}