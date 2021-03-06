import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const logo = () => {
  return (
    <View>
      <Image style={style.container} source={require("../assets/logo.png")} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    position: "absolute",
    width: 100,
    height: 100,
    left: 140,
    top: 57,
  },
});

export default logo;
