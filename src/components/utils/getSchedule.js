import axios from 'axios';

export const getSchedule = dest => {
  axios.get(`http://api.bart.gov/api/sched.aspx`);
};

export const getStations = () => {
  return axios.get(
    'http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y'
  );
};
