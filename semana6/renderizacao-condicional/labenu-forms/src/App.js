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
    const renderizaPagina =() => {
      if (this.state.etapa === 1) {
        return <Etapa1 proximaEtapa={this.proximaEtapa}/>
      } else if (this.state.etapa === 2) {
        return <Etapa2 proximaEtapa={this.proximaEtapa}/>
      } else if (this.state.etapa === 3) {
        return <Etapa3 proximaEtapa={this.proximaEtapa}/>
      } else if (this.state.etapa === 4) {
        return <EtapaFinal proximaEtapa={this.proximaEtapa}/>
      }
    }
    
    return (
      <div className="App">
        {renderizaPagina()}   
      </div>

      
    )
  }
}
