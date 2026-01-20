import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { storage } from "./storage";

export default function App() {
  
  const username = storage.getString('user.name')

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!{username}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
