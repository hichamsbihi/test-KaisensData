import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import AppText from "../Components/AppText";

const RoleScreen = ({ navigation }) => {
  return (
    <>
      <View>
        <AppText text="Who is going to use this device ?" />
      </View>
      <View>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("WelcomeScreen")}
        >
          <Image
            style={styles.Parents}
            source={require("../assets/Parents.png")}
          />
        </TouchableWithoutFeedback>
      </View>

      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("WelcomeScreen")}
      >
        <Image style={styles.child} source={require("../assets/childs.png")} />
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  Parents: {
    position: "absolute",
    width: 300,
    height: 200,
    left: 50,
    top: 250,
    borderRadius: 10,
  },

  child: {
    position: "absolute",
    width: 350,
    height: 250,
    left: 50,
    top: 470,
    borderRadius: 10,
  },
});

export default RoleScreen;
