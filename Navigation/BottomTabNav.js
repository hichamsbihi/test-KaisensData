import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../Screens/Dashboard";
import Phone from "../Screens/Phone";
import SocialMedia from "../Screens/SocialMedia";

const BottomTabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "#3F63A9",
          elevation: 2,
          borderTopStartRadius: 5,
          borderTopEndRadius: 5,
        },
        activeTintColor: "white",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="monitor-dashboard"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Phone Usage"
        component={Phone}
        options={{
          tabBarLabel: "Phone",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="phone" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Social Media"
        component={SocialMedia}
        options={{
          tabBarLabel: "Social Media",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="facebook" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="alerts"
        component={Dashboard}
        options={{
          tabBarLabel: "Alerts",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="fan-alert"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
