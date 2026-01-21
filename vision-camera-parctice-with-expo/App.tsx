import { StyleSheet, View, Text, Pressable } from "react-native";
import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera";
import { useEffect } from "react";

export default function App() {
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice("back");

  useEffect(() => {
    if (hasPermission === false) {
      requestPermission();
    }
  }, [hasPermission]);

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>No camera permission</Text>
        <Pressable onPress={requestPermission} style={styles.button}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </Pressable>
      </View>
    );
  }

  if (device == null) {
    return (
      <View style={styles.container}>
        <Text>No camera device found</Text>
      </View>
    );
  }

  return (
    <Camera 
      style={StyleSheet.absoluteFill} 
      device={device} 
      isActive={true} 
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  button: { padding: 12, backgroundColor: "#000", borderRadius: 6, marginTop: 10 },
  buttonText: { color: "#fff", fontWeight: "600" },
});