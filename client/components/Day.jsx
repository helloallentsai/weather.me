import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Day = props => {
  const { dt, name, main, weather, sys } = props.day;

  const date = moment.unix(dt).format('ddd, h:mma');
  const sunrise = moment.unix(sys.sunrise).format('h:mma');
  const sunset = moment.unix(sys.sunset).format('h:mma');

  return (
    <div className="container-day">
      <div className="name">{name}</div>
      <div className="temp">{Math.round(main.temp)}°</div>
      <div className="feels-like">
        Feels like: {Math.round(main.feels_like)}
      </div>
      <div className="weather">{weather[0].description}</div>
      <div className="date">{date}</div>
      <div className="sunrise">Sunrise: {sunrise}</div>
      <div className="sunset">Sunset: {sunset}</div>
    </div>
  );
};

export default Day;
