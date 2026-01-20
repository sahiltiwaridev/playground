import { createMMKV } from "react-native-mmkv";

export const storage = createMMKV();
storage.set("user.name", "Sahil");
