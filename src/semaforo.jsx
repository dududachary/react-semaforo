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
  
  controlaCiclo = (ciclo) => {
    var contador;
    
    (ciclo < 3) ? contador = parseInt(ciclo) + 1 : contador = 1;
    
    this.setState({
      ciclo: contador,
    });
    
  }
  
  controlaSemaforo = (ciclo) => {
    this.controlaCiclo(ciclo);
    switch (ciclo) {
      case 1:
        this.setState({
          estadoLamapadaVermelha: '1',
          estadoLampadaAmarela: '0',
          estadoLampadaVerde: '0'
        });
      break;
      
      case 2:
        this.setState({
          estadoLamapadaVermelha: '0',
          estadoLampadaAmarela: '1',
          estadoLampadaVerde: '0'
        });
      break;
      
      case 3:
        this.setState({
          estadoLamapadaVermelha: '0',
          estadoLampadaAmarela: '0',
          estadoLampadaVerde: '1'
        });
      break;
    }
  }
  
  render () {
    return (
      <div>
        <Lampada cor='vermelho' sequencia='1' estado={this.state.estadoLamapadaVermelha}/>
        <Lampada cor='amarelo' sequencia='2' estado={this.state.estadoLampadaAmarela}/>
        <Lampada cor='verde' sequencia='3' estado={this.state.estadoLampadaVerde}/>
        <Controlador handleClick={this.controlaSemaforo} ciclo={this.state.ciclo}/>
      </div>
    )
  }
}

export default Semaforo;