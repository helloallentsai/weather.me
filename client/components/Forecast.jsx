import React from 'react';
import ForecastCard from './ForecastCard';
import moment from 'moment';

const Forecast = ({ forecast }) => {
  let week = {};

  for (let entry of forecast) {
    const day = moment.unix(entry.dt).format('dddd');

    if (week[day]) {
      week[day].push(entry);
    } else {
      week[day] = [entry];
    }
  }

  const days = Object.entries(week);

  return (
    <div className="container-sm forecast">
      {days.map((day, idx) => (
        <ForecastCard key={idx} day={day[0]} hours={day[1]} />
      ))}
    </div>
  );
};

export default Forecast;
