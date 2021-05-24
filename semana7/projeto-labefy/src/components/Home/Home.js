import React from 'react';
import {Header, Body, Nav, Container, Title, Content, Footer, NavOptions, Home, Create, Playlist, Img, HeaderTitle, Input} from './styled'
import labefy from '../img/labefy.png'
import { PlaylistInput } from '../CreatePlaylist/styled';

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
                    <PlaylistInput placeholder="Buscar playlist"/>
                </Input>
                
                <NavOptions>
                    <Home>Início</Home>
                    <Create onClick={this.props.onClickCreatePlaylist}>Criar Playlist</Create>
                    <Playlist onClick={this.props.onClickPlaylists}>Suas Playlists</Playlist>
                </NavOptions>
            </Nav>

            <Body>
                <Container>
                    <Content>
                    <Title>
                        <h1>Bem vindo</h1>
                    </Title>
                        <h3>Sejam bem vindos ao Labefy, sua plataforma para criar playlists e ouvir músicas.</h3>
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