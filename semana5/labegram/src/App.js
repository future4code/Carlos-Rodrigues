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
  state = {
    posts: [
      {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150"
      },

      {
      nomeUsuario: "zezinho",
      fotoUsuario: "https://picsum.photos/40/40",
      fotoPost: "https://picsum.photos/210/140"
      },

      {
      nomeUsuario: "luizinho",
      fotoUsuario: "https://picsum.photos/30/30",
      fotoPost: "https://picsum.photos/200/140"
      }
    ],
    
    valorNomeUsuario: "",
    valorFotoUsuario: "",
    valorFotoPost: ""
  };
  render() {
    const feed = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario = {post.nomeUsuario}
          fotoUsuario = {post.fotoUsuario}
          fotoPost = {post.fotoPost}
          />  
      );
    })
    return (
      <div>
        <div>
          <input value = {this.state.valorNomeUsuario}
          />
          <input value = {this.state.valorFotoUsuario}
          />
          <input value = {this.state.valorFotoPost}
          />
        </div>
      

      <MainContainer>
        {feed}
      </MainContainer>
      </div>
      
      
    )
  }
}



export default App;
