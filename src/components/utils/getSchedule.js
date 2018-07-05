import axios from 'axios';

export const getSchedule = (cmd, orig, dest, date, time) => {
  return axios.get(
    `http://api.bart.gov/api/sched.aspx?cmd=${cmd}&key=MW9S-E7SL-26DU-VV8V&orig=${orig}&dest=${dest}&time=${time}&date=${date}&b=2&a=4&json=y`
  );
};

export const getStations = () => {
  return axios.get(
    'http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y'
  );
};
