import * as Location from "expo-location";
import { useState, useEffect } from "react";
// import { WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setError("Permission to access location was denied");
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);
        console.log(location.coords.latitude);
        console.log(location.coords.longitude);
      } catch (error) {
        setError(`Error fetching location or weather data ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    lat && lon ? fetchWeatherData() : "";
  }, [lat, lon]);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=244d705589909b42030664893b2d4466&units=metric`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setWeather(data);
      console.log(weather);
    } catch (error) {
      setError(`Could not fetch weather ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return [loading, error, weather, lat, lon];
};
