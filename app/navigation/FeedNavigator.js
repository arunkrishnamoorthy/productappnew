import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import BarcodeScreen from "../screens/BarcodeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: true }}>
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
      options={{
        title: "Products",
        headerLeft: () => (
          <MaterialCommunityIcons
            name="menu"
            size={25}
            color="#000"
            style={{
              padding: 4,
              margin: 3,
            }}
            backgroundColor="#fff"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></MaterialCommunityIcons>
        ),
      }}
    />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    <Stack.Screen name="BarcodeScanner" component={BarcodeScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
