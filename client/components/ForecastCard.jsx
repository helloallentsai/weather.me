import React from 'react';
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

    const hour = moment.unix(entry.dt).format('hA');

    return (
      <div className="hour" key={idx}>
        {hour} - {Math.round(temp)} degrees
        <div>{description}</div>
      </div>
    );
  });

  high = Math.round(high);
  low = Math.round(low);

  return (
    <div className="forecast-card">
      <div className="day" onClick={() => {}}>
        {day}
      </div>
      <div className="high">{high}</div>
      <div className="low">{low}</div>

      <div className="hours">{hours}</div>
    </div>
  );
};

export default ForecastCard;
