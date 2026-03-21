import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function QRScannerScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    if (!permission) requestPermission();
  }, [permission]);

  if (!permission) return <Text>Requesting permission...</Text>;
  if (!permission.granted) return <Text>No camera access</Text>;

  return (
    <View style={{ flex: 1 }}>
      <CameraView
        style={{ flex: 1 }}
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={(result) => {
          if (scanned) return;
          setScanned(true);
          console.log("QR:", result.data);
        }}
      />

      <Text
        style={{
          position: "absolute",
          bottom: 40,
          color: "white",
          alignSelf: "center",
        }}
      >
        {scanned ? "Scanned!" : "Scanning..."}
      </Text>
    </View>
  );
}
