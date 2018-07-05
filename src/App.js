import React, { Component } from 'react';
import { getStations, getSchedule } from './components/utils/getSchedule';
import Search from './components/Search';
import Results from './components/Results';
import { Container } from './components/Styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: [],
      origin: '',
      destination: '',
      schedule: [],
      departOrArrive: 'depart'
    };
  }
  componentDidMount() {
    getStations().then(res =>
      this.setState({ stations: res.data.root.stations.station })
    );
  }

  handleOptionChange = (key, abbr) => {
    this.setState({ [key]: abbr });
  };
  handleSubmit = e => {
    const { origin, destination, departOrArrive } = this.state;
    e.preventDefault();
    getSchedule(departOrArrive, origin, destination).then(res =>
      this.setState({ schedule: res.data.root.schedule.request.trip })
    );
  };

  render() {
    return (
      <Container>
        <Search
          stations={this.state.stations}
          handleOptionChange={(key, abbr) => this.handleOptionChange(key, abbr)}
          handleSubmit={this.handleSubmit}
          selected={this.state.departOrArrive}
        />
        <Results schedule={this.state.schedule} />
      </Container>
    );
  }
}

export default App;
