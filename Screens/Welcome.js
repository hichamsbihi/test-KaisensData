import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Logo from "../Components/logo";
import AppButton from "../Components/AppButton";
import AppText from "../Components/AppText";
import RNAndroidInstalledApps from "react-native-android-installed-apps";
import RNAndroidAppList from "react-native-android-app-list";
import {
  AppInstalledChecker,
  CheckPackageInstallation,
} from "react-native-check-app-install";
const showMe = console.log;
const Welcome = ({ navigation }) => {
  const [appsList, setAppsList] = useState([]);

  const getApps = async () => {
    const listApp = await AppInstalledChecker.getAppList();
    //showMe(listApp);
    setAppsList(listApp);
    //showMe(appsList);
    navigation.navigate("ApplistScreen", { appsList });
  };

  return (
    <>
      <Logo />
      <AppText
        text="Welcome to 4In Shield!
Sign in to continue"
        style={styles.text}
      />

      <AppButton
        title="Show Apps"
        style={styles.ShowApp}
        onPress={() => getApps()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    top: 200,
    left: 90,
  },

  ShowApp: {
    top: 350,
  },
});

export default Welcome;
