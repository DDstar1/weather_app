import React from "react";

import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.innerCon}>
          <Feather name="sun" size={100} color="black" />
          <Text style={styles.temp}>6</Text>
          <Text style={styles.feels}>Feels like 5</Text>
          <View style={styles.highLowWrapper}>
            <Text style={styles.highLow}>High: 8 </Text>
            <Text style={styles.highLow}> Low:6</Text>
          </View>
        </View>

        <View style={styles.bodyWrapper}>
          <Text style={styles.description}>Its sunny</Text>
          <Text style={styles.message}>Its perfect t-shirt weather</Text>
        </View>
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
