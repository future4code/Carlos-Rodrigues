import React from 'react';
import {Header, Body, Nav, NavOptions, Container, Title, Content, Footer, Home, Create, Playlist, HeaderTitle, Img, Input, List} from './styled'
import labefy from '../img/labefy.png';
import { Button, PlaylistInput } from '../CreatePlaylist/styled';

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
                    <Home onClick={this.props.onClickHome}>Início</Home>
                    <Create onClick={this.props.onClickCreatePlaylist}>Criar Playlist</Create>
                    <Playlist onClick={this.props.onClickPlaylists}>Suas Playlists</Playlist>
                </NavOptions>
            </Nav>

            <Body>
                <Container>
                    <Content>
                    <Title>
                        <h1>Adicione suas músicas Favoritas !</h1>
                    </Title>
                    <List>
                        <PlaylistInput placeholder="Nome da música"
                        onChange={this.props.onChangeMusicName}
                        value={this.props.musicName}
                        />
                        <PlaylistInput placeholder="Nome do artista"
                        onChange={this.props.onChangeMusicArtist}
                        value={this.props.musicArtist}
                        />
                        <PlaylistInput placeholder="Url da música"
                        onChange={this.props.onChangeMusicUrl}
                        value={this.props.musicUrl}
                        />
                        <Button onClick={this.props.addMusic}>Adicionar</Button>
                    </List>
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