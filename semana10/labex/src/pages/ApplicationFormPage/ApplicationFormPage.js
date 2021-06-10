import React from 'react';
import { useHistory, useParams } from 'react-router';
import { goBack } from '../../routes/coordinator';
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL } from '../../constants/url';

export default function ApplicationFormPage() {
    const history = useHistory()

    const trips = useRequestData(`${BASE_URL}/trips`, {})
    
    const params = useParams()

    // const listTrip = trips.trips ? trips.trips.map((trip) => {
    //     if (trips.trips.id === params.id) {
    //         return <h2>{trip.name}</h2>
    //     }
    // }) : <h2>Carregando...</h2>

    // console.log(listTrip)

    trips.trips && console.log("trips:", trips.trips)
    console.log("params:", params.id)

    const onClickSend = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <button onClick={() => goBack(history)}>Voltar</button>
            <h1>ApplicationFormPage</h1>
            <form onSubmit={onClickSend}>
                <input 
                    placeholder="Nome"
                    type="name"
                    pattern={"^[a-záàâãéèêíïóôõöúçñ ]{5,}$"}
                    required
                />
                <input
                    placeholder="Idade"
                    type="number"
                    min={18}
                    required
                />
                <input
                    placeholder="Profissão"
                    type="text"
                    pattern={"^.{10,}"}
                    required
                />
                <input 
                    placeholder="Texto de candidatura"
                    pattern={"^.{30,}"}
                    required
                />
                <select required>
                    <option>País</option>
                </select>
                <button>Enviar</button>
            </form>
            <hr/>
        </div>
    )
}