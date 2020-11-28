import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

class Lampada extends React.Component {
  render () {
    return (
      <div class={this.props.cor}>
       <p>Lâmpada {this.props.estado}</p>
      </div>
    )
  }
}

export default Lampada;