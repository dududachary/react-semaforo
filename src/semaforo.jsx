import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Lampada from './lampada.jsx';

class Semaforo extends React.Component {
  render () {
    return (
      <div>
        <Lampada cor='Vermelho'/>
        <Lampada cor='Amarelo'/>
        <Lampada cor='Verde'/>
      </div>
    )
  }
}

export default Semaforo;