
import React, { useEffect, useState } from "react";
const Temp = () => {
  const [weatherdata, setWeatherData] = useState(null);
  const [search, setSearch] = useState("Delhi");

  const fetchTemp = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5e3578aab5ed421d9b9872a8744a13d6`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    setWeatherData(data);
  };
  useEffect(() => {
    fetchTemp();
  }, []);

  return (
    <>
      <div>
        <div className="card">
          <div className="search">
            <input
              type="search"
              value={search}
              className="search-bar"
              placeholder="Enter the city"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <button
              className="getweather"
              onClick={(event) => fetchTemp(event)}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1.5em"
                width="1.5em"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
              </svg>
            </button>
          </div>
          {weatherdata !== null ? (
            <div className="weather-info">
              <h2 className="location">Weather in {search}</h2>
              <h1 className="temp">
                {Math.floor(weatherdata.main.temp - 273)}°C
              </h1>
              <h5 className="description">
                <img
                  className="icon"
                  src={`https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`}
                  alt="imgicon"
                />{weatherdata.weather[0].description}{" "}
              </h5>
              <h5 className="humidity">Humidity: {weatherdata.main.humidity}%</h5>
              <h5 className="wind">Wind speed: {weatherdata.wind.speed}km/h</h5>
              
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Temp;
