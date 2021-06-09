import React from 'react';
import {BASE_URL } from '../../constants/url';
import { useHistory } from 'react-router';
import useRequestData from '../../hooks/useRequestData';
import { goToTripDetails } from '../../routes/coordinator';

export default function AdminCardTrip() {

    const history = useHistory()
    
    // const goToTripDetails = (id) => {
    //     history.push(`/admin/trips/${id}`)
    // }
    const trips = useRequestData(`${BASE_URL}/trips`, {})


    const listTrip = trips.trips ? trips.trips.map((trip) => {
        return (
                <div key={trip.id} onClick={() => goToTripDetails(history, trip.id)}>
                    <p>Nome: {trip.name}</p>
                    <p>Esse card vai ser clicável</p>
                    <button>Excluir viagem</button>
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