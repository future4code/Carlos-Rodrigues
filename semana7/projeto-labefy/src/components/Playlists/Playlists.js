import React from 'react';
import {Header, Body, Nav, Container, Title, Content, Footer, Img, HeaderTitle, NavOptions, Home, Create, Playlist, ContainerPlaylist, ButtonsPlaylist, Buttons, Input} from './styled'
import labefy from '../img/labefy.png'

export default class App extends React.Component {

  render() {
      const namePlaylist = this.props.playlists.map((playlist) => {
          return <ContainerPlaylist>
                    <p>{playlist.name}</p>
                    <ButtonsPlaylist>
                        <Buttons value={playlist.id} onClick={this.props.getPlaylistMusics}>Detalhes</Buttons>

                        <Buttons value={playlist.id} onClick={this.props.onClickEdit}>Inserir Músicas</Buttons>

                        <Buttons value={playlist.id} onClick={this.props.deletePlaylist}>X</Buttons>
                    </ButtonsPlaylist>
                </ContainerPlaylist>   
      })
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
                        <h2>Suas playlists</h2>
                    </Title>
                    <Content>
                        {namePlaylist}
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