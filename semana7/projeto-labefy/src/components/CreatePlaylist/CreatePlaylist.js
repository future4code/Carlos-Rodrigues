import React from 'react';
import {Header, Body, Nav, Container, Title, Content, Footer, Img, Create, HeaderTitle, NavOptions, Home, Playlist, ContainerCreate, Button, Input} from './styled'
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
                        <h2>Crie as melhores playlists!</h2>
                    </Title>
                    <Content>
                        <ContainerCreate>

                        <p><strong>Nome da Playlist:</strong></p>
                            <input 
                            value={this.props.playlistName}
                            onChange={this.props.onChangePlaylistName}
                            placeholder="Digite o nome da playlist"
                            />
                            <Button onClick={this.props.createPlaylist}>Criar!</Button>
                        
                        </ContainerCreate>
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