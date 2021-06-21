import React from 'react';
import { useParams } from 'react-router';
import useRequestData from '../../hooks/useRequestData';
import useForm from '../../hooks/useForm';
import {BASE_URL } from '../../constants/url';
import axios from 'axios';
import { header } from '../../constants/header';
import CountriesList from '../../components/CountriesList/CountriesList';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import {FormContainer, MainContainer, SendButton, TopContainer, InputContainer} from './styled'
import { Container } from '@material-ui/core';

export default function ApplicationFormPage() {

    const [trips] = useRequestData(`${BASE_URL}/trips`, {})
    
    const params = useParams()
    
    const {form, onChange, cleanFields}  = useForm({name: "", age: "",  applicationText: "", profession: "", country:""})

    const listTrip = trips.trips ? trips.trips.map((trip) => {
        if (trip.id === params.id) {
            return <Container><h2 key={trip.id}>{trip.name}</h2></Container>
        } return false
    }) : <Container><h2>Carregando...</h2></Container>
    
    
    const onClickSend = (e) => {
        e.preventDefault()
        
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
        <MainContainer>
            <TopContainer>
                <ButtonBack/>
                <h1>Formulário de aplicação</h1>
            </TopContainer>
            {listTrip}
            <form onSubmit={onClickSend}>
            <FormContainer>
                <InputContainer
                    variant="outlined" 
                    placeholder="Nome"
                    type="name"
                    value={form.name}
                    onChange={onChange}
                    pattern={"^[A-Za-záàâãéèêíïóôõöúçñ ]{5,}$"}
                    name="name"
                    required
                />
                <InputContainer
                    variant="outlined"
                    placeholder="Idade"
                    type="number"
                    value={form.age}
                    onChange={onChange}
                    min={18}
                    name="age"
                    required
                />
                <InputContainer
                    variant="outlined"
                    placeholder="Profissão"
                    type="text"
                    name="profession"
                    value={form.profession}
                    onChange={onChange}
                    pattern={"^.{8,}"}
                    required
                />
                <InputContainer
                    variant="outlined" 
                    placeholder="Texto de candidatura"
                    type="text"
                    name="applicationText"
                    value={form.applicationText}
                    onChange={onChange}
                    pattern={"^.{30,}"}
                    required
                />
                <CountriesList name="country" onChange={onChange}/>
                
                <SendButton>Enviar</SendButton>
            </FormContainer>
            </form>
        </MainContainer>
    )
}
