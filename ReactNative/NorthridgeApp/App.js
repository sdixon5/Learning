import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Landing from "./components/Landing";
import Homepage from "./components/Homepage";

export default function App() {
  const [home, setHome] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {!home ? (
        <>
          <Landing accessHomePage={setHome} />
        </>
      ) : (
        <>
          <Homepage goBack={setHome} />
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
});
