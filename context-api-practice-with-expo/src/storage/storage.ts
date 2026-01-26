import storage from "./mmkv";

export function setUser(params: string) {
  storage.set("user.name", params);
}

export function getUser() {
  return storage.getString("user.name");
}
