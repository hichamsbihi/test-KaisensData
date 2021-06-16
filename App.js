import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppStack from "./Navigation/navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return <AppStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
});
