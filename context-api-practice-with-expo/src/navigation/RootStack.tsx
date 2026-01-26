import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import userContext from "../context/UserContext";
import Home from "../screen/Home";
import Login from "../screen/Login";

const Stack = createNativeStackNavigator();

export default function RootStack() {
  const { user } = useContext(userContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
}
