import { View, Text, TextInput, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { setUser as saveToStorage } from "../storage/storage";
import userContext from "../context/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const [value, setValue] = useState("");
  const { setUser } = useContext(userContext);

  function saveUser() {
    saveToStorage(value);
    setUser(true);
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Login</Text>
        <TextInput value={value} onChangeText={setValue} placeholder="Name" />
        <Pressable onPress={saveUser}>
          <Text>Save</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
