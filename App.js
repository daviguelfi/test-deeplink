import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import MorePage from "./Pages/MorePage";
import { Linking } from 'expo';


const Stack = createStackNavigator();

const prefix = Linking.makeUrl("/");

function App({ navigation }) {
  const linking = {
    prefixes: [prefix],
  };
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="MorePage" component={MorePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
