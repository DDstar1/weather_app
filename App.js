import React, { useState, useEffect } from "react";
import Tabs from "./src/components/Tabs";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Counter from "./src/demonstration/Counter";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const App = () => {
  const [loading, error, weather, lat, lon] = useGetWeather();
  console.log(loading, error, weather);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    );
  }

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={"large"} color={"blue"} />
      ) : (
        <ErrorItem
          loading={loading}
          error={error}
          weather={weather}
          lat={lat}
          lon={lon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    justifyContent: "center",
  },
});

export default App;
