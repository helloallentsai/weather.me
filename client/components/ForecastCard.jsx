import React from 'react';

const ForecastCard = props => {
  const { day } = props;

  let high = 0;
  let low = Infinity;

  const hours = props.hours.map((entry, idx) => {
    const { temp, temp_min, temp_max } = entry.main;
    low = Math.min(low, temp_min);
    high = Math.max(high, temp_max);

    const date = new Date(entry.dt * 1000);

    let hour = date.getHours();
    hour = hour > 12 ? hour - 12 + ' pm' : hour + ' am';

    return (
      <div className="hour" key={idx}>
        {hour} - {Math.round(temp)} degrees
      </div>
    );
  });

  high = Math.round(high);
  low = Math.round(low);

  return (
    <div className="forecast-card">
      <div className="day">{day}</div>
      <div className="high">{high}</div>
      <div className="low">{low}</div>
      <div className="hours">{hours}</div>
    </div>
  );
};

export default ForecastCard;
