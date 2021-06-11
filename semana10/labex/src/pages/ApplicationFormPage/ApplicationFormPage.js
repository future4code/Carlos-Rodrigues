import React from 'react';
import { useHistory, useParams } from 'react-router';
import { goBack } from '../../routes/coordinator';
import useRequestData from '../../hooks/useRequestData';
import useForm from '../../hooks/useForm';
import {BASE_URL } from '../../constants/url';
import axios from 'axios';
import { header } from '../../constants/header';
import CountriesList from '../../components/CountriesList/CountriesList';

export default function ApplicationFormPage() {
    const history = useHistory()

    const [trips] = useRequestData(`${BASE_URL}/trips`, {})
    
    const params = useParams()
    
    const {form, onChange, cleanFields}  = useForm({name: "", age: "",  applicationText: "", profession: "", country:""})

    const listTrip = trips.trips ? trips.trips.map((trip) => {
        if (trip.id === params.id) {
            return <h2 key={trip.id}>{trip.name}</h2>
        } return false
    }) : <h2>Carregando...</h2>
    
    
    const onClickSend = (e) => {
        e.preventDefault()
        console.log(form)
        axios.post(`${BASE_URL}/trips/${params.id}/apply`, form, header)
        .then((res) => {
            console.log(res.data.message)
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
            <h1>ApplicationFormPage</h1>
            {listTrip}
            <form onSubmit={onClickSend}>
                <input 
                    placeholder="Nome"
                    type="name"
                    value={form.name}
                    onChange={onChange}
                    pattern={"^[A-Za-záàâãéèêíïóôõöúçñ ]{5,}$"}
                    name="name"
                    required
                />
                <input
                    placeholder="Idade"
                    type="number"
                    value={form.age}
                    onChange={onChange}
                    min={18}
                    name="age"
                    required
                />
                <input
                    placeholder="Profissão"
                    type="text"
                    name="profession"
                    value={form.profession}
                    onChange={onChange}
                    pattern={"^.{8,}"}
                    required
                />
                <input 
                    placeholder="Texto de candidatura"
                    type="text"
                    name="applicationText"
                    value={form.applicationText}
                    onChange={onChange}
                    pattern={"^.{30,}"}
                    required
                />
                <CountriesList name="country" onChange={onChange}/>
                <button>Enviar</button>
            </form>
            <hr/>
        </div>
    )
}