import React from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import useProtectedPage from '../../hooks/useProtectedPage'
import useForm from '../../hooks/useForm';
import ButtonHome from '../../components/ButtonHome/ButtonHome';


export default function LoginPage() {
    useProtectedPage()

    const {form, onChange}  = useForm({email: "", password: ""})

    const history = useHistory()


    const onClickLogin = (e) => {

        e.preventDefault()     
        
        axios.post(`${BASE_URL}/login`, form)
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
            <ButtonHome/>
            <h1>LoginPage</h1>
            <form onSubmit={onClickLogin}>
                <input
                    name="email"
                    value={form.email} 
                    onChange={onChange}
                    type="email" 
                    placeholder="E-mail"
                    required   
                />
                <input
                    name="password"
                    value={form.password} 
                    onChange={onChange}
                    type="password"
                    placeholder="Senha"
                    required
                    pattern={"^.{6,}"}
                    title={"Sua senha deve possuir no mínimo 6 caracteres."}
                />
                <button>Entrar</button>
            </form>
            <hr/>
        </div>
    )
}