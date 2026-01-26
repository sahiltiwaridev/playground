import { useEffect, useState } from "react";
import userContext from "./UserContext";
import { getUser } from "../storage/storage";

export default function UserContextProvider({ children }: any) {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const username = getUser();
    if (username) {
      setUser(true);
    }
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}
