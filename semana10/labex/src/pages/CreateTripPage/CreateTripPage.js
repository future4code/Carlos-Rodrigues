import React from 'react';
import { useHistory } from 'react-router';
import { goBack } from '../../routes/coordinator';

export default function CreateTripPage() {
    const history = useHistory()

    const onClickCreate = (e) => {
        e.preventDefault()
    }
    
    return (
        <div>
            <button onClick={() => goBack(history)}>Voltar</button>

            <form >
                <h1>CreateTripPage</h1>
                <input 
                    placeholder="Nome da viagem" 
                    type="text"
                    pattern={"^[a-záàâãéèêíïóôõöúçñ ]{5,}$"}
                    required
                />
                <select onSubmit={onClickCreate}>
                    <option>Qual o planeta de destino ?</option>
                    <option>Júpiter</option>
                    <option>Marte</option>
                    <option>Mercúrio</option>
                    <option>Netuno</option>
                    <option>Plutão</option>
                    <option>Saturno</option>
                    <option>Urano</option>
                    <option>Vênus</option>
                </select>
                <input 
                    placeholder="Data de partida" 
                    type="date"
                    required
                />
                <input
                    placeholder="Duração em dias"
                    type="number"
                    required
                    min={50}
                />
                <input
                    placeholder="Descrição"
                    type="text"
                    required
                    pattern={"^.{30,}"}
                />
                <button>Criar</button>
            </form>
            <hr/>
        </div>
    )
}