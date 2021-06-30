import React from "react";
import { View, Text, StyleSheet } from "react-native";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const Applist = ({ route }) => {
  const apps = route.params;
  //console.log(apps.appsList);
  console.log(apps.appsList[1]);
  return (
    <View>
      <Text style={styles.title}>List of installed App</Text>
      <View style={styles.view}>
        {apps.appsList.map((app) => (
          <View>
            <Text style={styles.text} key={getRandomInt(6)}>
              {app}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignSelf: "center",
    marginTop: 16,
  },

  text: {
    fontSize: 18,
  },

  title: {
    alignSelf: "center",
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
export default Applist;
