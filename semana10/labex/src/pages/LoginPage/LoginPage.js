import React from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import useProtectedPage from '../../hooks/useProtectedPage'
import useForm from '../../hooks/useForm';
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import {LoginButton, LoginContainer, MainContainer, TopContainer} from './styled'



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
        <MainContainer>
            <TopContainer>
                <ButtonHome/>
                <h1>Login</h1>
            </TopContainer>
            <form onSubmit={onClickLogin}>
                <LoginContainer>
                    <Input
                        name="email"
                        value={form.email} 
                        onChange={onChange}
                        type="email" 
                        placeholder="E-mail"
                        required
                        startAdornment={
                            <InputAdornment position="start">
                            <AccountCircle/>
                            </InputAdornment>
                        }
                    />
                    <Input
                        name="password"
                        value={form.password} 
                        onChange={onChange}
                        type="password"
                        placeholder="Senha"
                        required
                        pattern={"^.{6,}"}
                        title={"Sua senha deve possuir no mínimo 6 caracteres."}
                        startAdornment={
                            <InputAdornment position="start">
                            <LockIcon/>
                            </InputAdornment>
                        }
                    />
                    <LoginButton>ENTRAR</LoginButton>
                </LoginContainer>
            </form>
        </MainContainer>
    )
}