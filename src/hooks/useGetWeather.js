import * as Location from "expo-location";
import { useState, useEffect } from "react";

export const useGetWeather = () => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [permissionError, setPermissionError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status === "granted") {
          let location = await Location.getCurrentPositionAsync({});
          setLat(location.coords.latitude);
          setLon(location.coords.longitude);
        } else {
          setPermissionError("Permission to access location was denied");
        }
      } catch (error) {
        setPermissionError("Error fetching location or weather data");
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return [lat, lon, permissionError];
};
