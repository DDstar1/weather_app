import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const ErrorItem = ({ error, loading, weather, lat, lon }) => {
  return (
    <View style={styles.container}>
      <Text>Sorry something went wrong</Text>
      <Entypo name="emoji-sad" size={100} color="white" />
      <Text>{`error=${error} \n loading=${loading} \n weather=${weather["cod"]} \n lat=${lat} \n lon=${lon}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  errorMessage: {
    fontSize: 30,
    color: "white",
    marginHorizontal: 10,
    textAlign: "center",
  },
});

export default ErrorItem;
