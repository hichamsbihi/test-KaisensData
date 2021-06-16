import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "../Components/logo";
import SignInButton from "../Components/SignInButton";

const Home = ({ navigation }) => {
  return (
    <>
      <View>
        <Logo />
      </View>
      <View>
        <Text style={styles.title}>
          Welcome to 4IN Shield! Sign in to continue
        </Text>
      </View>
      <View style={styles.buttonStyle}>
        <SignInButton style={{ height: 100 }} title="Sign in with Email" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    position: "absolute",
    height: 89,
    left: 55,
    right: 55,
    top: 200,
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 30,
  },

  buttonStyle: {
    position: "absolute",
    left: 50,
    right: 50,

    top: 350,
  },
});

export default Home;
