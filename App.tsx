import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home/Home";
import Route from "./src/routes/routes";

export default function App() {
 return (
   <NavigationContainer>
    <Route/>
   </NavigationContainer>
  );
}