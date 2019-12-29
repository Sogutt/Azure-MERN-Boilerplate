/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/
import React from "react";
import axios from 'axios';
import "./index.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bestShows: []
    };
  }
/*
  componentDidMount() { //dev
    axios.get('http://localhost:5000/api/data')
      .then(res => {
        console.log("data recieved: ", res.data[0]);
        this.setState({ bestShows: res.data[0] });
      })
      .catch(alert);
  }
*/
  
      componentDidMount() { //prod
          axios.get('/api/data')
              .then(res => {
                  console.log("data recieved: ", res.data[0]);
                  this.setState({ bestShows: res.data[0] });
              })
              .catch(alert);
      }
  

  render() {
    return (
      <div>
        <ul>
          {
            Object.keys(this.state.bestShows).map((cur, idx) => (
              <li>{cur} - {this.state.bestShows[cur]} </li>
            ))
          }

        </ul>
      </div>
    );
  }
}

//const rootElement = document.getElementById("root");
//ReactDOM.render(<WorldMap />, rootElement);


export default App;
