import './App.css';
import React from 'react';
import Home from './components/Home/Home'
import AddMusic from './components/AddMusic/AddMusic';
import CreatePlaylist from './components/CreatePlaylist/CreatePlaylist';
import Playlists from './components/Playlists/Playlists';

export default class App extends React.Component {

  render() {

    return (
      <div>
        <Home/>
        <CreatePlaylist/>
        <AddMusic/>
        <Playlists/>
      </div>
    )
  }
}



