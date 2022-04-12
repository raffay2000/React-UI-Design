import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import Verify from '../screens/Verify';
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import GetStarted from "../screens/GetStarted";
import Verify from "../screens/Verify";
import Ticket from "../screens/Ticket";
import Form from "../screens/Form";

import MainRoutes from "./MainRoutes";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} initialParams={true} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="Ticket" component={Ticket} />

        <Stack.Screen name="MainRoutes" component={MainRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
