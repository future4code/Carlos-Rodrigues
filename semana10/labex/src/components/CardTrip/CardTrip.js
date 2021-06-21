import React from 'react';
import {BASE_URL } from '../../constants/url';
import { useHistory } from 'react-router';
import useRequestData from '../../hooks/useRequestData';
import { goToApplicationForm } from '../../routes/coordinator';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { CardContainer, HoverDiv } from './styled';

export default function CardTrip() {

    const history = useHistory()

    const [trips] = useRequestData(`${BASE_URL}/trips`, {})
    
    const listTrip = trips.trips ? trips.trips.map((trip) => {
        return (
                <HoverDiv key={trip.id}>
                    <CardContainer>
                        <div>
                            <p><strong>Nome:</strong> {trip.name}</p>
                            <p><strong>Destino:</strong> {trip.planet}</p>
                            <p><strong>Descrição:</strong> {trip.description}</p>
                            <p><strong>Data de partida:</strong> {trip.date}</p>
                            <p><strong>Duração:</strong> {trip.durationInDays} dias</p>
                        </div>
                        <Button variant="contained" color="primary" endIcon={<SendIcon/>} onClick={() => goToApplicationForm(history, trip.id)}>
                            Inscreva-se
                        </Button>
                    </CardContainer>
                    <hr/>
                </HoverDiv>
            )
    }) : <h2>Carregando...</h2>
    return (
        <div>
            {listTrip}
        </div>
    )
}