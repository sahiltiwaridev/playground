import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getUser } from "../storage/storage";

export default function Home() {
  const userName = getUser();
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <Text>Hello {userName}</Text>
      </View>
    </SafeAreaView>
  );
}
