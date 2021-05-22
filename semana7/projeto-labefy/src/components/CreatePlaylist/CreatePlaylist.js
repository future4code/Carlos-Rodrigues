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
                    <h3 onClick={this.props.onClickHome}>Início</h3>
                    <h3>Criar Playlist</h3>
                    <h3 onClick={this.props.onClickPlaylists}>Suas Playlists</h3>
                </Nav>
                
                <Container>
                    <Title>
                        <h2>Crie a sua Playlist</h2>
                    </Title>
                    <Content>
                        <p>Nome da Playlist:
                            <input 
                            value={this.props.playlistName}
                            onChange={this.props.onChangePlaylistName}
                            />
                            <button onClick={this.props.createPlaylist}>Criar!</button>
                        </p>
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