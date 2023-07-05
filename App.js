import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "./src/screens/LoginScreen";
import MainScreen from "./src/screens/MainScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
