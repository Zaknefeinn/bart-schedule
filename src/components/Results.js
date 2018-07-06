import React, { Component } from 'react';
import {
  ResultsContainer,
  CardContainer,
  SearchInfo,
  Card,
  CardTime,
  SubCard,
  SubCardTitle,
  SubCardContent,
  Arrow,
  ArrowContainer
} from './Styles';

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
        <Card key={`${index}-${trip['@origTimeMin']}`}>
          {/*Check how many stops and display each leg of the trip */}
          {trip.leg.map((leg, i) => {
            return (
              <SubCard key={leg['@destTimeMin']}>
                <SubCardTitle>
                  <h3>Train {i + 1}</h3>
                </SubCardTitle>
                <SubCardContent>
                  <CardTime>
                    <h5>From</h5>
                    <div>{leg['@origTimeMin']}</div>
                    <div>{leg['@origin']}</div>
                  </CardTime>
                  <ArrowContainer>
                    <Arrow />
                    <Arrow />
                    <Arrow />
                  </ArrowContainer>
                  <CardTime>
                    <h5>To</h5>
                    <div>{leg['@destTimeMin']}</div>
                    <div>{leg['@destination']}</div>
                  </CardTime>
                </SubCardContent>
              </SubCard>
            );
          })}
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
        <CardContainer>{results}</CardContainer>
      </ResultsContainer>
    );
  }
}
export default Results;
