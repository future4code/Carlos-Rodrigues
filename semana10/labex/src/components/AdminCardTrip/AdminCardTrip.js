import React from 'react';
import {BASE_URL } from '../../constants/url';
import { useHistory } from 'react-router';
import useRequestData from '../../hooks/useRequestData';
import { goToTripDetails } from '../../routes/coordinator';
import axios from 'axios';
import { header } from '../../constants/header';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function AdminCardTrip() {

    const history = useHistory()

    const [trips, getData] = useRequestData(`${BASE_URL}/trips`, {})

    const onClickDelete = (e) => {
        const id = (e.target.value)

        axios.delete(`${BASE_URL}/trips/${id}`, header)
        .then((res) => {
            console.log(res)
            getData(`${BASE_URL}/trips`)
        })
        .catch((err) => {
            console.log(err.response.data.message)
        })
    }
    
    const listTrip = trips.trips ? trips.trips.map((trip) => {
        return (
                <div key={trip.id}>
                    <div onClick={() => goToTripDetails(history, trip.id)}>
                        <p>Nome: {trip.name}</p>
                        <p>Esse card vai ser clicável</p>
                    </div>
                    <IconButton aria-label="delete" value={trip.id} onClick={onClickDelete}>
                        <DeleteIcon/>
                    </IconButton>
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