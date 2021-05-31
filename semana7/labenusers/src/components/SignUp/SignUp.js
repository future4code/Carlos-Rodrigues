import React from 'react';
import {Container, Inputs, Main, Title} from './styled';


export default class SignUp extends React.Component {

    render() {

        return (
        <Main>
            <Title>
                <h1> Área de cadastro</h1>
            </Title>
            <Container>
                                        
            <label>Nome do usuário:</label>
            <input
                type="text"
                value={this.props.inputName}
                onChange={this.props.onChangeName}
            />  
            <br/>
            <label>E-mail:</label>
            <input 
                type="email"
                value={this.props.inputEmail}
                onChange={this.props.onChangeEmail}
            />

            <br/>
            <Inputs>
            <button onClick={this.props.createUsers}>Enviar</button>
            <br/>
            <button onClick={this.props.onClickUsersList}>Lista de usuários</button>
            </Inputs>
            </Container>
            </Main>            
        )
    }
}

