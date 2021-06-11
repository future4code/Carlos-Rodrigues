import React from 'react';
import { useHistory } from 'react-router';
import { BASE_URL } from '../../constants/url';
import useForm from '../../hooks/useForm';
import { goBack } from '../../routes/coordinator';
import axios from 'axios';
import { header } from '../../constants/header';

export default function CreateTripPage() {
    const history = useHistory()

    const {form, onChange, cleanFields} = useForm({name: "", planet: "", date: "", description: "", durationInDays: ""})

    

    const data = () =>{
        const dateToday = new Date(Date.now()).toLocaleString().slice(0, 10);
        const day = dateToday.slice(0,2)
        const month = dateToday.slice(3,5)
        const year = dateToday.slice(6,10)
        const dataRefeita = `${year}-${month}-${day}`
        return dataRefeita
    }

    const onClickCreate = (e) => {
        e.preventDefault()

        console.log(form)

        axios.post(`${BASE_URL}/trips`, form, header)
        .then((res) => {
            console.log(res)
            cleanFields()
        })
        .catch((err) => {
            console.log(err.response.data.message)
            cleanFields()
        })
    }
    
    return (
        <div>
            <button onClick={() => goBack(history)}>Voltar</button>

            <form onSubmit={onClickCreate}>
                <h1>CreateTripPage</h1>
                <input 
                    placeholder="Nome da viagem" 
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    pattern={"^[A-Za-záàâãéèêíïóôõöúçñ ]{5,}$"}
                    required
                />
                <select name="planet" value={form.planet} onChange={onChange}>
                    <option>Qual o planeta de destino ?</option>
                    <option>Júpiter</option>
                    <option>Marte</option>
                    <option>Mercúrio</option>
                    <option>Netuno</option>
                    <option>Plutão</option>
                    <option>Saturno</option>
                    <option>Urano</option>
                    <option>Vênus</option>
                </select>
                <input 
                    placeholder="Data de partida" 
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={onChange}
                    required
                    min={data()}
                />
                <input
                    placeholder="Duração em dias"
                    type="number"
                    name="durationInDays"
                    value={form.durationInDays}
                    onChange={onChange}
                    required
                    min={50}
        
                />
                <input
                    placeholder="Descrição"
                    type="text"
                    name="description"
                    value={form.description}
                    onChange={onChange}
                    required
                    pattern={"^.{30,}"}
                />
                <button>Criar</button>
            </form>
            <hr/>
        </div>
    )
}