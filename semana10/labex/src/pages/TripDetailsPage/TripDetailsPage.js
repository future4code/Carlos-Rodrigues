import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {BASE_URL } from '../../constants/url';
import axios from 'axios';
import {header} from '../../constants/header'
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import { Button } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

export default function TripDetailsPage() {
    const params = useParams()

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
            alert(err.response.data.message)
        })
    }
         
    return (
        <div>
            <ButtonBack/>
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
                            <Button variant="contained" color="primary" endIcon={<ThumbUpIcon/>} onClick={() => onClickApprove(trip.id, candidate.id, true)}>Aprovar</Button>
                            <Button variant="contained" color="primary" endIcon={<ThumbDownIcon/>} onClick={() => onClickApprove(trip.id, candidate.id, false)}>Recusar</Button>
                        </div>
                    )
                })}
            </div>
            <div>
                <h2>Candidatos Aprovados</h2>
                {trip.approved ? trip.approved.map((candidate) => {
                    return <p key={candidate.id}>{candidate.name}</p>
                }) : <p>Nenhum candidato</p>}
            </div>
        </div>
    )
}

