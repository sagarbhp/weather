import React from "react";

function ShowData({ data }) {
  return (
    <div>
      {data.name && <p className="dark-bkg">City: {data.name}</p>}
      {data.coord && (
        <>
          <p>Latitude: {data.coord.lat}</p>
          <p className="dark-bkg">Longitude: {data.coord.lon}</p>
        </>
      )}
      {data.main && data.main.temp && (
        <>
          <p>
            Temperature: {parseInt(data.main.temp - 273)} <sup>o</sup>C
          </p>
          <p className="dark-bkg">
            Feels like: {parseInt(data.main.feels_like - 273)} <sup>o</sup>C
          </p>
        </>
      )}
      {data.weather &&
        data.weather.length > 0 &&
        data.weather.map((weather) => {
          return (
            <div key={weather.id}>
              <p>Weather: {weather.main}</p>
              <p className="dark-bkg">Description: {weather.description}</p>
              <img
                className="icon"
                src={`http://openweathermap.org/img/w/${weather.icon}.png`}
                alt="weather icon"
              />
            </div>
          );
        })}
    </div>
  );
}

export default ShowData;
