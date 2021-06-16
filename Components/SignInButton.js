import React from "react";
import {
  TouchableHighlight,
  Text,
  Image,
  View,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/core";

const SignInButton = ({ title, style, image, nav }) => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      style={[style, styles.button]}
      onPress={() => navigation.navigate(nav)}
    >
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text style={styles.text}>{title}</Text>
          <Image source={image} style={styles.img} />
          <Text style={styles.arrow}> {">"}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  img: {
    position: "absolute",
    left: 200,
    top: 12,
    width: 25,
    height: 25,
  },
  button: {
    height: 50,
    borderRadius: 10,
    borderColor: "black",
    borderStyle: "solid",
  },
  text: {
    position: "absolute",
    left: 10,
    top: 15,
    color: "#3F77B6",

    fontSize: 18,
    lineHeight: 20,
  },
  arrow: {
    position: "absolute",
    left: 250,
    top: 5,
    fontWeight: "bold",
    fontSize: 30,
    color: "#3F77B6",
  },
});
export default SignInButton;
