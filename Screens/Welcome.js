import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppText from "../Components/AppText";
import AppButton from "../Components/AppButton";

const Welcome = () => {
  return (
    <>
      <View>
        <Text style={styles.title}>Welcome to 4IN Shield</Text>
      </View>
      <Image style={styles.img} source={require("../assets/chatting.png")} />
      <AppButton nav="QrCodeScreen" title="Start" />
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    position: "absolute",
    top: 240,
  },

  title: {
    position: "absolute",
    top: 150,
    left: 65,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Welcome;
