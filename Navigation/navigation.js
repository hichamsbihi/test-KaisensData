import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../Screens/Welcome";
import Applist from "../Screens/Applist";

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
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <AppStack.Screen name="WelcomeScreen" component={Welcome} />
        <AppStack.Screen name="ApplistScreen" component={Applist} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
