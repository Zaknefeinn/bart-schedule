import React, { Component } from 'react';
import {
  ResultsContainer,
  CardContainer,
  SearchInfo,
  Card,
  CardTime,
  SubCard
} from './Styles';
import Seed from './Seed';

class Results extends Component {
  shouldComponentUpdate(nextProps) {
    //if user has submitted a search, update results
    if (nextProps.fetching) {
      this.props.handleOptionChange('fetching', !nextProps.fetching);
      return true;
    } else {
      return false;
    }
  }
  render() {
    const results = this.props.schedule.map((trip, index) => {
      return (
        <Card key={index}>
          {/*Check how many stops and display each leg of the trip */}
          {trip.leg.map(leg => (
            <SubCard key={leg['@destTimeMin']}>
              <CardTime>
                <div>{leg['@origTimeMin']}</div>
                <div>{leg['@origin']}</div>
              </CardTime>
              <CardTime>
                <div>to</div>
              </CardTime>
              <CardTime>
                <div>{leg['@destTimeMin']}</div>
                <div>{leg['@destination']}</div>
              </CardTime>
            </SubCard>
          ))}
        </Card>
      );
    });

    let description;
    if (this.props.origin && this.props.destination) {
      description = (
        <div>
          <h1>
            {this.props.origin.name} - {this.props.destination.name}
          </h1>
        </div>
      );
    }
    return (
      <ResultsContainer>
        <SearchInfo>{description}</SearchInfo>
        <Seed />
      </ResultsContainer>
    );
  }
}
export default Results;
