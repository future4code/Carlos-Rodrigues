import React from 'react';
import useRequestData from '../../hooks/useRequestData';

export default function CardTrip() {
    const onClickDiv = (id) => {
        console.log(id)
    }
    const trips = useRequestData({}, "https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-rodrigues-paiva/trips")

    const listTrip = trips.trips && trips.trips.map((trip) => {
        return <div key={trip.id} onClick={() => onClickDiv(trip.id)}>
                    <p>Nome: {trip.name}</p>
                    <p>Destino: {trip.planet}</p>
                    <p>Descrição: {trip.description}</p>
                    <p>Data de partida: {trip.date}</p>
                    <p>Duração: {trip.durationInDays} dias</p>
                    <button value={trip.id}>Inscreva-se</button>
                    <hr/>
                </div>
    })
    return (
        <div>
            {listTrip}
        </div>
    )
}