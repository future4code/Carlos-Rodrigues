import './App.css';
import React from 'react';
import Home from './components/Home/Home'
import AddMusic from './components/AddMusic/AddMusic';
import CreatePlaylist from './components/CreatePlaylist/CreatePlaylist';
import Playlists from './components/Playlists/Playlists';
import axios from 'axios';

const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

export default class App extends React.Component {
  state = {
    page: "",
    playlistName: "" ,
    playlists: [],
    musicName: "",
    musicArtist: "",
    musicUrl: "",
    id:"",
    musics: [],
    showPlaylist: false
  }

  componentDidMount() {
    this.getPlaylists()
  }
// Funções para trocar de página

  onClickHome = () => {
    this.setState({page: ""})
  }
  onClickCreatePlaylist = () => {
    this.setState({page: "CreatePlaylist"})
  }
  onClickPlaylists = () => {
    this.setState({page: "Playlists"})
  }
  onClickEdit = (e) => {
    this.setState({page: "AddMusic"})
    console.log(this.state.page)
    this.setState({id: e.target.value})
  }
// Inputs controlados
  onChangePlaylistName = (e) => {
    this.setState({playlistName: e.target.value})
  }
  onChangeMusicName = (e) => {
    this.setState({musicName: e.target.value})
  }
  onChangeMusicArtist = (e) => {
    this.setState({musicArtist: e.target.value})
  }
  onChangeMusicUrl = (e) => {
    this.setState({musicUrl: e.target.value})
  }
// Métodos da API
  getPlaylists = () => {
    const header = {
      headers: {
        Authorization: "carlos-rodrigues-paiva"
      }
    }
    axios.get(BASE_URL, header)
      .then((res) => {
        this.setState({playlists: res.data.result.list})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  createPlaylist = () => {
    const header = {
      headers: {
        Authorization: "carlos-rodrigues-paiva"
      }
    }
    const body = {
      name: this.state.playlistName
    }
    if (this.state.playlistName !== "") {
      axios.post(BASE_URL, body, header)
      .then(() => {
        this.getPlaylists()
        this.setState({page: "Playlists"})    
      })
      .catch((err) => {
        if (err.response.data.message === "There already is a playlist with a similiar name.") {
          alert("Já existe uma playlist com nome similar.")
        }   
      })  
    }
    else {
      alert("Insira um nome para playlist")
    }
  }

  deletePlaylist = (e) => {
    const id = e.target.value

    const header = {
      headers: {
        Authorization: "carlos-rodrigues-paiva"
      }
    }
    axios.delete(`${BASE_URL}/${id}`, header)
    .then(() => {
      this.getPlaylists()
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }

  addMusic = () => {
    const id = this.state.id
    const header = {
      headers: {
        Authorization: "carlos-rodrigues-paiva"
      }
    }
    const body = {
      name: this.state.musicName,
      artist: this.state.musicArtist,
      url: this.state.musicUrl
    }

    axios.post(`${BASE_URL}/${id}/tracks`, body, header)
    .then((res) =>{
      this.getPlaylists()
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err.message)
      console.log(this.state.id, id)
    })
  }

  getPlaylistMusics = (e) => {
    const id = e.target.value
    console.log(id)
    const header = {
      headers: {
        Authorization: "carlos-rodrigues-paiva"
      }
    }

    axios.get(`${BASE_URL}/${id}/tracks`, header)
  }


  render() {

    switch (this.state.page) {
      case '':
        return <Home
          onClickCreatePlaylist={this.onClickCreatePlaylist}
          onClickPlaylists={this.onClickPlaylists}
          />
          case 'CreatePlaylist':
            return <CreatePlaylist
            onClickHome={this.onClickHome}
            onClickPlaylists={this.onClickPlaylists}
            onChangePlaylistName={this.onChangePlaylistName}
            createPlaylist={this.createPlaylist}
            playlistName={this.state.playlistName}
            playlists={this.state.playlists}
        />
      case 'Playlists':
        return <Playlists
          onClickCreatePlaylist={this.onClickCreatePlaylist}
          onClickHome={this.onClickHome}
          playlists={this.state.playlists}
          deletePlaylist={this.deletePlaylist}
          onClickEdit={this.onClickEdit}
          getPlaylistMusics={this.getPlaylistMusics}
          showPlaylist={this.state.showPlaylist}
        />
      case 'AddMusic':
        return <AddMusic
          onClickCreatePlaylist={this.onClickCreatePlaylist}
          id={this.state.id}
          addMusic={this.addMusic}
          onChangeMusicName={this.onChangeMusicName}
          onChangeMusicArtist={this.onChangeMusicArtist}
          onChangeMusicUrl={this.onChangeMusicUrl}
        />

    }
    return (
      <div>
      </div>
    )
  }
}



