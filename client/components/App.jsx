import React, { useEffect, useState } from 'react';

import Nav from './Nav';
import Day from './Day';
import Forecast from './Forecast';
import axios from 'axios';

const App = () => {
  const [zip, setZip] = useState(91006);
  const [day, setDay] = useState({
    main: { temp: 0 },
    weather: [{ description: '' }]
  });
  const [forecast, setForecast] = useState([]);

  const fetch = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&APPID=30004a7a2eac9fc48d41cfb1e6d5a5a2`
      )
      .then(res => setDay(res.data));

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&units=imperial&APPID=30004a7a2eac9fc48d41cfb1e6d5a5a2`
      )
      .then(res => setForecast(res.data.list));
  };

  useEffect(() => {
    fetch();
  }, [zip]);

  return (
    <div className="container">
      <Nav setZip={setZip} />
      <Day day={day} />
      <Forecast forecast={forecast} />
    </div>
  );
};

export default App;
