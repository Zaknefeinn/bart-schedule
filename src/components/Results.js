import React from 'react';

export default props => {
  const results = props.schedule.map((trip, index) => (
    <li key={index}>
      {trip['@origTimeMin']} - {trip['@destTimeMin']}
    </li>
  ));
  return (
    <div>
      <ul>{results}</ul>
    </div>
  );
};
