import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import BarcodeScreen from "../screens/BarcodeScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    <Stack.Screen name="BarcodeScanner" component={BarcodeScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
