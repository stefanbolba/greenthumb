import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./providers/AuthProvider";
import Navigator from "./navigator/Navigator";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
