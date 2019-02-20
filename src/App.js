import React, {Component} from 'react';
import {CamperTableContainer, SortingSwitchContainer} from './containers';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Camper Leaderboard</h1>
        </header>
        <Container>
          <SortingSwitchContainer />
          <Row>
            <CamperTableContainer />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
