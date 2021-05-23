import React from 'react';
import {Header, Body, Nav, Container, Title, Content, Footer, HeaderTitle, Img, NavOptions, Home, Create, Playlist} from './styled'
import labefy from '../img/labefy.png'


export default class App extends React.Component {

  render() {
      console.log(this.props.playlistDetail)
      const playlist = this.props.playlistDetail.map((playlist) => {
          return <div>
              <p><strong>Música:</strong> {playlist.name}</p>
              <p><strong>Artista:</strong> {playlist.artist}</p>
              <p>   <audio controls>
                    <source src={playlist.url} type="audio/ogg"/>
                    <source src={playlist.url} type="audio/mpeg"/>
                    </audio>
                </p>
          </div>
      })
    return (
        <div>
             <Header>
                <Img src={labefy}/>
                <HeaderTitle>Labefy</HeaderTitle>
            </Header>

            <Body>
                <Nav>
                    <NavOptions>
                    <input placeholder="Buscar playlist"/>
                    <Home onClick={this.props.onClickHome}>Início</Home>
                    <Create onClick={this.props.onClickCreatePlaylist}>Criar Playlist</Create>
                    <Playlist onClick={this.props.onClickPlaylists}>Suas Playlists</Playlist> 
                    </NavOptions>
                </Nav>
                
                <Container>
                    <Content>
                        <h2>Suas músicas.</h2>
                        {playlist}
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