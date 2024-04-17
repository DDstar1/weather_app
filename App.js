import React from "react";
import Tabs from "./src/components/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   container: { flex: 1, paddingTop: StatusBar.currentHeight || 0 },
// });

export default App;
