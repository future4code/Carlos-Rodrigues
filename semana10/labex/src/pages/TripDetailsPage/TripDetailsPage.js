import React from 'react';
import { useHistory } from 'react-router';
import { goBack } from '../../routes/coordinator';


export default function TripDetailsPage() {
    const history = useHistory()
    
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

