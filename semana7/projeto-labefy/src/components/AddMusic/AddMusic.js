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
                    <h3>Criar Playlist</h3>
                    <h3>Suas Playlists</h3> 
                </Nav>
                
                <Container>
                    <Title>
                        Container
                    </Title>
                    <Content>
                        <input placeholder="Nome da música"
                        onChange={this.props.onChangeMusicName}
                        />
                        <input placeholder="Nome do artista"
                        onChange={this.props.onChangeMusicArtist}
                        />
                        <input placeholder="Url da música"
                        onChange={this.props.onChangeMusicUrl}
                        />
                        <button onClick={this.props.addMusic}>Adicionar</button>
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