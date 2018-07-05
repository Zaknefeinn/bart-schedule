import React, { Component } from 'react';
import { getStations, getSchedule } from './components/utils/getSchedule';
import moment from 'moment';
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
      departOrArrive: 'depart',
      time: 'now',
      date: moment().format('MM/DD/YYYY')
    };
  }
  componentDidMount() {
    //populate available stations state array
    getStations().then(res =>
      this.setState({ stations: res.data.root.stations.station })
    );
  }

  handleOptionChange = (key, abbr) => {
    this.setState({ [key]: abbr });
  };

  handleSubmit = e => {
    //commit search
    const { origin, destination, departOrArrive, date, time } = this.state;
    e.preventDefault();
    getSchedule(departOrArrive, origin, destination, date, time).then(res =>
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
          date={this.state.date}
        />
        <Results schedule={this.state.schedule} />
      </Container>
    );
  }
}

export default App;
