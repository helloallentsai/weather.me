import React, { useEffect, useState } from 'react';

const Day = props => {
  const { dt, name, main, weather } = props.data;

  const date = new Date(dt * 1000);
  const display = date.toLocaleDateString();
  return (
    <React.Fragment>
      <div className="name">{name}</div>
      <div className="temp">{main.temp}</div>
      <div className="weather">{weather[0].description}</div>
      <div className="date">{display}</div>
    </React.Fragment>
  );
};

export default Day;
