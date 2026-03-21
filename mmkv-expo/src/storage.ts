import { createMMKV } from "react-native-mmkv";

export const storage = createMMKV();

export function createUser(params: string) {
  storage.set("user.name", params);
}

export function deleteUser() {
  storage.remove("user.name");
}
