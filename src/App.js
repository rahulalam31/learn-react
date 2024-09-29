import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("Jaigaon");
  const [weatherData, setWeatherData] = useState(null);

  const currentDate = new Date();
  const months = [
    "January",
    "Feb",
    "May",
    "June",
    "July",
    "August",
    "Septemeber",
    "October",
    "November",
    "December",
  ];

  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  const formatedDate = `${month} ${day}, ${year}`;

  const API_KEY = "2504f0c59b063e9f661a5707b48534e2";

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleCityChange = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  const getWeatherIconUrl = (main) => {
    switch (main) {
      case "Clouds":
        return "/assets/thunder.webp";
      case "Rain":
        return "/assets/rain_with_cloud.webp";
      case "Mist":
        return "/assets/Tornado.webp";
      case "Haze":
        return "/assets/sun.webp";
    }
  };

  return (
    <div className="App">
      <div className="container">
        {weatherData && (
          <React.Fragment>
            <h1 className="container_date">{formatedDate}</h1>
            <div className="weather_data">
              <h2 className="container_city">{weatherData.name}</h2>
              <img
                className="container_img"
                src={getWeatherIconUrl(weatherData.weather[0].main)}
                alt="weather icon"
                width="180px"
              />
              <h2 className="container_degree">{weatherData.main.temp}</h2>
              <h2 className="country_per">
                {weatherData.weather[0].description}
              </h2>
              <form className="form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter City Name"
                  onChange={handleCityChange}
                />
                <button type="submit">Get</button>
              </form>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
