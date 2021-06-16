import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";

const navigation = () => {
  const AppStack = createStackNavigator();
  const MyTheme = {
    colors: {
      background: "rgb(36, 113, 216)",
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <AppStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
