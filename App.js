import { NavigationContainer } from "@react-navigation/native";
import Root from "./Navigation/Root";
import UserContextProvider from "./contexts/userContextProvider";

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <Root></Root>
      </NavigationContainer>
    </UserContextProvider>
  );
}
