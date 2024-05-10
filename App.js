import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Product from "./screens/Product";
import ProductDetail from "./screens/ProductDetail";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Detail" component={ProductDetail} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
