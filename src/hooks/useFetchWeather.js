// import { WEATHER_API_KEY } from "@env";
import { useState, useEffect } from "react";

const WEATHER_API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

export const useFetchWeather = (lat, lon) => {
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=244d705589909b42030664893b2d4466&units=metric`
        );
        const data = await res.json();
        setWeather(data);
        if (data != null) {
          setWeather(data);

          // setError(null);
        } else {
          setError(`weather is error of `);
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [error, weather]);

  return [loading, error, weather];
};
