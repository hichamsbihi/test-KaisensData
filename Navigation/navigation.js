import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import RoleScreen from "../Screens/RoleScreen";
import Welcome from "../Screens/Welcome";

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
        <AppStack.Screen name="HomeScreen" component={Home} />
        <AppStack.Screen name="LoginScreen" component={Login} />
        <AppStack.Screen name="RoleScreen" component={RoleScreen} />
        <AppStack.Screen name="WelcomeScreen" component={Welcome} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
