import React from 'react';

export default function ApplicationFormPage() {

    return (
        <div>
            <h1>ApplicationFormPage</h1>
            <input placeholder="Nome" type="name"/>
            <input placeholder="Idade" type="number"/>
            <input placeholder="Profissão" type="text"/>
            <input placeholder="Texto de candidatura"/>
            <select>
                <option>País</option>
            </select>
            <button>Inscrever</button>
            <hr/>
        </div>
    )
}