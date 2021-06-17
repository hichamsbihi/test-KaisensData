import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import RoleScreen from "../Screens/RoleScreen";
import Welcome from "../Screens/Welcome";
import QrCode from "../Screens/QrCode";
import ChildProfile from "../Screens/ChildProfile";
import RedirectDashboard from "../Screens/RedirectDashboard";
import BottomTabNav from "./BottomTabNav";

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
        <AppStack.Screen name="QrCodeScreen" component={QrCode} />
        <AppStack.Screen name="ChildProfileScreen" component={ChildProfile} />

        <AppStack.Screen
          name="RedirectDashboardScreen"
          component={RedirectDashboard}
        />
        <AppStack.Screen name="DashboardScreen" component={BottomTabNav} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
