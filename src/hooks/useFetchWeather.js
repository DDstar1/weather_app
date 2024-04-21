import { WEATHER_API_KEY } from "@env";
import { useState, useEffect } from "react";

export const useFetchWeather = (lat, lon) => {
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const res = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const data = await res.json();
        console.log(data);
        if (data.cod == "200" && weather.cod != "200") {
          setWeather(data);
          setError(null);
        } else {
          if (weather.cod != "200") {
            setError("Weather data not available");
          }
        }
      } catch (error) {
        setError("Weather data not available");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [weather, error]);

  return [loading, error, weather];
};
