import React, { useState } from 'react';
import moment from 'moment';

const ForecastCard = props => {
  const { day } = props;

  let high = 0;
  let low = Infinity;

  const hours = props.hours.map((entry, idx) => {
    const { temp, temp_min, temp_max } = entry.main;
    const { description } = entry.weather[0];
    low = Math.min(low, temp_min);
    high = Math.max(high, temp_max);

    const hour = moment.unix(entry.dt).format('h a');

    let icon = description.split(' ').join('_');

    const night = [
      '7pm',
      '8pm',
      '9pm',
      '10pm',
      '11pm',
      '12am',
      '1am',
      '2am',
      '3am',
      '4am',
      '5am'
    ];
    const search = hour.split(' ').join('');

    if (night.indexOf(search) !== -1 && icon === 'clear_sky') {
      icon = 'clear_sky_night';
    } else if (night.indexOf(search) !== -1) {
      icon = 'night';
    }

    return (
      <div className="hour" key={idx}>
        <img className="hour-icon" src={`./assets/${icon}.png`}></img>
        {Math.round(temp)}° {hour}
      </div>
    );
  });

  high = Math.round(high);
  low = Math.round(low);

  const [toggle, setToggle] = useState(false);

  return (
    <div
      className="forecast-card"
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <div className="day">{day}</div>
      <span className="high">H: {high}</span>{' '}
      <span className="low">L: {low}</span>
      {toggle && <div className="hours">{hours}</div>}
    </div>
  );
};

export default ForecastCard;
