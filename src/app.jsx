import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Semaforo from './semaforo.jsx';

class App extends React.Component {	
  render() {
    return (
      <div className="App">
        <Semaforo />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
