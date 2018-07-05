import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { SearchContainer, Form, FormRow, Calendar } from './Styles';

const Search = props => {
  //map through each station and return option for each
  const options = props.stations.map((station, index) => (
    <option key={station.abbr} value={index}>
      {station.name}
    </option>
  ));
  //map through time array and return option for each
  const times = populateTime().map(time => (
    <option key={time} value={time}>
      {time}
    </option>
  ));
  return (
    <SearchContainer>
      <Form onSubmit={props.handleSubmit}>
        <FormRow>
          <select
            defaultValue=""
            name="from"
            onChange={key =>
              props.handleOptionChange('origin', key.target.value)
            }
          >
            <option value="" disabled hidden>
              Departing
            </option>
            {options}
          </select>
        </FormRow>
        <FormRow>
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
        </FormRow>
        <FormRow>
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
        </FormRow>
        <FormRow>
          <Calendar>
            <DatePicker
              selected={moment(props.date)}
              onChange={date =>
                props.handleOptionChange('date', moment(date._d))
              }
            />
            <select
              defaultValue=""
              name="time"
              onChange={key =>
                props.handleOptionChange('time', key.target.value)
              }
            >
              <option value="" disabled hidden>
                Time
              </option>
              {times}
            </select>
          </Calendar>
        </FormRow>
        <FormRow>
          <button type="submit">Get Schedule</button>
        </FormRow>
      </Form>
    </SearchContainer>
  );
};

//return array of available times to search
function populateTime() {
  var halfHours = ['00', '30'];
  var times = [];
  for (let h = 0; h < 2; h++) {
    let meridiem;
    h === 0 ? (meridiem = 'am') : (meridiem = 'pm');
    for (var i = 0; i < 12; i++) {
      let hour;
      i === 0 ? (hour = 12) : (hour = i);
      for (var j = 0; j < 2; j++) {
        const time = ('0' + hour).slice(-2) + ':' + halfHours[j] + meridiem;
        times.push(time);
      }
    }
  }
  return times;
}

export default Search;
