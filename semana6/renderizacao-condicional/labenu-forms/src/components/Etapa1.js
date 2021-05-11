import React from 'react';
import styled from 'styled-components';
import Etapa2 from './Etapa2';

export default class Etapa1 extends React.Component {
    state = {
        ensino: ""
    };

    nivelEnsino = (event) => {
        this.setState({
            ensino: event.target.value
        })
    }

    render() {

        return (
            <div className="App">
                <div>
                    <h3>ETAPA 1 - DADOS GERAIS</h3>
                </div>

                <div>
                    <p>1. Qual o seu nome?</p>
                    <input></input>
                </div>

                <div>
                    <p>2. Qual a sua idade?</p>
                    <input></input>
                </div>

                <div>
                    <p>3. Qual seu e-mail?</p>
                    <input></input>
                </div>

                <div>
                    <p>4. Qual sua escolaridade?</p>
                    <select onChange={this.nivelEnsino}>
                        <option value="mi">Ensino médio incompleto</option>
                        <option value="mc">Ensino médio completo</option>
                        <option value="si">Ensino superior incompleto</option>
                        <option value="sc">Ensino superior completo</option>
                    </select>
                </div>
                <br/>
                <button onClick={this.props.proximaEtapa}>Próxima etapa</button>
            </div>
        )
    }
}