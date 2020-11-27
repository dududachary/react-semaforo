import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Lampada from './lampada.jsx';

class Semaforo extends React.Component {
  render () {
    return (
      <div>
        <Lampada cor='vermelho' estado='0'/>
        <Lampada cor='amarelo' estado='0'/>
        <Lampada cor='verde' estado='0'/>
      </div>
    )
  }
}

export default Semaforo;