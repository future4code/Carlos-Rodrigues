import React from 'react';
import { useParams } from 'react-router';
import useRequestData from '../../hooks/useRequestData';
import useForm from '../../hooks/useForm';
import {BASE_URL } from '../../constants/url';
import axios from 'axios';
import { header } from '../../constants/header';
import CountriesList from '../../components/CountriesList/CountriesList';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import TextField from '@material-ui/core/TextField';

export default function ApplicationFormPage() {

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
        .then(() => {
            alert("Inscrição realizada !")
            cleanFields()
        })
        .catch(() => {
            alert("Verifique se todos os campos foram preenchidos corretamente.")
        })
    }
    return (
        <div>
            <ButtonBack/>
            <h1>ApplicationFormPage</h1>
            {listTrip}
            <form onSubmit={onClickSend}>
                <TextField
                    variant="outlined" 
                    label="Nome"
                    type="name"
                    value={form.name}
                    onChange={onChange}
                    pattern={"^[A-Za-záàâãéèêíïóôõöúçñ ]{5,}$"}
                    name="name"
                    required
                />
                <TextField
                    variant="outlined"
                    label="Idade"
                    type="number"
                    value={form.age}
                    onChange={onChange}
                    min={18}
                    name="age"
                    required
                />
                <TextField
                    variant="outlined"
                    label="Profissão"
                    type="text"
                    name="profession"
                    value={form.profession}
                    onChange={onChange}
                    pattern={"^.{8,}"}
                    required
                />
                <TextField
                    variant="outlined" 
                    label="Texto de candidatura"
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