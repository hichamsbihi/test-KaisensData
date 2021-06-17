import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "../Components/logo";

const Phone = () => {
  return (
    <>
      <Logo />
      <Text style={styles.text}>Phone page</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "white",
    position: "absolute",
    top: 300,
    left: 80,
  },
});
export default Phone;
