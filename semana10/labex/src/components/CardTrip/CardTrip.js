import React from 'react';
import {BASE_URL } from '../../constants/url';
import { useHistory } from 'react-router';
import useRequestData from '../../hooks/useRequestData';
import { goToApplicationForm } from '../../routes/coordinator';

export default function CardTrip() {
    const history = useHistory()

    const onClickDiv = (id) => {
        console.log(id)
    }
    
    const trips = useRequestData(`${BASE_URL}/trips`, {})

    const listTrip = trips.trips ? trips.trips.map((trip) => {
        return (
                <div key={trip.id} onClick={() => onClickDiv(trip.id)}>
                    <p>Nome: {trip.name}</p>
                    <p>Destino: {trip.planet}</p>
                    <p>Descrição: {trip.description}</p>
                    <p>Data de partida: {trip.date}</p>
                    <p>Duração: {trip.durationInDays} dias</p>
                    <button onClick={() => goToApplicationForm(history, trip.id)}>Inscreva-se</button>
                    <hr/>
                </div>
            )
    }) : <h2>Carregando...</h2>
    return (
        <div>
            {listTrip}
        </div>
    )
}