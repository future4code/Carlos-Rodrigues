import React from 'react';
import {Header, Body, Nav, Container, Title, Content, Footer} from './styled'

export default class App extends React.Component {

  render() {

    return (
        <div>
            <Header>
                <h1>Header</h1>
            </Header>

            <Body>
                <Nav>
                    <input placeholder="Buscar playlist"/>
                    
                    <h3>Início</h3>
                    <h3 onClick={this.props.onClickCreatePlaylist}>Criar Playlist</h3>
                    <h3 onClick={this.props.onClickPlaylists}>Suas Playlists</h3>
                </Nav>
                
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