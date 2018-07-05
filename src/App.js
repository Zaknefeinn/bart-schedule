import React, { Component } from 'react';
import { getStations } from './components/utils/getSchedule';

import { Container } from './components/Styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: []
    };
  }
  componentDidMount() {
    // this.setState({ stations: getStations() });
    getStations().then(res =>
      this.setState({ stations: res.data.root.stations.station })
    );
  }

  render() {
    return <Container>Test</Container>;
  }
}

export default App;
