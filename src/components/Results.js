import React from 'react';
import { ResultsContainer, Card } from './Styles';
export default props => {
  const results = props.schedule.map((trip, index) => (
    <Card key={index}>
      {trip['@origTimeMin']} - {trip['@destTimeMin']}
    </Card>
  ));
  return <ResultsContainer>{results}</ResultsContainer>;
};
