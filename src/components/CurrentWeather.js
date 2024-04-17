import React from "react";

import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "./RowText";

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
    innerCon,
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <View style={innerCon}>
          <Feather name="sun" size={100} color="black" />
          <Text style={temp}>6</Text>
          <Text style={feels}>Feels like 5</Text>
          <RowText
            messageOne={"High: 8"}
            messageTwo={"Low: 6"}
            containerStyles={highLowWrapper}
            messageOneStyles={highLow}
            messageTwoStyles={highLow}
          />
        </View>
        <RowText
          messageOne={"It's sunny"}
          messageTwo={"It's perfect t-shirt weather"}
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
  highLow: { color: "black", fontSize: 20 },
  highLowWrapper: { flexDirection: "row" },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: { fontSize: 48 },
  message: { fontSize: 30 },
});

export default CurrentWeather;
