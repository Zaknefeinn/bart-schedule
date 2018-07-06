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
      date: moment(),
      fetching: false
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
    e.preventDefault();
    //commence search
    const { origin, stations, destination, departOrArrive, time } = this.state;
    const date = moment(this.state.date).format('MM/DD/YYYY');
    if ((origin !== '') & (destination !== '')) {
      getSchedule(
        departOrArrive,
        stations[origin].abbr,
        stations[destination].abbr,
        date,
        time
      ).then(res =>
        this.setState({
          schedule: res.data.root.schedule.request.trip,
          fetching: true
        })
      );
    } else {
      alert('Please choose a departing and arrival station');
    }
  };

  render() {
    const {
      stations,
      departOrArrive,
      date,
      destination,
      origin,
      fetching
    } = this.state;
    return (
      <Container>
        <Search
          stations={stations}
          handleOptionChange={(key, abbr) => this.handleOptionChange(key, abbr)}
          handleSubmit={this.handleSubmit}
          selected={departOrArrive}
          date={date}
        />
        <Results
          schedule={this.state.schedule}
          handleOptionChange={(key, abbr) => this.handleOptionChange(key, abbr)}
          origin={stations[origin]}
          destination={stations[destination]}
          date={date}
          fetching={fetching}
        />
      </Container>
    );
  }
}

export default App;
