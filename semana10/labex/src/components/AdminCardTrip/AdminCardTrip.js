import React from 'react';
import {BASE_URL } from '../../constants/url';
import { useHistory } from 'react-router';
import useRequestData from '../../hooks/useRequestData';
import { goToTripDetails } from '../../routes/coordinator';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Container } from '@material-ui/core';
import { CardContainer, Card, MainContainer } from './styled';

export default function AdminCardTrip() {

    const history = useHistory()

    const [trips, getData] = useRequestData(`${BASE_URL}/trips`, {})

    const header = {
        headers : {
            auth: localStorage.getItem("token")
        }
    }
    const onClickDelete = (e) => {
        const id = (e.target.value)

        axios.delete(`${BASE_URL}/trips/${id}`, header)
        .then((res) => {
            console.log(res)
            getData(`${BASE_URL}/trips`)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }
    
    const listTrip = trips.trips ? trips.trips.map((trip) => {
        return (
                <MainContainer key={trip.id}>
                    <CardContainer>
                        <div onClick={() => goToTripDetails(history, trip.id)}>
                            <strong><p> {trip.name}</p></strong>
                        </div>
                    </CardContainer>
                        <div>
                        <IconButton aria-label="delete" value={trip.id} onClick={onClickDelete}>
                            <DeleteIcon/>
                        </IconButton>
                        </div>

                </MainContainer>
            )
    }) : <Container><h2>Carregando...</h2></Container>
    return (
        <div>
            {listTrip}
        </div>
    )

}