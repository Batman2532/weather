import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=393b1b87620a9caf0458970af6a28f9c`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [city]);

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          {typeof weather.main != "undefined" ? (
            <div>
              <div className="name">
                {weather.name}, {weather.sys.country}
              </div>

              <div className="date">{dateBuilder(new Date())}</div>
              <div className="temp">
                {Math.round(weather.main.temp - 273.5)}°c
              </div>
              <div className="desc">{weather.weather[0].description}</div>
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
