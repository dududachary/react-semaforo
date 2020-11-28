import React from "react";
import ReactDOM from "react-dom";
import "./app.css";

class Controlador extends React.Component {
  render () {
    return (
      <button onClick={ () => {this.props.handleClick(this.props.ciclo)} }>
        Controlador
      </button>
    )
  }
}

export default Controlador;