import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import ShowData from "./showData";

function Weather() {
  const [link, setLink] = useState();
  const [city, setCity] = useState("");

  //custom hook to fetch data from api
  const { data, error, loading } = useFetch(link);

  let handleClick = (e) => {
    e.preventDefault();
    setLink(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=abca64b7c5d219a6ffaaf1661784fc93`
    );
  };

  return (
    <div className="weather">
      <h3>Weather App</h3>
      <div className="weather-search">
        <form onSubmit={(e) => handleClick(e)}>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Enter city name"
            className="search-input"
          />
          <input type="submit" text="Submit" />
        </form>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data && <ShowData data={data} />}
    </div>
  );
}

export default Weather;
