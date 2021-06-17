import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/core";

const AppButton = ({ title, nav, style, stylee }) => {
  const navigation = useNavigation();
  const buttonStyle = { ...styles.button, ...style };
  const textStyle = { ...styles.text, ...stylee };
  return (
    <View>
      <TouchableHighlight
        style={buttonStyle}
        onPress={() => navigation.navigate(nav)}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableHighlight>
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
    top: 680,
    left: 130,
  },
  text: {
    color: "#3F77B6",
    fontSize: 22,
    lineHeight: 20,
    backgroundColor: "white",
    height: 60,
    width: 120,
    borderRadius: 10,
    paddingTop: 20,
    paddingLeft: 35,
  },
});

export default AppButton;
