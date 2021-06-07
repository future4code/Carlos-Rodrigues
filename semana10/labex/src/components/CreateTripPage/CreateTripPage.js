import React from 'react';

export default function CreateTripPage() {

    return (
        <div>
            <h1>CreateTripPage</h1>
            <input placeholder="Nome da viagem" type="text"/>
            <input placeholder="Destino (option ou input?)" type="text"/>
            <input placeholder="Data de partida" type="date"/>
            <input placeholder="Duração em dias" type="number"/>
            <input placeholder="Descrição" type="text"/>
            <button>Criar</button>
            <hr/>
        </div>
    )
}