import React from 'react';
import { useHistory } from 'react-router';
import { goBack } from '../../routes/coordinator';

export default function ApplicationFormPage() {
    const history = useHistory()
    
    return (
        <div>
            <button onClick={() => goBack(history)}>Voltar</button>
            <h1>ApplicationFormPage</h1>
            <input placeholder="Nome" type="name"/>
            <input placeholder="Idade" type="number"/>
            <input placeholder="Profissão" type="text"/>
            <input placeholder="Texto de candidatura"/>
            <select>
                <option>País</option>
            </select>
            <button>Enviar</button>
            <hr/>
        </div>
    )
}