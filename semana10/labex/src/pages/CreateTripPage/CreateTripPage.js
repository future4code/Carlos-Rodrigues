import React from 'react';
import { BASE_URL } from '../../constants/url';
import useForm from '../../hooks/useForm';
import axios from 'axios';
import { header } from '../../constants/header';
import ButtonBack from '../../components/ButtonBack/ButtonBack'
import { CreateButton, FormContainer, InputContainer, MainContainer, SelectContainer, TopContainer } from './styled';

export default function CreateTripPage() {

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

        axios.post(`${BASE_URL}/trips`, form, header)
        .then(() => {
            cleanFields()
            alert("Viagem criada com sucesso!")
        })
        .catch(() => {
            alert("Verifique se todos os campos foram preenchidos corretamente.")
        })
    }
    
    return (
        <MainContainer>
            <TopContainer>
                <ButtonBack/>
                <h1>Crie sua viagem ! </h1>
            </TopContainer>
            <form onSubmit={onClickCreate}>
                <FormContainer>
                    <InputContainer 
                        placeholder="Nome da viagem" 
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        pattern={"^[A-Za-záàâãéèêíïóôõöúçñ ]{5,}$"}
                        required
                    />
                    <SelectContainer name="planet" value={form.planet} onChange={onChange}>
                        <option>Qual o planeta de destino ?</option>
                        <option>Júpiter</option>
                        <option>Marte</option>
                        <option>Mercúrio</option>
                        <option>Netuno</option>
                        <option>Plutão</option>
                        <option>Saturno</option>
                        <option>Urano</option>
                        <option>Vênus</option>
                    </SelectContainer>
                    <InputContainer 
                        placeholder="Data de partida" 
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={onChange}
                        required
                        min={data()}
                    />
                    <InputContainer
                        placeholder="Duração em dias"
                        type="number"
                        name="durationInDays"
                        value={form.durationInDays}
                        onChange={onChange}
                        required
                        min={50}
            
                    />
                    <InputContainer
                        placeholder="Descrição"
                        type="text"
                        name="description"
                        value={form.description}
                        onChange={onChange}
                        required
                        pattern={"^.{30,}"}
                    />
                    <CreateButton>Criar</CreateButton>
                </FormContainer>
            </form>
        </MainContainer>
    )
}
