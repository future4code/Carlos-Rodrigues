import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { goBack } from '../../routes/coordinator';
import {BASE_URL } from '../../constants/url';
import axios from 'axios';
import { header } from '../../constants/header';


export default function TripDetailsPage() {
    const params = useParams()

    const history = useHistory()

    const [trip, setTrip] = useState({})

    useEffect(() => {
        getTripDetails()
    }, [params.id, setTrip])
    


    const getTripDetails = () => {
        axios.get(`${BASE_URL}/trip/${params.id}`, header)
        .then((res) => {
            setTrip(res.data.trip)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }  
    
    const onClickApprove = (tripId, candidateId, result) => {
        const body = {
            approve: result
        }
        axios.put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, header)
        .then(() => {
            alert("O resultado do candidato foi confirmado!")
            getTripDetails(params.id)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    console.log(trip)
     
    return (
        <div>
            <button onClick={() => goBack(history)}>Voltar</button>
            <h1>TripDetailsPage</h1>
            <p>Nome viagem: </p>
            <p>Descrição</p>
            <p>Data</p>
            <div>
                <h2>Candidatos Pendentes</h2>
                {trip.candidates && trip.candidates.map((candidate) => {
                    return (
                        <div key={candidate.id}>
                            <p>{candidate.name}</p>
                            <button onClick={() => onClickApprove(trip.id, candidate.id, true)}>Aprovar</button>
                            <button onClick={() => onClickApprove(trip.id, candidate.id, false)}>Recusar</button>
                        </div>
                    )
                })}
            </div>
            <div>
                <h2>Candidatos Aprovados</h2>
                {trip.approved ? trip.approved.map((candidate) => {
                    return <p>{candidate.name}</p>
                }) : <p>Nenhum candidato</p>}
            </div>
        </div>
    )
}

