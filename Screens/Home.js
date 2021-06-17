import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "../Components/logo";
import SignInButton from "../Components/SignInButton";

const Home = () => {
  return (
    <>
      <Logo />

      <Text style={styles.title}>
        Welcome to 4IN Shield! Sign in to continue
      </Text>

      <SignInButton
        title="Sign In with Email"
        image={require("../assets/mail.png")}
        nav="LoginScreen"
        style={styles.mailStyle}
      />

      <SignInButton
        title="Sign In with Gmail"
        image={require("../assets/google.png")}
        nav="LoginScreen"
        style={styles.gmailStyle}
      />

      <SignInButton
        title="Sign In with Facebook"
        image={require("../assets/facebook.png")}
        nav="LoginScreen"
        style={styles.facebookStyle}
      />
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

  mailStyle: {
    position: "absolute",
    left: 50,
    right: 50,
    flexDirection: "row",
    top: 350,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "black",
    borderStyle: "solid",
  },

  gmailStyle: {
    position: "absolute",
    left: 50,
    right: 50,
    flexDirection: "row",
    top: 450,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "black",
    borderStyle: "solid",
  },
  facebookStyle: {
    position: "absolute",
    left: 50,
    right: 50,
    flexDirection: "row",
    top: 550,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "black",
    borderStyle: "solid",
  },
});

export default Home;
