import React from 'react';
import { ResultsContainer, CardContainer, SearchInfo, Card } from './Styles';

const Results = props => {
  const results = props.schedule.map((trip, index) => (
    <Card key={index}>
      {trip['@origTimeMin']} - {trip['@destTimeMin']}
    </Card>
  ));
  return (
    <ResultsContainer>
      <SearchInfo />
      <CardContainer>{results}</CardContainer>
    </ResultsContainer>
  );
};
export default Results;
