import React from 'react';
import {MainContainer, UsersContainer, Buttons, Edit} from './styled'

export  default class UserDetail extends React.Component {

    render() {
        const showPage = () => {
            if (this.props.edit === true) {
                return <MainContainer>
                    <h1> Detalhes do usuário</h1>
                    <UsersContainer>
                        <div>
                            <h3>Nome</h3>
                            <li>{this.props.usersDetail.name}</li>
                        </div>
                        <div>
                            <h3>E-mail</h3>
                            {this.props.usersDetail.email}
                            
                        </div>
                    </UsersContainer>

                    <input placeholder="Novo nome" onChange={this.props.onChangeName} ></input>
                    <br/>
                    <input placeholder="Novo e-mail" onChange={this.props.onChangeEmail} ></input>
                     <br/>
                     
                    <Edit>
                        <button value={this.props.usersDetail.id} onClick={this.props.onClickSave}>Salvar</button>
                    </Edit>   
                    <Buttons>
                        <button onClick={this.props.onClickUsersList} >Voltar para página anterior</button>
                    </Buttons>
                </MainContainer>     
            } else if (this.props.edit === false) {
                return <MainContainer>
                    <h1> Detalhes do usuário</h1>
                    <UsersContainer>
                        <div>
                            <h3>Nome</h3>
                            <li>{this.props.usersDetail.name}</li>
                        </div>
                        <div>
                            <h3>E-mail</h3>
                            {this.props.usersDetail.email}
                            
                        </div>
                     <Edit>
                        <button onClick={this.props.onClickEdit}>Editar Usuário</button>
                    </Edit>   
                    </UsersContainer>
                    <Buttons>
                        <button onClick={this.props.onClickUsersList} >Voltar para página anterior</button>
                    </Buttons>
                </MainContainer>
            }
        }
            
        
        return (
            <div>
                {showPage()}
            </div>
        )
    }
}
