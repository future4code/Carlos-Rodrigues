import React from 'react';
import { List, Title } from './styled';

export default class Users extends React.Component {

    render() {
        return (
            <div>
                <Title>
                    <h1>Tela de usuários</h1>
                </Title>

                <List>
                    <li>Nome</li>
                    <li>Nome</li>
                    <li>Nome</li>
                    <li>Nome</li>  
                    <br/>         
                    <button onClick={this.props.onClickBack}>Voltar a página principal</button>
                </List>

            </div>
        )
    }

}