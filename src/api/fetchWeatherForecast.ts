const fetchWeatherForecast = (city: string): Promise<any> => {
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
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
};

export default fetchWeatherForecast;