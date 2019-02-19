import React, {Component} from 'react';
import CamperTable from './components/CamperTable';
import './App.css';

class App extends Component {
  render() {
    const mockData = [{username: 'tien', recent: 100, allTime: 923}];
    return (
      <div className="App">
        <header className="App-header">
          <h1>Camper Leaderboard</h1>
        </header>
        <section>
          <CamperTable campers={mockData} />
        </section>
      </div>
    );
  }
}

export default App;
