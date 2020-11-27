import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

class App extends React.Component {	
  render() {
    return (
      <div className="App">
        Semáforo
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
