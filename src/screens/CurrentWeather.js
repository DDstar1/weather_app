import React from "react";

import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
    innerCon,
  } = styles;
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;
  const weatherCondition = weather[0].main;
  console.log(weatherData);
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor },
      ]}
    >
      <View style={container}>
        <View style={innerCon}>
          <Feather
            name={weatherType[weatherCondition].icon}
            size={100}
            color="white"
          />
          <Text style={tempStyles}>{`${temp}°`}</Text>
          <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
          <RowText
            messageOne={`High: ${temp_max}°`}
            messageTwo={`Low: ${temp_min}°`}
            containerStyles={highLowWrapper}
            messageOneStyles={highLow}
            messageTwoStyles={highLow}
          />
        </View>
        <RowText
          messageOne={weather[0].description}
          messageTwo={weatherType[weatherCondition].message}
          containerStyles={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  container: {
    paddingTop: 40,
    backgroundColor: "yellow",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
  },
  innerCon: {
    alignItems: "center",
  },
  temp: { color: "black", fontSize: 48 },
  feels: { color: "black", fontSize: 30 },
  highLow: { color: "black", fontSize: 25 },
  highLowWrapper: { flexDirection: "row" },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: { fontSize: 40 },
  message: { fontSize: 30 },
});

export default CurrentWeather;
