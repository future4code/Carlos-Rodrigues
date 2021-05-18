import React from 'react';
import {Container, Inputs, Title} from './styled';


export default class SignUp extends React.Component {

    render() {

        return (
            <Container>
                <Title>
                    <h1> Área de cadastro</h1>
                </Title>

                <Inputs>
                    <label>Nome do usuário:</label>
                    <input 
                    value={this.props.inputName}
                    onChange={this.props.onChangeName}
                    />
                    
                    <label>E-mail:</label>
                    <input 
                    value={this.props.inputEmail}
                    onChange={this.props.onChangeEmail}
                    />
                    <br/>

                    <button onClick={this.props.createUsers}>Enviar</button>
                    <br/>
                    <button onClick={this.props.onClickUserList}>Lista de usuários</button>
                </Inputs>

            </Container>            

        )
    }
}

