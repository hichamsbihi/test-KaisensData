import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AppText = ({ text, style }) => {
  const styleText = { ...styles.container, ...style };
  return (
    <View>
      <Text style={styleText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 150,
    left: 60,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AppText;
