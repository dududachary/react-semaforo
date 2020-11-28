import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Lampada from './lampada.jsx';
import Controlador from './controlador.jsx';

class Semaforo extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
        ciclo: '1',
        estadoLamapadaVermelha: '0',
        estadoLampadaAmarela: '0',
        estadoLampadaVerde: '0',
      };
  }
  
  render () {
    return (
      <div>
        <Lampada cor='vermelho' sequencia='1' estado={this.state.estadoLamapadaVermelha}/>
        <Lampada cor='amarelo' sequencia='2' estado={this.state.estadoLampadaAmarela}/>
        <Lampada cor='verde' sequencia='3' estado={this.state.estadoLampadaVerde}/>
        <Controlador />
      </div>
    )
  }
}

export default Semaforo;