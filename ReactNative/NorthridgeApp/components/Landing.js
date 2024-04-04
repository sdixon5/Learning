import React from "react";
import { Text, SafeAreaView, StyleSheet, Button, Alert } from "react-native";

export default function Landing({ accessHomePage }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Northridge Programming Application</Text>
      <Button
        onPress={() => accessHomePage(true)}
        color="#0A3764"
        title="Homepage"
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
