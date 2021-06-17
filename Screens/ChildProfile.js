import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppButton from "../Components/AppButton";
import AppText from "../Components/AppText";

const ChildProfile = () => {
  return (
    <>
      <AppText
        text="Your child’s profile information has been successfully added"
        style={styles.text}
      />
      <Image source={require("../assets/Vector.png")} style={styles.vector} />
      <Image source={require("../assets/Avatar.png")} style={styles.avatar} />
      <AppButton
        title="Next"
        style={styles.button1}
        nav="RedirectDashboardScreen"
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    left: 0,
  },
  vector: {
    position: "absolute",

    top: 250,
    left: 150,
  },
  avatar: {
    position: "absolute",
    top: 400,
    left: 60,
  },
});

export default ChildProfile;
