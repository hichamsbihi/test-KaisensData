import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AppText = ({ text }) => {
  return (
    <View>
      <Text style={style.container}>{text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    position: "absolute",
    top: 150,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AppText;
