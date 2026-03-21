import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { createUser, deleteUser, storage } from "./storage";
import { useEffect, useState } from "react";
import { useMMKVString } from "react-native-mmkv";

export default function App() {
  const [name, setName] = useState("");

  const [username] = useMMKVString("user.name", storage);

  return (
    <View style={styles.container}>
      <Text>{username}</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter name"
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={() => createUser(name)}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => deleteUser()}>
        <Text style={styles.buttonText}>Delete</Text>
      </Pressable>
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
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
