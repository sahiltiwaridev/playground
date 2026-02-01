import QRCode from "react-native-qrcode-svg";
import { View } from "react-native";

type Props = {
  value: string;
};

export default function QRCodeView({ value }: Props) {
  return (
    <View>
      <QRCode value={value} size={200} />
    </View>
  );
}
