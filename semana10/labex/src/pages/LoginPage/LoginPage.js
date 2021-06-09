import React from 'react';
import { goToAdminHome, goToHome } from '../../routes/coordinator';
import { useHistory } from 'react-router';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import useProtectedPage from '../../hooks/useProtectedPage'


export default function LoginPage() {

    const history = useHistory()
    const [email, handleEmail] = useInput("")
    const [password, handlePassword] = useInput("")

    useProtectedPage()
    const onClickLogin = () => {
        
        const body = {email, password}

        axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            history.push("/admin/trip/list")
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }
    return (
        <div>
            <h1>LoginPage</h1>
            <input value={email} onChange={handleEmail} type="email" placeholder="E-mail"/>
            <input value={password} onChange={handlePassword} type="password" placeholder="Senha"/>
            <button onClick={onClickLogin}>Entrar</button>
            <button onClick={() => goToHome(history)}>Home</button>
            <hr/>
        </div>
    )
}