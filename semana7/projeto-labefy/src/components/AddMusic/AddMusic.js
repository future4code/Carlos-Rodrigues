import React from 'react';
import {Header, Body, Nav, NavOptions, Container, Title, Content, Footer, Home, Create, Playlist, HeaderTitle, Img, Input} from './styled'
import labefy from '../img/labefy.png';

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
                    <Home onClick={this.props.onClickHome}>Início</Home>
                    <Create onClick={this.props.onClickCreatePlaylist}>Criar Playlist</Create>
                    <Playlist onClick={this.props.onClickPlaylists}>Suas Playlists</Playlist>
                </NavOptions>
            </Nav>

            <Body>
                <Container>
                    <Title>
                        Container
                    </Title>
                    <Content>
                        <input placeholder="Nome da música"
                        onChange={this.props.onChangeMusicName}
                        value={this.props.musicName}
                        />
                        <input placeholder="Nome do artista"
                        onChange={this.props.onChangeMusicArtist}
                        value={this.props.musicArtist}
                        />
                        <input placeholder="Url da música"
                        onChange={this.props.onChangeMusicUrl}
                        value={this.props.musicUrl}
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