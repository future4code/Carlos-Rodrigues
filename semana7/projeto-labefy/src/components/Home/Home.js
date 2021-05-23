import React from 'react';
import {Header, Body, Nav, Container, Title, Content, Footer, NavOptions, Home, Create, Playlist, Img, HeaderTitle, Input} from './styled'
import labefy from '../img/labefy.png'

export default class App extends React.Component {

  render() {

    return (
        <div>
             <Header>
                <Img src={labefy}/>
                <HeaderTitle>Labefy</HeaderTitle>
            </Header>
            <Nav>
                <Input>
                    <input placeholder="Buscar playlist"/>
                </Input>
                
                <NavOptions>
                    <Home>Início</Home>
                    <Create onClick={this.props.onClickCreatePlaylist}>Criar Playlist</Create>
                    <Playlist onClick={this.props.onClickPlaylists}>Suas Playlists</Playlist>
                </NavOptions>
            </Nav>

            <Body>
                <Container>
                    <Title>
                        <h2>Bem vindo</h2>
                    </Title>
                    <Content>
                        Bem vindo
                    </Content>
                </Container>
            </Body>
            
            <Footer>
                Footer
            </Footer>
        </div>
        )
    }
}