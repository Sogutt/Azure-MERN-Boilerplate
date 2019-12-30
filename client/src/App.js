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
    console.log("componentDidMount success")
    axios.get('/api/data')
      .then(res => {
        console.log("data recieved: ", res.data);
        this.setState({ bestShows: res.data[0] });
      })
      .catch(alert);
  }


  render() {
    console.log("render bestShows: ", this.state.bestShows)
    return (
      <div>
        azure-mern-demo
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
