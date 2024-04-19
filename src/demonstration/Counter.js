import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
  let [count, setCount] = useState(0);
  let [newCount, setnewCount] = useState(0);
  useEffect(() => {
    console.log(`Our count value is ${count}`);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`count: ${count}`}</Text>
      <Button
        color={"red"}
        title="increase the count"
        onPress={() => {
          setCount(count++);
          console.log(count);
        }}
      ></Button>
      <Button
        color={"green"}
        title="decrease the count"
        onPress={() => {
          setCount(count--);
          console.log(count);
        }}
      ></Button>{" "}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "orange" },
  title: { alignSelf: "center", fontSize: 25, marginTop: 25 },
});
export default Counter;
