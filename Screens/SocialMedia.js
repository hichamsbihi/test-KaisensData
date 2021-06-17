import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "../Components/logo";

const SocialMedia = () => {
  return (
    <>
      <Logo />
      <Text style={styles.text}>Social Media page</Text>
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
export default SocialMedia;
