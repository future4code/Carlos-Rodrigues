import React from 'react';
import styled from 'styled-components'

export default class Etapa3 extends React.Component {

    render() {

        return (
            <div className="App">
                <div>
                    <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3> 
                </div>
                
                <div>
                    <p>5. Por que você não terminou um curso de graduação?</p>
                    <input></input>
                </div>

                <div>
                    <p>6. Você fez algum curso complementar?</p>
                    <select>
                        <option>Nenhum</option>
                        <option>Curso de inglês</option>
                        <option>Curso técnico</option>
                    </select>
                </div>
                <br/>
                <button onClick={this.props.proximaEtapa}>Próxima etapa</button>          
            </div>
        )
    }
}