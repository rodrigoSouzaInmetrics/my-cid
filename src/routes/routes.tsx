import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Home from "../screens/Home/Home";
import SignUp from "../screens/SignUp";

const Stack = createNativeStackNavigator();

export default function Route(){
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
             name="Login"
             component={Login}
             options={{
                headerShown: false
             }}
            />
            <Stack.Screen
             name="SignUp"
             component={SignUp}
             options={{
                headerShown: false
             }}
            />
            <Stack.Screen
             name="Home"
             component={Home}
             options={{
                headerShown: false
             }}
             />
        </Stack.Navigator>
    )
}