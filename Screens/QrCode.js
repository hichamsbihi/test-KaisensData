import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppText from "../Components/AppText";
import AppButton from "../Components/AppButton";

const QrCode = () => {
  return (
    <View>
      <AppText text="Please add your child devices" />

      <Text style={styles.p1}>
        The information from your child’s device will help us to assess their
        mental health, duration of sleep, places visited, used applications etc.
        It also gives you the ability to block or allow installed applications
      </Text>
      <Text style={styles.p2}>
        Please follow the following steps: {"\n"} 1.Bring your child’s mobile
        phone Scan{"\n"} 2.this QR code with your child’s device camera{"\n"}{" "}
        3.You will be redirected to the 4IN shield application download page{" "}
        {"\n"}
        4.Once the application is installed, click Next
      </Text>
      <Image style={styles.img} source={require("../assets/QrCode.png")} />

      <AppButton
        title="Next"
        nav="ChildProfileScreen"
        style={styles.startButton}
      />
      <AppButton
        title="Skip"
        nav="ChildProfileScreen"
        style={styles.skipButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  p1: {
    position: "absolute",
    top: 220,
    left: 15,
    right: 15,
    fontSize: 18,
    color: "white",
  },
  p2: {
    position: "absolute",
    top: 350,
    left: 15,
    right: 15,
    fontSize: 18,
    color: "white",
  },
  img: {
    position: "absolute",
    top: 510,
    left: 80,
  },

  startButton: {
    top: 685,
    left: 200,
  },

  skipButton: {
    top: 685,
    left: 50,
  },
});

export default QrCode;
