import { Button, Form } from "react-bootstrap";
import "./App.css";
import { useState } from "react";

function App() {
  const [city, setCity] = useState<string>("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCity(e.target.value);
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(city);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast</h1>

        <Form>
          <Form.Group className="formWeather" controlId="formWeather">
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

        <div className="forecast-container"></div>
      </header>
    </div>
  );
}

export default App;
