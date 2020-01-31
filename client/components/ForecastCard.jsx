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
    console.log(icon);
    const night = ['7pm', '10pm', '1am', '4am'];
    const search = hour.split(' ').join('');

    if (night.indexOf(search) !== -1 && icon === 'clear_sky') {
      icon = 'clear_sky_night';
    } else if (night.indexOf(search) !== -1) {
      icon = 'night';
    }

    return (
      <div className="hour-container" key={idx}>
        <span className="hour">{hour}</span>
        <span>
          <img className="hour-icon" src={`./assets/${icon}.png`}></img>
          {Math.round(temp)}°
        </span>{' '}
      </div>
    );
  });

  high = Math.round(high);
  low = Math.round(low);

  const [toggle, setToggle] = useState(true);

  return (
    <div
      className="forecast-card"
      // onClick={() => {
      //   setToggle(!toggle);
      // }}
    >
      <div className="day">{day}</div>
      <span className="high">H: {high}°</span>{' '}
      <span className="low">L: {low}°</span>
      {toggle && <div className="hours">{hours}</div>}
    </div>
  );
};

export default ForecastCard;
