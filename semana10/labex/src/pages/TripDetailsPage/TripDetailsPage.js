import React from 'react';
import { useHistory, useParams } from 'react-router';
import { goBack } from '../../routes/coordinator';
import useRequestDetail from '../../hooks/useRequestDetail';
import {BASE_URL } from '../../constants/url';


export default function TripDetailsPage() {
    const history = useHistory()
    
    const params = useParams()
    console.log(params)

    const header =  {
        auth: localStorage.getItem("token")
    }

    console.log(header)
    // useRequestDetail(`${BASE_URL}/trip/${params.id}`, auth)
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

