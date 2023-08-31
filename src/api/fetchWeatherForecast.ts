interface WeatherForcast { 
  date: string,
  maxTemp: number,
  minTemp: number,
  avgTemp: number
}

const fetchWeatherForecast = async (city: string): Promise<WeatherForcast[]> => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`;

  return fetch(url, { method: "GET" })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
    })
    .then((data) => {
      if (data.forecast && data.forecast.forecastday) {
        return data.forecast.forecastday.map((forecastday: any) => ({
          date: forecastday.date,
          maxTemp: forecastday.day.maxtemp_c,
          minTemp: forecastday.day.mintemp_c,
          avgTemp: forecastday.day.avgtemp_c,
        }));
      } else {
        throw new Error("Invalid data format");
      }
    })
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
};

export default fetchWeatherForecast;