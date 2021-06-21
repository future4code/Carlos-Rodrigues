import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {BASE_URL } from '../../constants/url';
import axios from 'axios';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import { Button } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { MainContainer, TopContainer, DetailsContainer, TripContainer, Candidates, Approved, ButtonsContainer, White, CandidatesContainer } from './styled';

export default function TripDetailsPage() {
    const params = useParams()

    const [trip, setTrip] = useState({})

    useEffect(() => {
        getTripDetails()
    }, [params.id, setTrip])
    
    const header = {
        headers : {
            auth: localStorage.getItem("token")
        }
    }
    
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
        <MainContainer>
            <White>
            <TopContainer>
                <ButtonBack/>
                <h1>Detalhes da viagem</h1>
            </TopContainer>
            <DetailsContainer>

                <TripContainer>
                <p><strong>Nome:</strong> {trip && trip.name}</p>
                <p><strong>Descrição:</strong> {trip && trip.description}</p>
                <p><strong>Data:</strong> {trip && trip.date}</p>
                <p><strong>Duração:</strong> {trip && trip.durationInDays} dias</p>
                <hr/>
                </TripContainer>

                <Candidates>
                    <h2>Candidatos Pendentes</h2>
                    {trip.candidates && trip.candidates.map((candidate) => {
                        return (
                            <CandidatesContainer key={candidate.id}>
                                <p>{candidate.name}</p>
                                <ButtonsContainer>
                                    <Button size="small" variant="contained" color="primary" endIcon={<ThumbUpIcon/>} onClick={() => onClickApprove(trip.id, candidate.id, true)}>Aprovar</Button>
                                    <Button size="small" variant="contained" color="primary" endIcon={<ThumbDownIcon/>} onClick={() => onClickApprove(trip.id, candidate.id, false)}>Recusar</Button>
                                </ButtonsContainer>
                            </CandidatesContainer>
                        )
                    })}
                    <hr/>
                </Candidates>
                <Approved>
                    <h2>Candidatos Aprovados</h2>
                    {trip.approved ? trip.approved.map((candidate) => {
                        return <p key={candidate.id}>{candidate.name}</p>
                    }) : <p>Nenhum candidato</p>}
                </Approved>
            </DetailsContainer>
        </White>
        </MainContainer>
    )
}

