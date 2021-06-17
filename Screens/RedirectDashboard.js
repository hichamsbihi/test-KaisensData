import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppButton from "../Components/AppButton";
import AppText from "../Components/AppText";
import BottomTabNav from "../Navigation/BottomTabNav";

const RedirectDashboard = () => {
  return (
    <>
      <AppText
        text="Thank you for your confidence in us."
        style={styles.text}
      />

      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <AppButton title="Next" style={styles.button1} nav="DashboardScreen" />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    left: 30,
  },

  logo: {
    position: "absolute",
    top: 300,
    left: 60,
  },
  button1: {
    top: 630,
  },
});

export default RedirectDashboard;
