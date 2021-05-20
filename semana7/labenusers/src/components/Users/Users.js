import React from 'react';
import {Container, Title, Home, List, Buttons, Main } from './styled';

export default class Users extends React.Component {
  
    render() {
        console.log(this.props.users)
        const namesList = this.props.users.map((name) => {
            return <List key={name.id}>
                    <div><li>{name.name}</li></div>
                    
                    <Buttons>
                        <button value={name.id} onClick={this.props.onClickUserDetail} >Detalhes do usuário</button>
                        <button value={name.id} onClick={this.props.deleteUser}>X</button>
                    </Buttons>
                    </List>
          })
        return (
            <Main>
            <Container>
                <Title>
                    <h1>Tela de usuários</h1>
                </Title>
                    {namesList}                         
                <Home>
                    <button onClick={this.props.onClickBack}>Voltar a página principal</button>
                </Home>
            </Container>
            </Main>
        )
    }
}