import React from 'react';
import {Header, Body, Nav, Container, Title, Content, Footer} from './styled'

export default class App extends React.Component {

  render() {
      const namePlaylist = this.props.playlists.map((playlist) => {
          return <div>
                    <p>{playlist.name}</p>
                    <button value={playlist.id} onClick={this.props.getPlaylistMusics}>Detalhes</button>

                    <button value={playlist.id} onClick={this.props.onClickEdit}>Editar Playlist</button>

                    <button value={playlist.id} onClick={this.props.deletePlaylist}>x</button>
                </div>   
      })
    return (
        <div>
            <Header>
                <h1>Header</h1>
            </Header>

            <Body>
                <Nav>
                    <input placeholder="Buscar playlist"/>
                    <h3 onClick={this.props.onClickHome}>Início</h3>
                    <h3 onClick={this.props.onClickCreatePlaylist} >Criar Playlist</h3>
                    <h3>Suas Playlists</h3>
                </Nav>
                
                <Container>
                    <Title>
                        <h2>Suas playlists</h2>
                    </Title>
                    <Content>
                        <div>
                            {namePlaylist}
                        </div>
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