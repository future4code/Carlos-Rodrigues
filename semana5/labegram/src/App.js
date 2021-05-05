import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post 
          nomeUsuario = {'zezinho'}
          fotoUsuario = {'https://picsum.photos/40/40'}
          fotoPost = {'https://picsum.photos/210/140'}
          />
          <Post
            nomeUsuario = {'luizinho'}
            fotoUsuario = {'https://picsum.photos/30/30'}
            fotoPost = {'https://picsum.photos/200/140'}
          />
      </MainContainer>
    );
  }
}



export default App;
