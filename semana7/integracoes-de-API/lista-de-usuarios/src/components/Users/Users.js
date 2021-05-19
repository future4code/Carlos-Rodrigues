import React from 'react';
import {List, Title, Home } from './styled';

export default class Users extends React.Component {
  
    render() {
        const namesList = this.props.users.map((name) => {
            return <List key={name.id}>
                    <div><li>{name.name}</li></div>
                    
                    <div><button value={name.id} onClick={this.props.deleteUser}>X</button></div>
                    </List>
          })
        return (
            <div>
                <Title>
                    <h1>Tela de usuários</h1>
                </Title>

                <div>
                    <div>{namesList}</div>                         
                </div>
                <Home>
                    <button onClick={this.props.onClickBack}>Voltar a página principal</button>
                </Home>
            </div>
        )
    }
}