import React from 'react';
import './App.css';
import Axios from 'axios';
import PlayerList from './components/PlayerList';
import ChoosePlayerForm from './components/ChoosePlayerForm';

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount = () => {
    Axios.get(`http://localhost:5000/api/players`)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log('no data: ', err));
  };

  render() {
    console.log("here's the data: App.js ", this.state.data);
    return (
      <div className='App'>
        <h1>Player List (console.log's info from ls)</h1>
        <ChoosePlayerForm data={this.state.data} />
        <PlayerList data={this.state.data} />
      </div>
    );
  }
}

export default App;
