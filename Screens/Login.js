import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Logo from "../Components/logo";
import AppButton from "../Components/AppButton";
import AppText from "../Components/AppText";

const Login = () => {
  return (
    <>
      <Logo />
      <AppText
        text="Welcome to 4In Shield!
Sign in to continue"
        style={styles.text}
      />
      <AppButton title="Sign In" nav="RoleScreen" style={styles.SignIn} />
      <TextInput style={styles.input1} placeholder="Username" />
      <TextInput style={styles.input2} placeholder="Password" />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    top: 200,
    left: 90,
  },
  input1: {
    height: 40,
    marginTop: 400,
    borderWidth: 1,
    backgroundColor: "white",
    width: 300,
    marginLeft: 50,
    borderColor: "green",
    borderRadius: 10,
  },
  input2: {
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    backgroundColor: "white",
    width: 300,
    marginLeft: 50,
    borderColor: "green",
    borderRadius: 10,
  },
  SignIn: {
    top: 600,
    left: 150,
  },
});

export default Login;
