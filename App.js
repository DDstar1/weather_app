import Tabs from "./src/components/Tabs";
import { ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

import { useFetchWeather } from "./src/hooks/useFetchWeather";

const App = () => {
  const [lat, lon, permissionError] = useGetWeather();
  const [loading, error, weather] = useFetchWeather(lat, lon);

  console.log(lat, lon);
  console.log(weather.list);

  return loading ? (
    <ActivityIndicator style={styles.container} size={"large"} color={"blue"} />
  ) : permissionError || error ? (
    <ErrorItem
      loading={loading}
      error={error}
      weather={weather}
      lat={lat}
      lon={lon}
    />
  ) : (
    <NavigationContainer>
      <Tabs weather={weather} />
    </NavigationContainer>
  );
  // if (weather_data.error) {
  // }

  // // if (weather && weather.list) {
  // //   return (
  //     <NavigationContainer>
  //       <Tabs weather={weather} />
  //     </NavigationContainer>
  // //   );
  // // }

  // return (
  //   <View style={styles.container}>
  //     {loading ? (

  //     ) : (
  //       <ErrorItem
  //         loading={loading}
  //         error={error}
  //         weather={weather}
  //         lan={lan}
  //         lon={lon}
  //       />
  //     )}
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    justifyContent: "center",
  },
});

export default App;
