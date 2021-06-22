import React from 'react';
import Header from '../../components/Header/Header';
import useForm from '../../hooks/useForm'

export default function LoginPage() {
    const [form, onChange, clear] = useForm({email:"",  password:""})
    
    return (
        <div>
            <Header 
                title={"login"}
            />

            <form>
                <input 
                    placeholder="E-mail"
                    name={"email"}
                    value={form.email}
                />
                <input 
                    placeholder="Senha"
                    name={"password"}
                    value={form.password}
                />

                <button>Entrar</button>
            </form>
        </div>
    )
}