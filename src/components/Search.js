import React from 'react';
import { SearchContainer } from './Styles';
export default props => {
  const options = props.stations.map(station => (
    <option key={station.abbr} value={station.abbr}>
      {station.name}
    </option>
  ));
  return (
    <SearchContainer>
      <form onSubmit={props.handleSubmit}>
        <select
          defaultValue=""
          name="from"
          onChange={key => props.handleOptionChange('origin', key.target.value)}
        >
          <option value="" disabled hidden>
            Departing
          </option>
          {options}
        </select>
        <select
          defaultValue=""
          name="to"
          onChange={key =>
            props.handleOptionChange('destination', key.target.value)
          }
        >
          <option value="" disabled hidden>
            Arriving
          </option>
          {options}
        </select>
        <label>
          <input
            type="radio"
            value="arrive"
            checked={props.selected === 'arrive'}
            onChange={option =>
              props.handleOptionChange('departOrArrive', option.target.value)
            }
          />
          Arrive
        </label>
        <label>
          <input
            type="radio"
            value="depart"
            checked={props.selected === 'depart'}
            onChange={option =>
              props.handleOptionChange('departOrArrive', option.target.value)
            }
          />
          Depart
        </label>
        <button type="submit">Get Schedule</button>
      </form>
    </SearchContainer>
  );
};
