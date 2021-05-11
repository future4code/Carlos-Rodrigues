import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const AppContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  
`

const FormContainer = styled.div `
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 180px;
  width: 240px;
  border: 1px solid gray;
  margin: 20px;
  padding: 30px;
`
const arrayPosts = [
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
]
class App extends React.Component {
  state = {
    posts: arrayPosts,
    userName: "",
    userPhoto: "",
    postPhoto: ""
  };

  changeUsername = (event) => {
    this.setState({userName: event.target.value})
  }

  changeUserPhoto = (event) => {
    this.setState({userPhoto: event.target.value})
  }

  changePostPhoto = (event) => {
    this.setState({postPhoto: event.target.value})
  }

  addPost = () => {
    const newPost = {
      nomeUsuario: this.state.userName,
      fotoUsuario: this.state.userPhoto,
      fotoPost: this.state.postPhoto
    }

    this.setState({posts: [...this.state.posts, newPost],
      userName: "",
      userPhoto:"",
      postPhoto:""
    })

  }

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
      <AppContainer>
        <FormContainer>
          <input placeholder={"Nome do Usuário"} value = {this.state.UserName} onChange={this.changeUsername}
          />
          <input value = {this.state.UserPhoto} placeholder={"Foto do Usuário"} onChange={this.changeUserPhoto}
          />
          <input value = {this.state.PostPhoto} placeholder={"Foto do Post"} onChange={this.changePostPhoto}
          />
          <button onClick={this.addPost}>Criar Post</button>
        </FormContainer>
          {feed}
      </AppContainer>     
    )
  }
}



export default App;
