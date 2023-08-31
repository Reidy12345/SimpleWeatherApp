import { Button, Form } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import fetchWeatherForecast from "./api/fetchWeatherForecast";

interface WeatherForcast {
  date: string;
  maxTemp: number;
  minTemp: number;
  avgTemp: number;
}

function App() {
  const [city, setCity] = useState<string>("");
  const [weatherForcast, setWeatherForcast] = useState<WeatherForcast[]>([]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCity(e.target.value);
  }

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    const weatherForecast = await fetchWeatherForecast(city);
    console.log(weatherForecast);
    setWeatherForcast(weatherForecast);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast</h1>

        <Form>
          <Form.Group className="form-weather" controlId="formWeather">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your City Here"
              value={city}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form>

        <div className="forecast-container">
          {weatherForcast.length > 0 ? (
            weatherForcast.map((forecast, index) => (
              <div className="forecast" key={index}>
                <h2>{forecast.date}</h2>
                <p>Max Temp: {forecast.maxTemp}°C</p>
                <p>Min Temp: {forecast.minTemp}°C</p>
                <p>Avg Temp: {forecast.avgTemp}°C</p>
              </div>
            ))
          ) : (
            <p>No weather forecast available.</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
