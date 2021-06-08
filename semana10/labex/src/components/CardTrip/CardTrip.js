import React from 'react';
// import { useHistory } from 'react-router';
import useRequestData from '../../hooks/useRequestData';
// import { goToApplicationForm } from '../../routes/coordinator';

export default function CardTrip() {
    // const history = useHistory()

    const onClickDiv = (id) => {
        console.log(id)
    }
    const trips = useRequestData({}, "https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-rodrigues-paiva/trips")

    const listTrip = () => {
        if (trips.trips) {
            return (                
                trips.trips.map((trip) => {
                    return (
                        <div key={trip.id} onClick={() => onClickDiv(trip.id)}>
                            <p>Nome: {trip.name}</p>
                            <p>Destino: {trip.planet}</p>
                            <p>Descrição: {trip.description}</p>
                            <p>Data de partida: {trip.date}</p>
                            <p>Duração: {trip.durationInDays} dias</p>
                            {/* <button value={trip.id} onClick={() => goToApplicationForm(history)}>Inscreva-se</button> */}
                            <hr/>
                        </div>
                    )
                })        
            )
        } else {
            return (
                <div>
                    <h2>Carregando...</h2>
                </div>
            )
        }
    }
    return (
        <div>
            {listTrip()}
        </div>
    )
}