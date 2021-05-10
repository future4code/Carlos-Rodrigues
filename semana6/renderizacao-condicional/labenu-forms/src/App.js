import './App.css';
import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import EtapaFinal from './components/EtapaFinal';

export default class App extends React.Component {

  state = {
    etapa: 1
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />

      case 2:
        return <Etapa2/>
      case 3:
        return <Etapa3/>
      case 4:
        return <EtapaFinal/>
    }

  }

  proximaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return this.setState({etapa: 2})

      case 2:
        return this.setState({etapa: 3})

      case 3:
        return this.setState({etapa: 4})
    }
  }

  render() {

    return (
      <div className="App">
        {this.renderizaEtapa()}
        <br/>
        <button onClick={this.proximaEtapa}>Próxima etapa</button>
      </div>

      
    )
  }
}
