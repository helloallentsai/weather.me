import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nav from './Nav';
import Day from './Day';
import Forecast from './Forecast';
import axios from 'axios';
import example from './example.forecast.json';

const App = () => {
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

  // useEffect(() => {
  //   fetch();
  // }, [zip]);

  const [zip, setZip] = useState(91006);
  const [day, setDay] = useState({
    coord: { lon: -122.09, lat: 37.39 },
    weather: [
      { id: 500, main: 'Rain', description: 'light rain', icon: '10d' }
    ],
    base: 'stations',
    main: {
      temp: 280.44,
      pressure: 1017,
      humidity: 61,
      temp_min: 279.15,
      temp_max: 281.15
    },
    visibility: 12874,
    wind: { speed: 8.2, deg: 340, gust: 11.3 },
    clouds: { all: 1 },
    dt: 1519061700,
    sys: {
      type: 1,
      id: 392,
      message: 0.0027,
      country: 'US',
      sunrise: 1519051894,
      sunset: 1519091585
    },
    id: 0,
    name: 'Mountain View',
    cod: 200
  });
  const [forecast, setForecast] = useState(example.list);

  return (
    <Router>
      <div className="container">
        <Nav />

        <Switch>
          <Route path="/" exact>
            <Day day={day} />
          </Route>
          <Route path="/forecast">
            <Forecast forecast={forecast} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
