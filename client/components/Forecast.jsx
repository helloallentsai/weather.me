import React from 'react';

const Forecast = ({ forecast }) => {
  let week = {};

  let map = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };

  for (let entry of forecast) {
    const date = new Date(entry.dt * 1000);
    const day = date.getDay();

    if (week[map[day]]) {
      week[map[day]].push(entry);
    } else {
      week[map[day]] = [entry];
    }
  }

  const days = Object.entries(week);

  return (
    <div className="container forecast">
      {days.map((day, idx) => (
        <ForecastCard key={idx} day={day[0]} hours={day[1]} />
      ))}
    </div>
  );
};

const ForecastCard = props => {
  const { day } = props;
  const hours = props.hours.map((entry, idx) => {
    const { temp } = entry.main;
    const date = new Date(entry.dt * 1000);

    let hour = date.getHours();
    hour = hour > 12 ? hour - 12 + ' pm' : hour + ' am';

    return (
      <div className="hour" key={idx}>
        {hour} - {Math.round(temp)} degrees
      </div>
    );
  });

  return (
    <div className="forecast-card">
      <div className="day">{day}</div>
      <div className="hours">{hours}</div>
    </div>
  );
};

export default Forecast;
