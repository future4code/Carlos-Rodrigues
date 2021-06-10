import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { goBack } from '../../routes/coordinator';
// import useRequestDetail from '../../hooks/useRequestDetail';
import {BASE_URL } from '../../constants/url';
import axios from 'axios';


export default function TripDetailsPage() {

    const history = useHistory()

    const [trip, setTrip] = useState({})

    const params = useParams()
     
    useEffect(() => {
        const header = {
            headers : {
                auth: localStorage.getItem("token")
            }
        }
        
        axios.get(`${BASE_URL}/trip/${params.id}`, header)
        .then((res) => {
            setTrip(res.data)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }, [params.id, setTrip])
    
    console.log("trip:", trip)
    return (
        <div>
            <button onClick={() => goBack(history)}>Voltar</button>
            <h1>TripDetailsPage</h1>
            <p>Nome viagem</p>
            <p>Descrição</p>
            <p>Data</p>
            <h2>Candidatos Pendentes</h2>
            <p>Nome candidato</p>
            <button>Aprovar</button>
            <button>Recusar</button>

            <h2>Candidatos Aprovados</h2>
        </div>
    )
}

