import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, Button } from "react-native";
import DisplayImage from "./DisplayImage";

export default function Homepage({ goBack }) {
  const [currentImage, setCurrentImage] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!currentImage ? (
        <>
          <Text style={styles.paragraph}>Homepage</Text>
          <Button
            onPress={() => setCurrentImage("one")}
            color="#0A3764"
            title="First Floor Image"
          />
          <Text></Text>
          <Button
            onPress={() => setCurrentImage("two")}
            color="#0A3764"
            title="Second Floor Image"
          />
          <Text></Text>
          <Button
            onPress={() => goBack(null)}
            color="#0A3764"
            title="Go Back"
          />
        </>
      ) : (
        <>
          <DisplayImage imageToLoad={currentImage} goBack={setCurrentImage} />
        </>
      )}
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
