import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/core";

const AppButton = ({ title, nav, style, stylee, onPress }) => {
  const navigation = useNavigation();
  const buttonStyle = { ...styles.button, ...style };
  const textStyle = { ...styles.text, ...stylee };
  return (
    <View>
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 10,
    borderColor: "black",
    borderStyle: "solid",
    position: "absolute",
    top: 600,
    left: 110,
  },
  text: {
    color: "#3F77B6",
    fontSize: 22,
    lineHeight: 20,
    backgroundColor: "white",
    height: 60,
    width: 170,
    borderRadius: 10,
    paddingTop: 20,
    paddingLeft: 27,
  },
});

export default AppButton;
