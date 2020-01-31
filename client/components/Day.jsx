import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Day = props => {
  const { dt, name, main, weather, sys } = props.day;
  const { description } = weather[0];
  const date = moment.unix(dt).format('ddd, h:mma');
  const sunrise = moment.unix(sys.sunrise).format('h:mma');
  const sunset = moment.unix(sys.sunset).format('h:mma');

  const hour = moment.unix(dt).format('ha');
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

  if (night.indexOf(hour) !== -1 && icon === 'clear_sky') {
    icon = 'clear_sky_night';
  } else if (night.indexOf(hour) !== -1) {
    icon = 'night';
  }
  console.log(props.day);
  return (
    <div className="container-day">
      <div className="name">{name}</div>
      <div className="temp">{Math.round(main.temp)}°</div>
      <div className="feels-like">
        Feels like: {Math.round(main.feels_like)}
      </div>
      <div className="icon-container">
        <img className="icon" src={`./assets/${icon}.png`}></img>
      </div>
      <div className="weather">{description}</div>
      <div className="date">{date}</div>
      <div className="sunrise">Sunrise: {sunrise}</div>
      <div className="sunset">Sunset: {sunset}</div>
    </div>
  );
};

export default Day;
