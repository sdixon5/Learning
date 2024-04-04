import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, Button, Image } from "react-native";

export default function DisplayImage({ imageToLoad, goBack }) {
  let sourceImage;

  if (imageToLoad == "one") {
    sourceImage = require("../assets/onefloor.jpg");
  } else if (imageToLoad == "two") {
    sourceImage = require("../assets/twofloor.jpg");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={sourceImage} style={{ width: 375, height: 300 }} />
      <Text></Text>
      <Button
        onPress={() => {
          goBack(null);
        }}
        color="#0A3764"
        title="Go Back"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#5C000A",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
